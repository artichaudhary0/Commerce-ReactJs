import  { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';

function Contact() {
  const [showOTP] = useState(false);
  const [formData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    otp: ''
  });

  const handleInputChange = () => {
  };

  const handleSubmit = () => {

    console.log('Form submitted:', formData);
  };

  return (
    <div className="page">
      <div className="contact-container">
        <div className="contact-card">
          <div className="section-header">
            <Mail size={32} />
            <h1>Contact Us</h1>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">

            <label htmlFor="fullName"> <Mail size={20} /> Email:</label>
            <input
              type="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={ formData.fullName}
              placeholder="Enter your email"
            />
            </div>

            <div className="form-group">
            <label htmlFor="fullName"> <Mail size={20} /> Email:</label>
            <input
              type="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={ formData.fullName}
              placeholder="Enter your email"
            />

            </div>

            <div className="form-group">
              <label htmlFor="fullName"> <Mail size={20} /> Email:</label>
            <input
              type="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={ formData.fullName}
              placeholder="Enter your email"
            />
            </div>


            <div className="form-group">
              <label htmlFor="message">
                <MessageSquare size={20} />
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
              />
            </div>

            {!showOTP ? (
              <button 
              className="add-to-cart-large"
              onClick={() =>{}}
            >
              Send Otp
            </button>
            ) : (
              <div className="form-group">
                <label htmlFor="otp">Enter OTP</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={formData.otp}
                  onChange={handleInputChange}
                  required
                  maxLength={6}
                  placeholder="Enter 6-digit OTP"
                />
              </div>
            )}

            {showOTP && (
              <button 
              className="add-to-cart-large"
              onClick={() => {}}
            >
              Send Message
            </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;