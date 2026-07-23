import { useState, useEffect } from 'react'
import { FaSearch, FaPhone, FaWhatsapp, FaDownload } from 'react-icons/fa'
import API from '../api/api'

export default function Bookings() {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [eventFilter, setEventFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('ltcs_token')
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`
        const res = await API.get('/bookings')
        setBookings(res.data.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchBookings()
  }, [])

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem('ltcs_token')
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`
      await API.patch(`/bookings/${id}`, { status })
      setBookings(bookings.map(b => b._id === id ? { ...b, status } : b))
      if (selected?._id === id) setSelected({ ...selected, status })
    } catch (err) {
      console.error(err)
    }
  }

  const exportCSV = () => {
    const headers = ['Name', 'Phone', 'Email', 'Event Type', 'Event Date', 'Guests', 'Message', 'Status', 'Received']
    const rows = filtered.map(b => [
      b.name,
      b.phone,
      b.email || 'N/A',
      b.eventType,
      b.eventDate || 'N/A',
      b.guests || 'N/A',
      b.message || 'N/A',
      b.status,
      new Date(b.createdAt).toLocaleDateString()
    ])
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ltcs-bookings-${new Date().toLocaleDateString()}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const filtered = bookings.filter(b => {
    const matchStatus = filter === 'all' || b.status === filter
    const matchEvent = eventFilter === 'all' || b.eventType === eventFilter
    const matchSearch = search === '' ||
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.phone.includes(search) ||
      (b.email && b.email.toLowerCase().includes(search.toLowerCase()))
    return matchStatus && matchEvent && matchSearch
  })

  const eventTypes = [...new Set(bookings.map(b => b.eventType))]

  if (loading) return <div className="admin-loading">Loading...</div>

  return (
    <div className="admin-page">
      <h1 className="admin-page-title">Booking Requests</h1>
      <p className="admin-page-sub">Total: {bookings.length} · Showing: {filtered.length}</p>

      {/* Search */}
      <div className="admin-search-wrap">
        <FaSearch className="admin-search-icon" />
        <input
          type="text"
          className="admin-search"
          placeholder="Search by name, phone or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filters + Export */}
      <div className="admin-filter-row">
        <div className="admin-filters">
          {['all', 'pending', 'confirmed', 'cancelled'].map((f) => (
            <button
              key={f}
              className={`admin-filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <select
            className="admin-select"
            value={eventFilter}
            onChange={(e) => setEventFilter(e.target.value)}
          >
            <option value="all">All Events</option>
            {eventTypes.map(e => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>

          <button className="admin-export-btn" onClick={exportCSV}>
            <FaDownload /> Export CSV
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Event Type</th>
              <th>Event Date</th>
              <th>Guests</th>
              <th>Status</th>
              <th>Action</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b) => (
              <tr key={b._id}>
                <td>{b.name}</td>
                <td>
                  <div className="admin-contact-btns">
                    <a href={`tel:${b.phone}`} className="admin-call-btn">
                      <FaPhone /> {b.phone}
                    </a>
                    <a
                      href={`https://wa.me/91${b.phone}?text=Hello ${b.name}, regarding your ${b.eventType} booking with LTCS.`}
                      target="_blank"
                      rel="noreferrer"
                      className="admin-wa-btn"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </td>
                <td>{b.eventType}</td>
                <td>{b.eventDate || 'N/A'}</td>
                <td>{b.guests || 'N/A'}</td>
                <td>
                  <span className={`admin-status ${b.status}`}>
                    {b.status}
                  </span>
                </td>
                <td>
                  <select
                    className="admin-select"
                    value={b.status}
                    onChange={(e) => updateStatus(b._id, e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td>
                  <button
                    className="admin-detail-btn"
                    onClick={() => setSelected(b)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="admin-empty">No bookings found</div>
        )}
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="admin-modal" onClick={() => setSelected(null)}>
          <div className="admin-modal-box" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>Booking Details</h3>
              <button onClick={() => setSelected(null)}>×</button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-detail-grid">
                <div className="admin-detail-item">
                  <label>Name</label>
                  <span>{selected.name}</span>
                </div>
                <div className="admin-detail-item">
                  <label>Phone</label>
                  <span><a href={`tel:${selected.phone}`}>{selected.phone}</a></span>
                </div>
                <div className="admin-detail-item">
                  <label>Email</label>
                  <span>{selected.email || 'Not provided'}</span>
                </div>
                <div className="admin-detail-item">
                  <label>Event Type</label>
                  <span>{selected.eventType}</span>
                </div>
                <div className="admin-detail-item">
                  <label>Event Date</label>
                  <span>{selected.eventDate || 'Not specified'}</span>
                </div>
                <div className="admin-detail-item">
                  <label>Guests</label>
                  <span>{selected.guests || 'Not specified'}</span>
                </div>
                <div className="admin-detail-item full">
                  <label>Message</label>
                  <span>{selected.message || 'No message'}</span>
                </div>
                <div className="admin-detail-item">
                  <label>Status</label>
                  <span className={`admin-status ${selected.status}`}>
                    {selected.status}
                  </span>
                </div>
                <div className="admin-detail-item">
                  <label>Received</label>
                  <span>{new Date(selected.createdAt).toLocaleString()}</span>
                </div>
              </div>

              <div className="admin-detail-actions">
                <a href={`tel:${selected.phone}`} className="admin-action-btn call">
                  <FaPhone /> Call Now
                </a>
                <a
                  href={`https://wa.me/91${selected.phone}?text=Hello ${selected.name}, regarding your ${selected.eventType} booking with LTCS.`}
                  target="_blank"
                  rel="noreferrer"
                  className="admin-action-btn whatsapp"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <select
                  className="admin-select"
                  value={selected.status}
                  onChange={(e) => updateStatus(selected._id, e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}