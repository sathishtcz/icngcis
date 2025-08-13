import React from 'react'

export default function Committee() {
    return (
        <>
            <div className="relative bg-cover  bg-center flex items-center pt-10  pb-10 h-[290px] sm:h-[300px] md:h-[380px] lg:h-[380px]  " style={{ backgroundImage: "url('/assets/images/banner2.jpg')" }} >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#000000] opacity-60 "></div>
                {/* Centered Content */}
                <div className="container mx-auto w-full px-6     z-10 pt-15  ">
                    <div className="space-y-3">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <p className="font-medium lg:text-[40px] text-[30px] text-white text-center">Organizing Committee</p>
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
                                Organizing Committee
                            </span>
                        </div>
                        <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4 leading-tight">
                            Meet the Minds Behind ICNGCIS 2025
                        </h2>
                        <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify  mb-8 mt-6">
                            The Organizing Committee serves as the driving force and backbone of the conference, overseeing every stage from initial planning to the successful execution of the event. This dedicated team is composed of highly experienced professionals, distinguished academicians, and accomplished industry experts who bring a wealth of knowledge, skills, and perspectives to the table. Working in close collaboration, the committee ensures that each element of the conference — from program design, speaker coordination, and logistics management to participant engagement and technical support — is handled with precision and care.
                        </p>


                        <div className='space-y-4 '>
                            <p className="font-medium text-xl text-ora">Roles & Responsibilities</p>
                            <ul className='space-y-2'>
                                <li className='sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify '>1. Develop the overall agenda, theme, and objectives of the conference.</li>
                                <li className='sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify '>2. Liaise with speakers, authors, sponsors, and participants to ensure effective communication.</li>
                                <li className='sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify '>3. Finalize session timelines, keynote speeches, and panel discussions.</li>
                                <li className='sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify '>4.Promote the conference through various channels to maximize participation.</li>
                                <li className='sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify '>5. Provide guidance and assistance to attendees before, during, and after the conference.</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
