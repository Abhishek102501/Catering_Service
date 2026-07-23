import { useState, useEffect } from 'react'
import { FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa'
import API from '../api/api'

const emptyForm = { name: '', role: '', text: '', rating: 5 }

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [editing, setEditing] = useState(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const token = localStorage.getItem('ltcs_token')
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`
      const res = await API.get('/testimonials')
      setTestimonials(res.data.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const openAdd = () => {
    setForm(emptyForm)
    setEditing(null)
    setShowForm(true)
  }

  const openEdit = (t) => {
    setForm({ name: t.name, role: t.role, text: t.text, rating: t.rating })
    setEditing(t._id)
    setShowForm(true)
  }

  const save = async () => {
    if (!form.name || !form.role || !form.text) {
      alert('Please fill all required fields')
      return
    }
    setSaving(true)
    try {
      const token = localStorage.getItem('ltcs_token')
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`
      if (editing) {
        await API.patch(`/testimonials/${editing}`, form)
      } else {
        await API.post('/testimonials', form)
      }
      await fetchTestimonials()
      setShowForm(false)
      setForm(emptyForm)
      setEditing(null)
    } catch (err) {
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  const deleteTestimonial = async (id) => {
    if (!window.confirm('Are you sure you want to delete this testimonial?')) return
    try {
      const token = localStorage.getItem('ltcs_token')
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`
      await API.delete(`/testimonials/${id}`)
      setTestimonials(testimonials.filter(t => t._id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) return <div className="admin-loading">Loading...</div>

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Testimonials</h1>
          <p className="admin-page-sub">Total: {testimonials.length} testimonials</p>
        </div>
        <button className="admin-add-btn" onClick={openAdd}>
          <FaPlus /> Add Testimonial
        </button>
      </div>

      {/* Testimonials Grid */}
      <div className="admin-testi-grid">
        {testimonials.map((t) => (
          <div className="admin-testi-card" key={t._id}>
            <div className="admin-testi-stars">
              {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
            </div>
            <p className="admin-testi-text">"{t.text}"</p>
            <div className="admin-testi-author">
              <div className="admin-testi-avatar">{t.name[0]}</div>
              <div>
                <div className="admin-testi-name">{t.name}</div>
                <div className="admin-testi-role">{t.role}</div>
              </div>
            </div>
            <div className="admin-testi-actions">
              <button className="admin-edit-btn" onClick={() => openEdit(t)}>
                <FaEdit /> Edit
              </button>
              <button className="admin-delete-btn" onClick={() => deleteTestimonial(t._id)}>
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
        {testimonials.length === 0 && (
          <div className="admin-empty">No testimonials yet. Add your first one!</div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="admin-modal" onClick={() => setShowForm(false)}>
          <div className="admin-modal-box" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>{editing ? 'Edit Testimonial' : 'Add Testimonial'}</h3>
              <button onClick={() => setShowForm(false)}>×</button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-form">
                <div className="admin-field">
                  <label>Client Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Ramesh Gupta"
                    value={form.name}
                    onChange={handle}
                  />
                </div>
                <div className="admin-field">
                  <label>Role / Location *</label>
                  <input
                    type="text"
                    name="role"
                    placeholder="e.g. Wedding Client, Kanpur"
                    value={form.role}
                    onChange={handle}
                  />
                </div>
                <div className="admin-field">
                  <label>Rating</label>
                  <select name="rating" value={form.rating} onChange={handle} className="admin-select" style={{ width: '100%' }}>
                    <option value={5}>★★★★★ (5)</option>
                    <option value={4}>★★★★☆ (4)</option>
                    <option value={3}>★★★☆☆ (3)</option>
                  </select>
                </div>
                <div className="admin-field">
                  <label>Review Text *</label>
                  <textarea
                    name="text"
                    placeholder="Write the client's review here..."
                    value={form.text}
                    onChange={handle}
                    rows={4}
                    style={{ width: '100%', padding: '12px 16px', border: '1.5px solid #E0E0D8', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '.9rem', outline: 'none', resize: 'vertical' }}
                  />
                </div>
                <button
                  className="admin-login-btn"
                  onClick={save}
                  disabled={saving}
                >
                  {saving ? 'Saving...' : editing ? 'Update Testimonial' : 'Add Testimonial'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}