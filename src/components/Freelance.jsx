import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Freelance = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isThankYouVisible, setIsThankYouVisible] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(false); // State for page animation

  useEffect(() => {
    // Trigger full-page animation when component mounts
    setIsPageVisible(true);
  }, []);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simple form validation
  const validateForm = () => {
    let valid = true;
    let newErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const serviceID = 'service_9ywsast';  
      const templateID = 'template_7isctu8';  
      const publicKey_ = '9BtStrWFsDLPCVRfL';  

      // Send email using EmailJS
      emailjs
        .sendForm(serviceID, templateID, form.current, {
          publicKey: publicKey_,
        })
        .then(
          () => {
            setIsSubmitted(true);
            setIsThankYouVisible(true);
            setFormData({ name: '', email: '', message: '' });

            // Hide the thank you message after 4 seconds
            setTimeout(() => {
              setIsThankYouVisible(false);
            }, 4000);
          },
          (error) => {
            alert('FAILED...please try later');
          },
        );
    }
  };

  return (
    <section
      className={`scrollbar flex flex-col justify-center items-center page px-2 transition-opacity duration-1000 ease-in-out ${isPageVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-md:px-4 max-w-full sm:max-w-xl">
        {/* Title with animation */}
        <h2
          className="heading font-bold mb-6 opacity-0 translate-y-10"
          style={{
            animation: `fadeInUp 0.5s ease-out 0.5s forwards`,
          }}
        >
        Contact Me for Your Projects
        </h2>

        {/* Description with animation */}
        <p
          className="text-lg mb-6 opacity-0 translate-y-10"
          style={{
            animation: `fadeInUp 0.5s ease-out 0.7s forwards`,
          }}
        >
          Interested in collaborating on a project or hiring me? Complete the form below, and I’ll respond promptly.
        </p>

        {/* Thank You Message with fade-in animation */}
        {isThankYouVisible && (
          <div
            className="bg-teal-300/20 p-4 rounded mb-6 opacity-0 translate-y-10"
            style={{
              animation: `fadeInUp 0.5s ease-out 1s forwards`,
            }}
          >
            <p className="text-white">Thank you for reaching out! Your message has been sent successfully.</p>
          </div>
        )}

        {/* Form Section with animation */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="space-y-4 opacity-0 translate-y-10"
          style={{
            animation: `fadeInUp 0.5s ease-out 1.2s forwards`,
          }}
        >
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name" className="block text-lg">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="block text-lg">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message" className="block text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="input"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn opacity-0 translate-y-10"
            style={{
              animation: `fadeInUp 0.5s ease-out 1.5s forwards`,
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Freelance;
