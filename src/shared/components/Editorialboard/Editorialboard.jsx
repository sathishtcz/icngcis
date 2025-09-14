import React from 'react'
import { FaCircleUser } from 'react-icons/fa6';

export default function Editorialboard() {

    const Organizingcommitte = [

        {
            name: "Dr. Jhanghiz Syahrivar",
            department: "Department of Computer Science",
            university: "President University",
            location: "Indonesia"
        },
        {
            name: "Dr. Aria Hendrawan",
            department: "Department of Computer Science ",
            university: "University of Semarang",
            location: "Indonesia"
        },
        {
            name: "Dr. Theopilus Bayu Sasongko",
            department: "Department of Informatics",
            university: "Universitas Amikom Yogyakarta",
            location: "Indonesia"
        },
        {
            name: "Dr. Sinarring Azi Laga",
            department: "Department of Informatics Technology",
            university: "Hayam Wuruk Perbanas University",
            location: "Indonesia"
        },
        {
            name: "Dr. Johan Hendri Prasetyo",
            department: "Department of Management Science",
            university: "Universitas Nusa Mandiri",
            location: "Indonesia"
        },
    ];

    const technicalcomiittee = [
        {
            name: "Dr. Hung Nguyen",
            department: "Department of Information Technology",
            university: "Nha Trang University",
            location: "Vietnam"
        },
        {
            name: "Dr. Theresa Omodunbi",
            department: "Department of Computer Science and Engineering",
            university: "Obafemi Awolowo University",
            location: "Nigeria"
        },
        {
            name: "Dr. Shabir Hussain",
            department: "Department of Biopharmaceutical and Health Engineering",
            university: "Tsinghua University",
            location: "China"
        },
        {
            name: "Dr. Rustam Asnawi",
            department: "Department of Electrical Engineering",
            university: "Universitas Negeri Yogyakarta",
            location: "Indonesia"
        },
        {
            name: "Dr. Sakshi Gupta",
            department: "Department of Electrical Engineering",
            university: "Amity University Noida",
            location: "India"
        },
        {
            name: "Dr. Sirajuddin Qureshi",
            department: "Department of Information Technology",
            university: "Beijing University of Technology",
            location: "China"
        },
        {
            name: "Dr. Abderrahim Boukhalat",
            department: "Department of Computer Science",
            university: "University Mohamed Boudiaf",
            location: "Algeria"
        },
        {
            name: "Dr. Moses Adah Agana",
            department: "Department of Computer Science",
            university: "University of Calabar",
            location: "Nigeria"
        },
        {
            name: "Dr. Twana A. Hamad",
            department: "Department of Computer Engineering",
            university: "Harran University",
            location: "Turkiye"
        },
        {
            name: "Dr. Muhammad Ayoub Kamal",
            department: "Department of Computer Science",
            university: "DHA Suffa University",
            location: "Pakistan"
        },
        {
            name: "Dr. Ghasem Abbasi",
            department: "Department of Mathematics and Statistics",
            university: "Islamic Azad University",
            location: "Iran"
        },
        {
            name: "Dr. Hea Choon Ngo",
            department: "Department of Electronics and Communication Engineering",
            university: "Universiti Teknikal Malaysia Melaka",
            location: "Malaysia"
        },
        {
            name: "Dr. Puneet Sharma",
            department: "Department of Automation and Process Engineering",
            university: "The Arctic University of Norway",
            location: "Norway"
        },
        {
            name: "Dr. Shazia Riaz",
            department: "Department of Computer Science",
            university: "Women University Faisalabad",
            location: "Pakistan"
        },
        {
            name: "Dr. Tejas Dhote",
            department: "Department of Mechanical Engineering",
            university: "Michigan Technological University",
            location: "USA"
        },
        {
            name: "Dr. Bawar Mohammed Faraj",
            department: "Department of Computer Science",
            university: "University of Halabja",
            location: "Iraq"
        },
        {
            name: "Dr.R. Arun Kumar",
            department: "Department of Digital Forensics and Cyber Security",
            university: "University of South Wales",
            location: "United Kingdom"
        },
        {
            name: "Dr. Gabriel A. Ogunmola",
            department: "Department of Information Technology",
            university: "Sharda University",
            location: "Uzbekistan"
        },
        {
            name: "Dr. Noureddine Seddari",
            department: "Department of Computer Science",
            university: "Skikda University",
            location: "Algeria"
        },
        {
            name: "Dr. Nour Moustafa",
            department: "Department of Computer Science",
            university: "American University of the Middle East",
            location: "Kuwait"
        },

    ];


    const advisorycommittee = [
        {
            name: "Dr. Saman Almufti",
            department: "Department of Computer Science",
            university: "Nawroz University",
            location: "Iraq"
        },
        {
            name: "Dr. Alma Bangayan Manera",
            department: "Department of Electronics and Communication Engineering",
            university: "Cagayan State University",
            location: "Philippines"
        },
        {
            name: "Dr. Rohini Sharma",
            department: "Department of Computer Science and Applications",
            university: "Panjab University",
            location: "India"
        },
        {
            name: "Dr. Zouhour El-Abiad",
            department: "Department of Computer Science",
            university: "ESA Business School",
            location: "Lebanon"
        },
        {
            name: "Dr. Meenakshi Gupta",
            department: "Department of Computer Science",
            university: "National University of Singapore",
            location: "Singapore"
        },
        {
            name: "Dr. Sowmipriya Rajendiran",
            department: "Department of Computer Science and Engineering",
            university: "International School of Information Processing Sciences",
            location: "France"
        },
        {
            name: "Dr. Qian Liu",
            department: "Department of Computer Science and Engineering",
            university: "Krirk University",
            location: "Thailand"
        },

        {
            name: "Dr. Sutapa C Sarkar",
            department: "Department of Information Technology",
            university: "Brainware University",
            location: "India"
        },
        {
            name: "Dr. Arindom Kundu",
            department: "Department of Computer Science and Engineering",
            university: "Daffodil International University",
            location: "Bangladesh"
        },
        {
            name: "Dr. Wasan Alamro",
            department: "Department of Electrical Engineering",
            university: "Auckland University of Technology",
            location: "New Zealand"
        },
        {
            name: "Dr. Brahim Issaoui",
            department: "Department of Economics and Social Sciences",
            university: "Qassim University",
            location: "Saudi Arabia"
        },
        {
            name: "Dr. Muhammad Asif Khan",
            department: "Department of Information Technology",
            university: "Qatar University",
            location: "Qatar"
        },
        {
            name: "Dr. Robin Prakash Mathur",
            department: "Department of Computer Science and Engineering",
            university: "Lovely Professional University",
            location: "India"
        },
        {
            name: "Dr.S. Prasanth",
            department: "Department of Physical Sciences and Technology",
            university: "Sabaragamuwa University of Sri Lanka",
            location: "Sri Lanka"
        },
        {
            name: "Dr. Elegbeleye Femi Abiodun",
            department: "Department of Information Technology",
            university: "Walter Sisulu University",
            location: "South Africa"
        },
        {
            name: "Dr. Marcelo M S Souza",
            department: "Department of Computer Science and  Engineering",
            university: "Ceara Federal University",
            location: "Brazil"
        },
        {
            name: "Dr. Chinwe Peace Igiri",
            department: "Department of Computer Science",
            university: "Cavendish University",
            location: "Uganda"
        },
        {
            name: "Dr. Ernesto Carrillo Arellano",
            department: "Department of Electronics Engineering",
            university: "Metropolitan Autonomous University",
            location: "Mexico"
        },
        {
            name: "Dr. Ammar Amjad",
            department: "Department of Information Technology",
            university: "National Yang Ming Chiao Tung University",
            location: "Taiwan"
        },
        {
            name: "Dr. Habchi Yassine",
            department: "Department of  Electrical Engineering",
            university: "Naama Centre University",
            location: "Algeria"
        },
        {
            name: "Dr. Abdul Rehman Baloch",
            department: "Department of Computer Science",
            university: "Iqra University",
            location: "Pakistan"
        },
        {
            name: "Dr. Argha Chandra Dhar",
            department: "Department of Computer Science and Engineering",
            university: "Khulna University of Engineering and Technology ",
            location: "Bangladesh"
        },
        {
            name: "Dr. Leo John Baptist",
            department: "Department of Information Technology",
            university: "Botho University",
            location: "Botswana"
        },
        {
            name: "Dr. Aram Sabr Tahr",
            department: "Department of Computer Science",
            university: "Cyprus International University",
            location: "Cyprus"
        },
        {
            name: "Dr. Ardhendu Mandala",
            department: "Department of Computer Science and Technology",
            university: "University of North Bengal",
            location: "India"
        },
        {
            name: "Dr.Md. Taimur Ahad",
            department: "Department of Mathematics and Statistics",
            university: "Islamic Azad University",
            location: "Iran"
        },
        {
            name: "Dr. Asma Sbeih",
            department: "Department of Engineering and Information",
            university: "Palestine Ahliya University",
            location: "Palestine"
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
                            <p className="font-medium lg:text-[40px] text-[30px] text-white text-center">Editorial Board</p>
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
                                Editorial Board
                            </span>
                        </div>
                        <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4 leading-tight">
                            Guiding Academic Excellence
                        </h2>
                        <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify  mb-8 mt-6">
                            The Editorial Board of the International Conference on Next-Gen Computing & Intelligent Systems comprises distinguished academicians, researchers, and industry leaders from around the globe, committed to upholding the highest standards of academic excellence.  Our board members bring together a wealth of expertise in next-generation computing, artificial intelligence, machine learning, data science, cloud computing, cybersecurity, and emerging intelligent technologies, ensuring that the conference serves as a global platform for innovation and collaboration.
                        </p>
                    </div>

                    <div className="">
                        <h3 id="organizing" className="scroll-mt-22 font-semibold text-[25px] lg:text-[30px] text-gray-800 text-center ">Organizing Committee</h3>
                        <div className="max-w-[1300px] mx-auto py-3">
                            {Organizingcommitte.map((editor, index) => (
                                <div key={index}>
                                    <div className='flex gap-2  mb-2 items-center'>
                                        <FaCircleUser className='text-gray-600 flex-shrink-0' />
                                        <p className="text-gray-700 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <h3 id="technical" className="scroll-mt-22 font-semibold text-[25px] lg:text-[30px] text-gray-800 text-center mt-8 ">Technical Program Committee</h3>
                        <div className="max-w-[1300px] mx-auto py-3">
                            {technicalcomiittee.map((editor, index) => (
                                <div key={index}>
                                    <div className='flex gap-2  mb-2 items-center'>
                                        <FaCircleUser className='text-gray-600 flex-shrink-0' />
                                        <p className="text-gray-700 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3 id="advisory" className="scroll-mt-22 font-semibold text-[25px] lg:text-[30px] text-gray-800 text-center mt-8 ">International Advisory Board Committee</h3>
                        <div className="max-w-[1300px] mx-auto py-3">
                            {advisorycommittee.map((editor, index) => (
                                <div key={index}>
                                    <div className='flex gap-2  mb-2 items-center'>
                                        <FaCircleUser className='text-gray-600 flex-shrink-0' />
                                        <p className="text-gray-700 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}










{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {editorialMembers.map((member, index) => {
                            const aosType =
                                index % 3 === 0? "zoom-in": index % 3 === 1    ? "flip-left"    : "flip-right";

                            return (
                                <div
                                    key={index}
                                    // data-aos={aosType}
                                    // data-aos-duration="300"
                                    // data-aos-delay={index * 100}
                                    className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300 group"
                                >
                                    
                                    <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                                        {index + 1}
                                    </div>

                                     
                                    <h3 className="mt-12 text-xl font-semibold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                                        Dr. {member.name}
                                    </h3>

                                     
                                    <p className="text-gray-600 mt-2 text-base">
                                        <span className="font-medium text-gray-800">Department:</span> {member.department}
                                    </p>

                                     
                                    <p className="text-gray-600 mt-1 text-base">
                                        <span className="font-medium text-gray-800">University:</span> {member.university}
                                    </p>

                                    
                                    <div className="mt-4 flex items-center space-x-2">
                                        <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold">
                                            {member.country}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div> */}


