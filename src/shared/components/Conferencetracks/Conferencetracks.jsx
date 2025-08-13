import React from 'react'

export default function Conferencetracks() {

  const tracks = [
    {
      title: "Track 1: Artificial Intelligence & Machine Learning",
      description: "Explores advanced AI methodologies including deep learning, neural networks, reinforcement learning, and natural language processing. This track also focuses on ethical AI frameworks, explainable AI, and real-world applications of intelligent systems across industries such as healthcare, finance, education, and autonomous systems."
    },
    {
      title: "Track 2: Data Science & Big Data Analytics",
      description: "Covers predictive analytics, statistical modeling, and real-time big data processing techniques. Topics include data visualization best practices, AI-powered decision-making, scalable data pipelines, and the use of analytics to extract actionable insights for business intelligence, scientific research, and societal impact."
    },
    {
      title: "Track 3: Cloud, Edge & Quantum Computing",
      description: "Focuses on cloud-native architectures, distributed computing models, and edge solutions for IoT and AI applications. Includes advancements in quantum algorithms, quantum machine learning, and optimization techniques, alongside strategies for enhancing performance, scalability, and sustainability in next-generation computing environments."
    },
    {
      title: "Track 4: Cybersecurity & Blockchain",
      description: "Addresses AI-driven threat detection, advanced encryption methods, and proactive defense mechanisms against cyber threats. Also explores blockchain and distributed ledger technologies for secure data sharing, digital identity verification, supply chain integrity, and the development of decentralized applications with enhanced transparency."
    },
    {
      title: "Track 5: Internet of Things (IoT) & Industry 4.0",
      description: "Covers IoT architectures, smart sensors, and industrial automation solutions enabling Industry 4.0 transformation. Includes digital twin technology, predictive maintenance, and integration of AI with cyber-physical systems to improve efficiency, reliability, and adaptability across manufacturing, logistics, and smart city infrastructures."
    },
    {
      title: "Track 6: Human-Computer Interaction & Virtual Technologies",
      description: "Explores immersive AR/VR applications, brain-computer interfaces, and gesture-based interaction systems. Focuses on user-centered design principles, accessibility, and the use of extended reality (XR) for education, training simulations, entertainment, and collaborative work environments that bridge the gap between humans and machines."
    }
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
              <p className="font-medium lg:text-[40px] text-[30px] text-white text-center">Conference Tracks</p>
              <div className='h-2 w-55 bg-white rounded-md '></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-15">
        {/* scope the Conference */}

        {/* scope — concise two-column highlights */}

        <div className="container mx-auto px-6 ">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-6 w-1 bg-orange-600 rounded" />
              <span className="uppercase  text-base  text-gray-700 font-medium">
                Conference Tracks
              </span>
            </div>
            <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4 leading-tight">
              Specialized Tracks & Topics
            </h2>
            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify  mb-8 mt-6">
              The International Conference on Next-Gen Computing & Intelligent Systems brings together global researchers, industry experts, and academicians to explore cutting-edge advancements in computing, AI, and intelligent technologies.
            </p>
          </div>
          <div className="mt-10 mx-auto">
            <div className="grid grid-cols-1 gap-6">
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
      </div>

    </>
  )
}

// <section>
//           <div className="container mx-auto px-6 py-8">
//             <div className="text-center">
//               <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">CONFERENCE TRACKS</span>
//               <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4">
//                 Key Focus Areas
//               </h2>
//               <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed mx-auto text-justify">
//                 ICASMET 2025 features a rich selection of conference tracks designed to foster cross-disciplinary dialogue and showcase the latest advancements in science, engineering, and technology. Each track invites researchers, academicians, industry experts, and innovators to share cutting-edge findings, practical solutions, and visionary ideas that address global challenges.
//               </p>
//             </div>
//           </div>


//             <div className="container mx-auto  px-8 py-8">
              // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              //   {tracks.map((track, index) => (
              //     <div
              //       key={index}
              //       className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              //     >
              //       <div className="flex items-center mb-4">
              //         <span className="w-10 h-10 bg-blue-600 text-white text-xl font-semibold rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              //           {index + 1}
              //         </span>
              //         <h2 className="text-xl font-semibold text-gray-900">
              //           {track.title}
              //         </h2>
              //       </div>
              //       <p className="text-gray-600 sm:text-base md:text-lg lg:text-[16px] leading-relaxed mb-6">
              //         {track.content}
              //       </p>
              //     </div>
              //   ))}
              // </div>
//             </div>

//         </section>
