import { useState, useEffect } from 'react'
import { FaCalendarAlt, FaHeart, FaClock, FaCheckCircle } from 'react-icons/fa'
import API from '../api/api'

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    pendingBookings: 0,
    confirmedBookings: 0,
    totalCharity: 0
  })
  const [recentBookings, setRecentBookings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('ltcs_token')
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`

        const [bookingsRes, charityRes] = await Promise.all([
          API.get('/bookings'),
          API.get('/charity')
        ])

        const bookings = bookingsRes.data.data
        const charities = charityRes.data.data

        setStats({
          totalBookings: bookings.length,
          pendingBookings: bookings.filter(b => b.status === 'pending').length,
          confirmedBookings: bookings.filter(b => b.status === 'confirmed').length,
          totalCharity: charities.length
        })

        setRecentBookings(bookings.slice(0, 5))
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const statCards = [
    { label: 'Total Bookings', value: stats.totalBookings, icon: <FaCalendarAlt />, color: '#1B7B34' },
    { label: 'Pending', value: stats.pendingBookings, icon: <FaClock />, color: '#F5A623' },
    { label: 'Confirmed', value: stats.confirmedBookings, icon: <FaCheckCircle />, color: '#2EAA4A' },
    { label: 'Charity Requests', value: stats.totalCharity, icon: <FaHeart />, color: '#C2185B' },
  ]

  if (loading) return <div className="admin-loading">Loading...</div>

  return (
    <div className="admin-page">
      <h1 className="admin-page-title">Dashboard</h1>
      <p className="admin-page-sub">Welcome back! Here's what's happening.</p>

      {/* Stat Cards */}
      <div className="admin-stats-grid">
        {statCards.map((s) => (
          <div className="admin-stat-card" key={s.label}>
            <div className="admin-stat-icon" style={{ background: s.color }}>
              {s.icon}
            </div>
            <div className="admin-stat-info">
              <div className="admin-stat-value">{s.value}</div>
              <div className="admin-stat-label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="admin-card">
        <h2 className="admin-card-title">Recent Bookings</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Event</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map((b) => (
              <tr key={b._id}>
                <td>{b.name}</td>
                <td>{b.phone}</td>
                <td>{b.eventType}</td>
                <td>{b.eventDate || 'N/A'}</td>
                <td>
                  <span className={`admin-status ${b.status}`}>
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}