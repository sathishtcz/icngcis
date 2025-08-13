import React from 'react'

export default function Scope() {

  const features = [
    <>
      <span className='font-medium text-orange-600'>Computational Intelligence & Optimization</span> – Swarm intelligence, evolutionary algorithms, fuzzy systems, metaheuristics, and real-world optimization applications.
    </>,
    <>
      <span className='font-medium text-orange-600'>Sustainable & Green Computing </span> – Energy-efficient algorithms, carbon-aware cloud architectures, green data centers, and sustainable hardware design.
    </>,
    <>
      <span className='font-medium text-orange-600'>Digital Twins & Smart Simulation </span> –  Real-time system modeling, simulation-based optimization, industrial digital twins, and AI-enhanced predictive modeling.
    </>,
    <>
      <span className='font-medium text-orange-600'>Ethics, Policy & Responsible AI </span> – Governance frameworks, algorithmic transparency, bias mitigation, legal implications, and the societal impact of emerging technologies.
    </>,


  ];


  return (
    <>
      <div className="relative bg-cover  bg-center flex items-center pt-10  pb-10 h-[290px] sm:h-[300px] md:h-[380px] lg:h-[380px]  " style={{ backgroundImage: "url('/assets/images/banner2.jpg')" }} >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000] opacity-60 "></div>
        {/* Centered Content */}
        <div className="container mx-auto w-full px-6     z-10 pt-15  ">
          <div className="space-y-3">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="font-medium lg:text-[40px] text-[30px] text-white text-center">Scope of Our Conference</p>
              <div className='h-2 w-55 bg-white rounded-md '></div>
            </div>
          </div>
        </div>
      </div>



      <div className="mt-15">
        {/* scope the Conference */}

        {/* scope — concise two-column highlights */}

        <div className="container mx-auto px-6 ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:block hidden">
              <img
                src="/assets/images/about1.jpg"
                alt="Conference auditorium"
                className="w-full h-[420px] object-cover rounded-2xl border-2 border-gray-400"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-6 w-1 bg-orange-600 rounded" />
                <span className="uppercase  text-base  text-gray-700 font-medium">
                  Scope of Our Conference
                </span>
              </div>
              <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4 leading-tight">
                Next-Generation Computing
              </h2>

              <div className="lg:hidden block ">
                <img
                  src="/assets/images/about1.jpg"
                  alt="Conference auditorium"
                  className="w-full h-[300px] object-cover rounded-2xl border-2 border-gray-400"
                />
              </div>
              <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify  mb-4 mt-6">
                The International Conference on Next-Gen Computing & Intelligent Systems aims to bring together researchers, academicians, industry professionals, and students from across the globe to exchange knowledge, share innovative ideas, and discuss the latest advancements in computing and intelligent technologies.
              </p>
              <ul className='list-disc list-inside space-y-2'>
                <li className='sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify '><span className='font-medium text-orange-600'>Artificial Intelligence</span> – Deep learning, reinforcement learning, neural networks, AI ethics, and responsible AI.</li>
                <li className='sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify '><span className='font-medium text-orange-600'>Human–Computer Interaction & Robotics</span> – Natural language processing, computer vision, autonomous systems, and intelligent assistants.</li>
                <li className='sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify '><span className='font-medium text-orange-600'>Cybersecurity</span> – Secure computing systems, cryptography, distributed ledgers, and digital trust.</li>
              </ul>
            </div>
          </div>

          <section className="mt-18">
            <div className="container mx-auto px-6">
              <div className="">

                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-6 w-1 bg-orange-600 rounded" />
                    <span className="uppercase  text-base  text-gray-700 font-medium">
                      Scope Overview
                    </span>
                  </div>
                  <h3 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4 leading-tight">
                    Key Highlights & Features
                  </h3>
                  <p className="text-gray-800 mb-6">
                    The International Conference on Next-Gen Computing & Intelligent Systems serves as a dynamic platform for the exchange of knowledge, research findings, and technological advancements in emerging domains that are shaping the future of computing and intelligent systems. The scope of the conference spans a broad range of disciplines, encouraging participation from researchers, academicians, engineers, industry experts, and students across the globe.
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
    </>
  )
}

