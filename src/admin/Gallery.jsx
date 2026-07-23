import { useState, useEffect, useRef } from 'react'
import { FaUpload, FaTrash, FaImage } from 'react-icons/fa'
import API from '../api/api'

export default function GalleryAdmin() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [caption, setCaption] = useState('')
  const [category, setCategory] = useState('general')
  const [preview, setPreview] = useState(null)
  const fileRef = useRef()

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      const res = await API.get('/gallery')
      setImages(res.data.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleFile = (e) => {
    const file = e.target.files[0]
    if (file) setPreview(URL.createObjectURL(file))
  }

  const uploadImage = async () => {
    const file = fileRef.current.files[0]
    if (!file) { alert('Please select an image'); return }

    setUploading(true)
    try {
      const token = localStorage.getItem('ltcs_token')
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`

      const formData = new FormData()
      formData.append('image', file)
      formData.append('caption', caption)
      formData.append('category', category)

      await API.post('/gallery', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      setCaption('')
      setCategory('general')
      setPreview(null)
      fileRef.current.value = ''
      await fetchImages()
      alert('Image uploaded successfully!')
    } catch (err) {
      console.error(err)
      alert('Upload failed. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  const deleteImage = async (id) => {
    if (!window.confirm('Delete this image?')) return
    try {
      const token = localStorage.getItem('ltcs_token')
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`
      await API.delete(`/gallery/${id}`)
      setImages(images.filter(i => i._id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) return <div className="admin-loading">Loading...</div>

  return (
    <div className="admin-page">
      <h1 className="admin-page-title">Gallery Management</h1>
      <p className="admin-page-sub">Total: {images.length} images</p>

      {/* Upload Section */}
      <div className="admin-card" style={{ marginBottom: '24px' }}>
        <h2 className="admin-card-title">Upload New Image</h2>
        <div className="admin-upload-grid">
          <div
            className="admin-upload-zone"
            onClick={() => fileRef.current.click()}
          >
            {preview ? (
              <img src={preview} alt="Preview" className="admin-upload-preview" />
            ) : (
              <div className="admin-upload-placeholder">
                <FaImage style={{ fontSize: '2rem', color: '#7A7468', marginBottom: '8px' }} />
                <p>Click to select image</p>
                <small>JPG, PNG, WEBP supported</small>
              </div>
            )}
            <input
              type="file"
              ref={fileRef}
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFile}
            />
          </div>

          <div className="admin-upload-fields">
            <div className="admin-field">
              <label>Caption (optional)</label>
              <input
                type="text"
                placeholder="e.g. Wedding event at Kanpur"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
            </div>
            <div className="admin-field">
              <label>Category</label>
              <select
                className="admin-select"
                style={{ width: '100%' }}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="general">General</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate</option>
                <option value="social">Social Event</option>
                <option value="food">Food</option>
              </select>
            </div>
            <button
              className="admin-add-btn"
              style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
              onClick={uploadImage}
              disabled={uploading}
            >
              <FaUpload />
              {uploading ? 'Uploading...' : 'Upload Image'}
            </button>
          </div>
        </div>
      </div>

      {/* Images Grid */}
      <div className="admin-gallery-grid">
        {images.map((img) => (
          <div className="admin-gallery-item" key={img._id}>
            <img src={img.url} alt={img.caption || 'Gallery'} />
            <div className="admin-gallery-overlay">
              <button
                className="admin-gallery-delete"
                onClick={() => deleteImage(img._id)}
              >
                <FaTrash />
              </button>
            </div>
            {img.caption && (
              <div className="admin-gallery-caption">{img.caption}</div>
            )}
          </div>
        ))}
        {images.length === 0 && (
          <div className="admin-empty" style={{ gridColumn: 'span 4' }}>
            No images yet. Upload your first image!
          </div>
        )}
      </div>
    </div>
  )
}