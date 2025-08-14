import { ArrowRight, Building, Calendar, Clock, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Register() {
  return (
    <>
      <section className="w-full flex bg-right bg-cover  items-center justify-center relative bg-[url('/assets/images/register.jpg')] mt-18 overflow-hidden">
        <div className="absolute inset-0 bg-[#00090a]  opacity-80" />
        <div className="relative container mx-auto px-6 py-8 lg:py-14 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">Ready to Join Us?</h3>
          <p className="sm:text-base md:text-lg lg:text-[16px]   text-gray-200  text-justify leading-relaxed mx-auto mb-10">
            Join a global gathering of researchers, innovators, and industry leaders to showcase groundbreaking ideas, exchange knowledge, and explore the latest advancements in computing, AI, and intelligent systems. Submit your cutting-edge research, engage in insightful discussions, and network with experts shaping the next wave of technological transformation. This is your opportunity to gain global visibility, collaborate across disciplines, and accelerate your academic and professional growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/paper-submission">
              <button className=" custom-btn btn-9   text-[16px]  px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center transition-colors duration-300 cursor-pointer">
                Register Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="   text-black con-btn btn-10 text-[16px]  px-6 py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-white/10 rounded-xl border border-white/20" data-aos="fade-right">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="text-sm text-gray-300">Conference Date</div>
              <div className="font-semibold">12 <sup>th</sup>June 2025</div>
            </div>

            <div className="p-6 bg-white/10 rounded-xl border border-white/10">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="text-sm text-gray-300">Location</div>
              <div className="font-semibold">Jakarta, Indonesia </div>
            </div>

            <div className="p-6 bg-white/10 rounded-xl border border-white/10" data-aos="fade-left">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="text-sm text-gray-300">Schedule</div>
              <div className="font-semibold">9:00 AM – 5:00 PM</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
