import { BellRing, CalendarCheck, ClipboardClock, NotebookText } from 'lucide-react';
import React from 'react'

export default function Keydates() {

  const keyDates = [
    {
      icon: <><ClipboardClock /> </>,
      event: "Abstract Submission Deadline",
      date: "May 9, 2025",
      description: "Submit your research abstract for initial review and consideration.",
    },
    {
      icon: <><ClipboardClock /> </>,
      event: "Full Paper Submission Deadline",
      date: "May 15, 2025",
      description: "Provide your complete research paper for detailed evaluation.",
    },
    {
      icon: <><BellRing /></>,
      event: "Notification of Acceptance",
      date: "May 23, 2025",
      description: "Receive the official confirmation of your paper's acceptance.",
    },
    {
      icon: <><NotebookText /> </>,
      event: "Final Paper Submission",
      date: "June 2, 2025",
      description: "Submit the revised and formatted final version of your paper.",
    },
    {
      icon: <><CalendarCheck /> </>,
      event: "Conference Dates",
      date: "June 12, 2025",
      description: "Join us for the presentations, discussions, and networking sessions.",
    },
  ];



  return (
   <div className='overflow-hidden'>
      <div className="relative bg-cover  bg-center flex items-center pt-10  pb-10 h-[290px] sm:h-[300px] md:h-[380px] lg:h-[380px]  " style={{ backgroundImage: "url('/assets/images/banner2.jpg')" }} >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000] opacity-60 "></div>
        {/* Centered Content */}
        <div className="container mx-auto w-full px-6     z-10 pt-15  ">
          <div className="space-y-3">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="font-medium lg:text-[40px] text-[30px] text-white text-center">Key Dates</p>
              <div className='h-2 w-40 bg-white rounded-md '></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-15">

        <div className="container mx-auto px-6 ">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-6 w-1 bg-orange-600 rounded" />
              <span className="uppercase  text-base  text-gray-700 font-medium">
                Important Dates
              </span>
            </div>
            <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4 leading-tight">
              Countdown to ICNGCIS 2025
            </h2>
            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify  mb-8 mt-6">
              Time is ticking towards one of the most anticipated gatherings in the world of computing and intelligent systems — The International Conference on Next-Gen Computing & Intelligent Systems. Stay ahead by keeping track of the important milestones on our conference journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 max-w-[70rem] mx-auto p-1">
            {keyDates.map((keyDates, index) => {
              const aosType = index % 3 === 0 ? "zoom-in" : index % 3 === 1 ? "flip-left" : "flip-right";

              return (
                <div
                  key={index}
                  // data-aos={aosType}
                  // data-aos-duration="600"
                  // data-aos-delay={index * 100}
                  className={`bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group ${index === 4 ? 'md:col-span-2 mx-auto ' : ''}`}
                >
                  <div className="flex items-center mb-4">
                    <span className="w-10 h-10  bg-gradient-to-r from-orange-400 to-orange-600 text-white text-xl font-semibold rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      {keyDates.icon}
                    </span>
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600">
                      {keyDates.date}
                    </h2>
                  </div>
                  <p className="text-gray-800 font-medium text-lg leading-relaxed ">
                    {keyDates.event}
                  </p>
                  <p className="text-gray-600 sm:text-base md:text-lg lg:text-[16px] leading-relaxed ">
                    {keyDates.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
