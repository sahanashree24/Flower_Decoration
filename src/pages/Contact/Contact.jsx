import React, { useState } from 'react'
import breadcrumbBg from "/public/hero/hero-3.jpeg";
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", website: "", email: "", message: "" })
  const [loading, setLoading] = useState(false);
  const onFormDataChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setFormData({ name: '', website: '', email: '', message: '' });
      setLoading(false);
    }, 3000);
  }

  return (
    <div>
      <div className="breadcrumb-option spad set-bg" style={{ backgroundImage: `url(${breadcrumbBg})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Contact us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="contact-widget spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-md-6 col-md-3">
              <div className="contact__widget__item">
                <div className="contact__widget__item__icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="contact__widget__item__text">
                  <h4>Address</h4>
                  <p>Los Angeles Gournadi, 1230 Bariasl</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-6 col-md-3">
              <div className="contact__widget__item">
                <div className="contact__widget__item__icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="contact__widget__item__text">
                  <h4>Hotline</h4>
                  <p>1-677-124-44227 • 1-688-356-66889</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-6 col-md-3">
              <div className="contact__widget__item">
                <div className="contact__widget__item__icon">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="contact__widget__item__text">
                  <h4>Email</h4>
                  <p>Support@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.233332123517!2d76.69356857526579!3d30.71184017459436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef12f404f715%3A0xc6e325d798590f1c!2sRedsky%20Advance%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1741779179545!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact__form">
                <h3>Get in touch</h3>
                <form onSubmit={onSubmit}>
                  <input type="text" name='name' placeholder="Name" value={formData?.name} onChange={(e) => onFormDataChange(e.target.name, e.target.value)} />
                  <input type="text" name='email' placeholder="Email" value={formData?.email} onChange={(e) => onFormDataChange(e.target.name, e.target.value)} />
                  <input type="text" name='website' placeholder="Website" value={formData?.website} onChange={(e) => onFormDataChange(e.target.name, e.target.value)} />
                  <textarea name='message' placeholder="Message" value={formData?.message} onChange={(e) => onFormDataChange(e.target.name, e.target.value)}></textarea>
                  <button disabled={loading} type="submit" className="site-btn">{loading ? 'Sending...' : 'Send Message'}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact