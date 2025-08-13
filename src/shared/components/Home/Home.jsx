import React from 'react'
import { Link } from 'react-router-dom';
import { Globe2, ArrowRight } from 'lucide-react';



function Home() {

  const tracks = [
    {
      title: "Track 1: Artificial Intelligence & Machine Learning",
      description: "Deep learning, natural language processing, reinforcement learning, and ethical AI frameworks."
    },
    {
      title: "Track 2: Data Science & Big Data Analytics",
      description: "Predictive analytics, real-time data processing, visualization techniques, and data-driven decision-making."
    },
    {
      title: "Track 3: Cloud, Edge & Quantum Computing",
      description: "Cloud-native architectures, edge computing for IoT, quantum algorithms, and performance optimization."
    },
    {
      title: "Track 4: Cybersecurity & Blockchain",
      description: "AI-driven security, threat detection, distributed ledger technologies, and cryptographic solutions."
    },
    {
      title: "Track 5: Internet of Things (IoT) & Industry 4.0",
      description: "Smart sensors, industrial automation, digital twins, and cyber-physical systems."
    },
    {
      title: "Track 6: Human-Computer Interaction & Virtual Technologies",
      description: "AR/VR applications, brain-computer interfaces, immersive learning, and user experience design."
    }
  ];



  return (
    <>
      <section className="w-full min-h-screen flex bg-right bg-cover  items-center justify-center relative bg-[url('/assets/images/Hero.jpg')]">
        <div
          className="absolute inset-0   bg-[#000d0f]  opacity-80"
        ></div>
        <div className='container mx-auto px-6 py-5 z-20 lg:mt-0 mt-22'>
          <div className=" grid lg:grid-cols-2 gap-12 items-center text-white ">
            {/* Left Side Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-6 w-1 bg-orange-600 rounded" />
                <span className="  text-base tracking-widest text-gray-200">
                  Shaping the Future of AI, Cloud, and Intelligent Technologies
                </span>
              </div>

              <h1 className="text-[28px] sm:text-4xl md:text-[42px] font-extrabold leading-tight  mb-6">
                International Conference on Next-Gen Computing & Intelligent Systems
              </h1>
              <div className="relative lg:hidden block mb-12">
                <img
                  src="/assets/images/Hero2.jpg"
                  alt="Conference auditorium"
                  className="w-full h-[300px] object-cover rounded-2xl border-2 border-gray-400"
                />
                <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Globe2 className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-700">Location</div>
                      <div className="font-semibold text-gray-800">London, United Kingdom</div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="sm:text-base md:text-lg lg:text-[16px] text-justify break-words leading-relaxed text-gray-300 mb-8 max-w-3xl">
                Join leading researchers, industry experts, and innovate creators at ICNGCIS 2025 to explore groundbreaking advances in next-generation computing and intelligent systems.
              </p>


              <div className="flex flex-row gap-3 mb-10 ">
                <Link to="paper-submission">
                  <button className="inline-flex items-center justify-center px-4 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-600 cursor-pointer text-lg">
                    Register
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </Link>
                <Link to="contact">
                  <button className="cursor-pointer inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:text-black hover:border-gray-900  hover:bg-gray-50 transition-all duration-500 ">
                    Contact Us
                  </button>
                </Link>

              </div>

              <div className="grid grid-cols-3 gap-6 lg:max-w-lg">
                <div>
                  <div className="text-3xl  font-extrabold">3</div>
                  <div className="text-sm text-gray-3 00">Days</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold">50+</div>
                  <div className="text-sm text-gray-3 00">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold">100+</div>
                  <div className="text-sm text-gray-3 00">Speakers</div>
                </div>
              </div>
            </div>

            <div className="relative lg:block hidden">
              <img
                src="/assets/images/Hero2.jpg"
                alt="Conference auditorium"
                className="w-full h-[420px] object-cover rounded-2xl border-2 border-gray-400"
              />
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Globe2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-700">Location</div>
                    <div className="font-semibold text-gray-800">London, United Kingdom</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT — concise two-column highlights */}

      <div className="container mx-auto px-6 mt-18">
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

            <div className="lg:hidden block ">
              <img
                src="/assets/images/about2.jpg"
                alt="Conference auditorium"
                className="w-full h-[300px] object-cover rounded-2xl border-2 border-gray-400"
              />
            </div>
            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify  mb-4 mt-6">
              The International Conference on Next-Gen Computing & Intelligent Systems is a premier global forum that brings together researchers, academicians, industry experts, innovators, and students to exchange knowledge, foster collaboration, and explore advancements in cutting-edge computing technologies and intelligent systems.
            </p>
            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify ">
              By featuring keynote addresses from thought leaders, technical paper presentations, workshops, and panel discussions, ICNCIS empowers participants to explore transformative innovations shaping the future of computing and intelligent systems.
            </p>
            <Link to="/about" className="">
              <button className="inline-flex items-center justify-center px-3 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-600 cursor-pointer text-[16px] mt-3">
                Read More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </div>

          <div className="lg:block hidden">
            <img
              src="/assets/images/about2.jpg"
              alt="Conference auditorium"
              className="w-full h-[420px] object-cover rounded-2xl border-2 border-gray-400"
            />
          </div>
        </div>
      </div>


      {/* Scope of the conference */}

      <div className="container mx-auto px-6 mt-18">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
            <Link to="/scope" className="">
              <button className="inline-flex items-center justify-center px-3 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-600 cursor-pointer text-[16px] mt-3">
                Read More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* conference tracks */}
      <div className="container mx-auto px-6 mt-18">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-6 w-1 bg-orange-600 rounded" />
          <span className="uppercase  text-base  text-gray-700 font-medium">
            Conference Tracks
          </span>
        </div>
        <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4 text-center">
          Diverse Tracks Driving Innovation
        </h2>
        <div className="mt-10 max-w-[80rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200 flex items-start space-x-4 group"
              >
                <div className="w-1 h-20 bg-orange-500 rounded flex-shrink-0 "></div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {track.title}
                  </h4>
                  <p className="text-gray-700 text-justify text-[16px]">{track.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default Home