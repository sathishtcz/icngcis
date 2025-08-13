import React from 'react'

export default function Editorialboard() {

    const editorialMembers = [
        {
            name: "Stanley Adiele Okolie",
            department: "Computer Science",
            university: "Federal University of Technology Owerri",
            country: "Nigeria"
        },
        {
            name: "Bilal Saoud",
            department: "Electrical Engineering",
            university: "University of Bouira",
            country: "Algeria"
        },
        {
            name: "Anuj Kumar",
            department: "Computer Science",
            university: "Doon University",
            country: "India"
        },

        {
            name: "Monday Fredrick Ohemu",
            department: "Electrical and Electronics Engineering",
            university: "Airforce Institute of Technology",
            country: "Nigeria"
        },
        {
            name: "Kabelo Given Chuma",
            department: "Information Science",
            university: "University of South Africa",
            country: "South Africa"
        },
        {
            name: "Pravin Futane",
            department: "Computer Engineering",
            university: "Vishwakarma Institute of Information Technology",
            country: "India"
        },
        {
            name: "Ajaegbu Chigozirim",
            department: "Information Technology",
            university: "Babcock University",
            country: "Nigeria"
        },
        {
            name: "Grace Egbi Alilu",
            department: "Computer Science",
            university: "Hallmark University",
            country: "Nigeria"
        },
        {
            name: "Arindom Kundu",
            department: "Computer Science and Engineering",
            university: "Daffodil International University",
            country: "Bangladesh"
        },
        {
            name: "Sidaoui Boutkhil",
            department: "Computer Science",
            university: "Salhi Ahmed University of Naama",
            country: "Algeria"
        },
        {
            name: "Kolawole Yusuf Obiwusi",
            department: "Mathematics and Computer Science",
            university: "Summit University",
            country: "Nigeria"
        },
        {
            name: "Citra Fathia Palembang",
            department: "Computer Science",
            university: "Pattimura University",
            country: "Indonesia"
        },
        {
            name: "Abderrahim Bouchair",
            department: "Computer Science",
            university: "University of Oran1 Ahmed Ben Bella",
            country: "Algeria"
        },
        {
            name: "Arun Kumar Rouniyar",
            department: "Mechanical Engineering",
            university: "Saharsa college of Engineering",
            country: "India"
        },
        {
            name: "Ghasem Abbasi",
            department: "Mathematics and Statistics",
            university: "Islamic Azad University",
            country: "Iran"
        },
        {
            name: "Marwan Ramdhany Edy",
            department: "Informatics and Computer Engineering",
            university: "Universitas Negeri Makassar",
            country: "Indonesia"
        },
        {
            name: "Shazia Riaz",
            department: "Computer Science",
            university: "Women University Faisalabad",
            country: "Pakistan"
        },
        {
            name: "Rahman Shafique",
            department: "Information and Communication Engineering",
            university: "Yeungnam University",
            country: "South Korea"
        },
        {
            name: "Robin Prakash Mathur",
            department: "Computer Science and Engineering",
            university: "Lovely Professional University",
            country: "India"
        },
        {
            name: "Lamia Abed Noor Muhammed",
            department: "Computer Science",
            university: "University of Al-Qadisiyah",
            country: "Iraq"
        },
        {
            name: "Ardhendu Mandala",
            department: "Computer Science and Technology",
            university: "University of North Bengal",
            country: "India"
        },
        {
            name: "Tanimu Mohammed",
            department: "Statistics",
            university: "University of Abuja",
            country: "Nigeria"
        },
        {
            name: "Muhammad Mujahid",
            department: "Computer Science",
            university: "Khwaja Fareed University of Engineering & Information Technology",
            country: "Pakistan"
        },
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



                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {editorialMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300 group"
                            >
                                {/* Number Badge */}
                                <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                                    {index + 1}
                                </div>

                                {/* Name */}
                                <h3 className="mt-12 text-xl font-semibold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                                    Dr. {member.name}
                                </h3>

                                {/* Department */}
                                <p className="text-gray-600 mt-2 text-base">
                                    <span className="font-medium text-gray-800">Department:</span> {member.department}
                                </p>

                                {/* University */}
                                <p className="text-gray-600 mt-1 text-base">
                                    <span className="font-medium text-gray-800">University:</span> {member.university}
                                </p>

                                {/* Country */}
                                <div className="mt-4 flex items-center space-x-2">
                                    <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold">
                                        {member.country}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </>
    )
}


