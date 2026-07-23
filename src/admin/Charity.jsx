import { useState, useEffect } from 'react'
import API from '../api/api'

export default function CharityAdmin() {
  const [charities, setCharities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCharity = async () => {
      try {
        const token = localStorage.getItem('ltcs_token')
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`
        const res = await API.get('/charity')
        setCharities(res.data.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchCharity()
  }, [])

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem('ltcs_token')
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`
      await API.patch(`/charity/${id}`, { status })
      setCharities(charities.map(c => c._id === id ? { ...c, status } : c))
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) return <div className="admin-loading">Loading...</div>

  return (
    <div className="admin-page">
      <h1 className="admin-page-title">Charity Registrations</h1>
      <p className="admin-page-sub">Total: {charities.length} registrations</p>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Type</th>
              <th>Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {charities.map((c) => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td><a href={`tel:${c.phone}`}>{c.phone}</a></td>
                <td>{c.email || 'N/A'}</td>
                <td>{c.type}</td>
                <td>{c.message || 'N/A'}</td>
                <td>
                  <span className={`admin-status ${c.status}`}>
                    {c.status}
                  </span>
                </td>
                <td>
                  <select
                    className="admin-select"
                    value={c.status}
                    onChange={(e) => updateStatus(c._id, e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="contacted">Contacted</option>
                    <option value="active">Active</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {charities.length === 0 && (
          <div className="admin-empty">No charity registrations found</div>
        )}
      </div>
    </div>
  )
}