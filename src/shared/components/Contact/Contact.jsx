import { MailIcon, MapPin } from 'lucide-react';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function Contact() {

  const [formData, setFormData] = useState({
    firstname: '',
    secondname: '',
    number: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleFileInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://icngcis.org/api/contact.php', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.text();
      setStatus(result);

      if (response.ok) {
        toast.success("Message submitted successfully!");
        setFormData({
          firstname: '',
          secondname: '',
          number: '',
          email: '',
          message: '',
        });
      } else {
        toast.error('Failed to send submission. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="relative bg-cover  bg-center flex items-center pt-10  pb-10 h-[290px] sm:h-[300px] md:h-[380px] lg:h-[380px]  " style={{ backgroundImage: "url('/assets/images/banner2.jpg')" }} >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000] opacity-60 "></div>
        {/* Centered Content */}
        <div className="container mx-auto w-full px-6     z-10 pt-15  ">
          <div className="space-y-3">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="font-medium lg:text-[40px] text-[30px] text-white text-center">Contact Us</p>
              <div className='h-2 w-35 bg-white rounded-md '></div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-15'>
        <div className="container mx-auto px-6 ">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-6 w-1 bg-orange-600 rounded" />
              <span className="uppercase  text-base  text-gray-700 font-medium">
                Contact Us
              </span>
            </div>
            <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4 leading-tight">
              Get in touch with us
            </h2>
            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify  mb-8 mt-6">
              For any questions regarding ICNGCIS 2025, paper submissions, registration, sponsorship, or partnership opportunities, our organizing team is here to help.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto border border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center">
                  <MailIcon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600 text-base wrap-anywhere">icngcis.org@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600 text-base">Jakarta, Indonesia </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Send Your Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:outline-none focus:ring-orange-500 focus:border-transparent transition duration-200"
                    placeholder="First name"
                    id="firstname"
                    value={formData.firstname}
                    onChange={handleFileInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:outline-none focus:ring-orange-500 focus:border-transparent transition duration-200"
                    placeholder="Last name"
                    id="secondname"
                    value={formData.secondname}
                    onChange={handleFileInputChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:outline-none focus:ring-orange-500 focus:border-transparent transition duration-200"
                    placeholder="Email address"
                    id="email"
                    value={formData.email}
                    onChange={handleFileInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:outline-none focus:ring-orange-500 focus:border-transparent transition duration-200"
                    placeholder="Mobile number"
                    id="number"
                    value={formData.number}
                    onChange={handleFileInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:outline-none focus:ring-orange-500 focus:border-transparent transition duration-200"
                  placeholder="Your message..."
                  id="message"
                  value={formData.message}
                  onChange={handleFileInputChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="custom-btn btn-9 text-white px-3 py-2 rounded-lg font-medium  transition duration-200 cursor-pointer w-fit"
                >
                  {status === 'Sending...' ? 'Submitting...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>


        </div>
      </div>
    </>
  )
}


