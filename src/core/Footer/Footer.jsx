import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { GrLocation } from 'react-icons/gr'
import { IoIosMail } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="bg-orange-900   text-white py-12 pb-0">
                <div className="container mx-auto px-8 text-center">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 text-start">


                        <div>
                            <h2 className="text-xl lg:text-2xl font-bold tracking-wide text-orange-600 px-2 bg-white w-fit rounded-md p-1">
                                ICNGCIS 2025
                            </h2>
                            <p className="text-gray-200 text-[16px] mt-3 text-xl">
                                International Conference on Next-Gen Computing and Intelligent Systems
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl   font-semibold text-white">General</h3>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/about" className="text-gray-200 hover:text-white transition-all duration-300 block text-[16px]">About the Conference</Link>
                            </li>

                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/scope" className="text-gray-200 hover:text-white transition-all duration-300 block text-[16px]">Scope of Conference</Link>
                            </li>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/organizingCommittee" className="text-gray-200 hover:text-white transition-all duration-300 block text-[16px]">Organizing Committee</Link>
                            </li>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/editorial" className="text-gray-200 hover:text-white transition-all duration-300 block text-[16px]">Editorial Board</Link>
                            </li>
                        </div>


                        <div className="space-y-3">
                            <h3 className="text-xl   font-semibold text-white">Conference Information</h3>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/conferenceTracks" className="text-gray-200 hover:text-white transition-all duration-300 block text-[16px]">Conference Tracks</Link>
                            </li>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/important-dates" className="text-gray-200 hover:text-white transition-all duration-300 block text-[16px]">Key Dates</Link>
                            </li>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/paper-submission" className="text-gray-200 hover:text-white transition-all duration-300 block text-[16px]">Paper Submission</Link>
                            </li>
                        </div>


                        <div>
                            <h3 className="text-xl   font-semibold text-white">Get in Touch</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <IoIosMail className='flex-shrink-0'/>
                                <p className="text-gray-200 wrap-anywhere  text-[16px]">icngcis.org@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <GrLocation className='flex-shrink-0'/>
                                <p className="text-gray-200 text-[16px]">Kuala Lumpur, Malaysia</p>
                            </div>

                            {/* <p className="text-gray-200 mt-2 text-lg">+91 123 456 7890</p> */}
                        </div>
                    </div>


                    <div className="border-t border-gray-600 mt-12 py-6 text-center text-gray-100 ">
                        <p className='text-[16px]'>
                            © 2025 ICNGCIS. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
