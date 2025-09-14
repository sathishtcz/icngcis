import React from 'react'


function About() {

  const features = [
    <>
      <span className='font-medium text-orange-600'>Showcase Your Research Globally</span> – Present your original work to a diverse audience of experts, academics, and industry leaders, gaining visibility and recognition in the global research community.
    </>,
    <>
      <span className='font-medium text-orange-600'>Learn from World-Class Experts</span> – Gain deep insights into the latest trends, breakthroughs, and research directions in next-generation computing, artificial intelligence, and intelligent systems from keynote sessions, technical talks, and workshops led by distinguished speakers.
    </>,
    <>
      <span className='font-medium text-orange-600'>Networking Opportunities</span> – Connect with like-minded professionals, renowned researchers, innovators, and entrepreneurs to explore collaborative projects, joint research, and industry partnerships.
    </>,
    <>
      <span className='font-medium text-orange-600'>Skill Development</span> – Participate in hands-on workshops and interactive sessions that enhance technical skills, research capabilities, and problem-solving approaches relevant to evolving technologies.
    </>,


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
              <p className="font-medium lg:text-[40px] text-[30px] text-white text-center">About the Conference</p>
              <div className='h-2 w-55 bg-white rounded-md '></div>
            </div>
          </div>
        </div>
      </div>



      <div className="mt-15">
        {/* About the Conference */}

        {/* ABOUT — concise two-column highlights */}

        <div className="container mx-auto px-6 ">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-6 w-1 bg-orange-600 rounded" />
                <span className="uppercase  text-base  text-gray-700 font-medium">
                  About the Conference
                </span>
              </div>
              <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4 leading-tight">
                Where Innovation Meets Academic Excellence
              </h2>

              <div className="lg:hidden block " >
                <img
                  src="/assets/images/about3.png"
                  alt="Conference auditorium"
                  className="w-[450px] mx-auto"
                />
              </div>
              <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify  mb-4 mt-6">
                The International Conference on Next-Gen Computing & Intelligent Systems is a premier global forum that brings together researchers, academicians, industry experts, innovators, and students to exchange knowledge, foster collaboration, and explore advancements in cutting-edge computing technologies and intelligent systems.
              </p>
              <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify ">
                By featuring keynote addresses from thought leaders, technical paper presentations, workshops, and panel discussions, ICNGCIS empowers participants to explore transformative innovations shaping the future of computing and intelligent systems. The Selective accepted papers of our International Conference on Next-Gen Computing & Intelligent Systems will be recommended to publish in the indexed Journals.
              </p>
              {/* <Link to="/about" className="">
              <button className="inline-flex items-center justify-center px-3 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-600 cursor-pointer text-[16px] mt-3">
                Read More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link> */}
            </div>

            <div className="lg:block hidden  "  data-aos="fade-left">
              <img
                src="/assets/images/about3.png"
                alt="Conference auditorium"
                className=" w-[480px] mx-auto"
              />
            </div>
          </div>

          <section className="mt-18"  data-aos="fade-up">
            <div className="container mx-auto">
              <div className="">

                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-6 w-1 bg-orange-600 rounded" />
                    <span className="uppercase  text-base  text-gray-700 font-medium">
                      Why Attend ICNGCIS 2025
                    </span>
                  </div>
                  <h3 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4 leading-tight">
                    Benefits of Participation
                  </h3>
                  <p className="text-gray-800 mb-6 text-justify sm:text-base md:text-lg lg:text-[16px] leading-relaxed">
                    Participating in the International Conference on Next-Gen Computing & Intelligent Systems offers a wealth of opportunities for researchers, academicians, industry professionals, students, and technology enthusiasts. This premier global event goes beyond presentations—it is an immersive platform for exchanging ideas, discovering cutting-edge innovations, and building valuable collaborations. Here’s how attendees benefit:
                  </p>

                  <div className="space-y-3">
                    {features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <ul className='list-disc list-inside space-y-2'>
                          <li className='sm:text-base md:text-lg lg:text-[16px] text-gray-700 leading-relaxed text-justify '>{f}</li>
                        </ul>
                      </div>

                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>


        </div>
      </div>
    </div>
  )
}

export default About