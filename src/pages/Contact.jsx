import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!emailPattern.test(formData.email)) newErrors.email = 'Enter a valid email'
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSuccess('')
    } else {
      setErrors({})
      setSuccess('Thank you! We will reply soon.')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSuccess(''), 4000)
    }
  }

  return (
    <main className="container">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Get in touch</h3>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Hamra Street, Beirut, Lebanon</li>
            <li><i className="fas fa-phone-alt"></i> +961 78 746 783</li>
            <li><i className="fas fa-envelope"></i> info@coffeecorner.com.lb</li>
          </ul>
          <p>Open daily: 8am - 10pm (Beirut time)</p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label>Message *</label>
              <textarea id="message" rows="3" value={formData.message} onChange={handleChange}></textarea>
              {errors.message && <div className="error">{errors.message}</div>}
            </div>
            <button type="submit" className="btn">Send Message</button>
            {success && <div className="success">{success}</div>}
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contact