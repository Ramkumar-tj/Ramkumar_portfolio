import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const verifyEmail = async (email) => {
    try {
      const apiKey = 'YOUR_HUNTER_API_KEY'; // Replace with your Hunter.io API Key
      const response = await axios.get(`https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${apiKey}`);
      const data = response.data.data;
      return data.result === 'deliverable';  // Returns true if the email is deliverable
    } catch (error) {
      console.error("Error verifying email", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = {};
    let valid = true;

    // Validate Name
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
      valid = false;
    }
      
    // Validate Message
    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(formErrors);
    if (!valid) return;

    // Use EmailJS to send the email
    try {
        const response = await emailjs.send(
          'YOUR_SERVICE_ID',      // EmailJS Service ID
          'YOUR_TEMPLATE_ID',     // EmailJS Template ID
          formData,               // Form data to send
          'YOUR_USER_ID'          // EmailJS User ID
        );
        console.log('Email sent successfully:', response);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setIsError(false);
      } catch (error) {
        console.error('Error sending email:', error);
        setIsError(true);
      }
      
  };

  return (
    <section className="page">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">Contact Us</h2>
          <p className="text-lg text-gray-600 mt-4">We'd love to hear from you! Please fill out the form below to get in touch.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-lg font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-lg font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-blue-400"
              >
                Send Message
              </button>
            </div>

            {isSubmitted && (
              <div className="text-center text-green-500 mt-4">
                <p>Your message has been sent successfully!</p>
              </div>
            )}

            {isError && (
              <div className="text-center text-red-500 mt-4">
                <p>There was an error sending your message. Please try again later.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
