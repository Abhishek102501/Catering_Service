import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
})

export const submitBooking = (data) => API.post('/bookings', data)
export const submitCharity = (data) => API.post('/charity', data)
export const loginAdmin = (data) => API.post('/auth/login', data)

export default API