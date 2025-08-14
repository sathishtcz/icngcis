import { Upload } from 'lucide-react';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function Papersub() {

    const [fileName, setFileName] = useState('Choose Your File');
    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [status, setStatus] = useState('');

    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;

        // For file preview display
        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const journalName = 'icngcis';
        // Generate unique ID: journalName + YYYYMMDD + HHMMSS
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
        const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, ''); // HHMMSS
        const uniqueId = `${journalName}_${dateStr}_${timeStr}`;

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Submission_ID', uniqueId);
            formDataToSend.append('Paper_Title', formData.Paper_Title);
            formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Institution_Name', formData.Institution_Name);
            formDataToSend.append('Paper_Track', formData.Paper_Track);

            if (formData.Paper_File) {
                formDataToSend.append('Paper_File', formData.Paper_File);
            }

            const googleSheetsParams = new URLSearchParams();
            googleSheetsParams.append('Submission_ID', uniqueId);
            googleSheetsParams.append('journal_name', journalName);
            googleSheetsParams.append('Paper_Title', formData.Paper_Title);
            googleSheetsParams.append('Author_FUll_Name', formData.Author_FUll_Name);
            googleSheetsParams.append('Email_Address', formData.Email_Address);
            googleSheetsParams.append('Institution_Name', formData.Institution_Name);
            googleSheetsParams.append('Paper_Track', formData.Paper_Track);

            const mailPromise = fetch('http://192.168.1.53/ICNGCIS/mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: googleSheetsParams.toString(),
            });

            const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);

            const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
            const sheetsSuccess = sheetsResponse.status === 'fulfilled';

            if (sheetsResponse.status === 'rejected') {
                console.error('Sheets request failed:', sheetsResponse.reason);
            }

            if (mailSuccess && sheetsSuccess) {
                setStatus(`Submission successful! Data sent to both email and Google Sheets (${journalName}).`);

                setFormData({
                    Paper_Title: '',
                    Author_FUll_Name: '',
                    Email_Address: '',
                    Institution_Name: '',
                    Paper_Track: '',
                    Paper_File: null,
                });
                const fileInput = document.getElementById('Paper_File');
                if (fileInput) {
                    fileInput.value = '';
                } else {
                    console.error('Element with ID "Paper_File" not found.');
                }
                toast.success(`Paper submitted successfully!`);

            } else if (mailSuccess && !sheetsSuccess) {
                setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
                toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');

            } else if (!mailSuccess && sheetsSuccess) {
                setStatus('Data likely saved to Google Sheets, but failed to send email.');
                toast.warning('Data might be saved to Google Sheets, but failed to send email.');

            } else {
                setStatus('There might be issues with the submission. Please check manually.');
                toast.error('Submission completed, but please verify the results manually.');
            }

        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred during submission. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    }


    return (
        <>
            <div className="relative bg-cover  bg-center flex items-center pt-10  pb-10 h-[290px] sm:h-[300px] md:h-[380px] lg:h-[380px]  " style={{ backgroundImage: "url('/assets/images/banner2.jpg')" }} >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#000000] opacity-60 "></div>
                {/* Centered Content */}
                <div className="container mx-auto w-full px-6     z-10 pt-15  ">
                    <div className="space-y-3">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <p className="font-medium lg:text-[40px] text-[30px] text-white text-center">Paper Submission</p>
                            <div className='h-2 w-55 bg-white rounded-md '></div>
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
                                Paper Submission
                            </span>
                        </div>
                        <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4 leading-tight">
                            Be a Part of ICNGCIS 2025
                        </h2>
                        <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify  mb-8 mt-6">
                            We invite researchers, academicians, industry professionals, and innovators from around the globe to contribute their original and unpublished work to ICNGCIS 2025. This is your opportunity to showcase groundbreaking research, share innovative ideas, and connect with experts shaping the future of Next-Generation Computing and Intelligent Systems.
                        </p>
                    </div>

                    <div className="lg:mt-5 mt-5 border-gray-200 shadow-sm border rounded-lg">
                        <div className="bg-white rounded-lg h-full  p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 place-items-stretch">
                                <div>
                                    <div className="flex flex-col gap-5">
                                        <div className="bg-white text-center  rounded-lg p-2 border-l-5 border-l-orange-600 shadow-[0_0_10px_rgba(0,0,0,0.1)]"><p className="font-medium text-lg lg:text-[18px]">Submission Guidelines</p></div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="bg-gradient-to-b from-orange-600 to-orange-400 w-2 h-2 rounded-full flex-shrink-0"></span>
                                                <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Provide the title of your paper, which should be descriptive and concise.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="bg-gradient-to-b from-orange-600 to-orange-400 w-2 h-2 rounded-full flex-shrink-0"></span>
                                                <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter the full name of the first author as it appears on the paper.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="bg-gradient-to-b from-orange-600 to-orange-400 w-2 h-2 rounded-full flex-shrink-0"></span>
                                                <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter a valid mobile number (10-15 digits, country code optional).</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="bg-gradient-to-b from-orange-600 to-orange-400 w-2 h-2 rounded-full flex-shrink-0"></span>
                                                <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Provide a working email address for the first author to receive notifications.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="bg-gradient-to-b from-orange-600 to-orange-400 w-2 h-2 rounded-full flex-shrink-0"></span>
                                                <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter the name of the institution the first author is affiliated with.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="bg-gradient-to-b from-orange-600 to-orange-400 w-2 h-2 rounded-full flex-shrink-0"></span>
                                                <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Choose the relevant category for the first author.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="bg-gradient-to-b from-orange-600 to-orange-400 w-2 h-2 rounded-full flex-shrink-0"></span>
                                                <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Ensure your paper is in PDF or DOC format and does not exceed 5MB in size.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex flex-col gap-5">
                                        <div className="bg-white text-center rounded-lg p-2 border-l-5 border-l-orange-600 shadow-[0_0_10px_rgba(0,0,0,0.1)]"><p className="font-medium text-lg lg:text-[18px]">Important Notes</p></div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="bg-gradient-to-b from-orange-600 to-orange-400 w-2 h-2 rounded-full flex-shrink-0"></span>
                                                <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">All papers undergo a double-blind peer review process.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="bg-gradient-to-b from-orange-600 to-orange-400 w-2 h-2 rounded-full flex-shrink-0"></span>
                                                <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">At least one author must register for the conference.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="bg-gradient-to-b from-orange-600 to-orange-400 w-2 h-2 rounded-full flex-shrink-0"></span>
                                                <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Plagiarism checks will be performed.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="bg-gradient-to-b from-orange-600 to-orange-400 w-2 h-2 rounded-full flex-shrink-0"></span>
                                                <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Multiple submissions are not allowed.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="bg-gradient-to-b from-orange-600 to-orange-400 w-2 h-2 rounded-full flex-shrink-0"></span>
                                                <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Authors must present accepted papers at the conference.</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="bg-gradient-to-b from-orange-600 to-orange-400 w-2 h-2 rounded-full flex-shrink-0"></span>
                                                <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Papers will be published in the conference proceedings.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:mt-8 mt-5 border-gray-200 shadow-sm border rounded-lg max-w-[60rem] mx-auto">
                        <div className="bg-white rounded-lg h-full  p-6">
                            <div className="bg-white text-center  rounded-lg p-2 border-l-5 border-l-orange-600 shadow-[0_0_10px_rgba(0,0,0,0.1)]"><p className="font-medium text-lg lg:text-[18px]">Submission Form</p><p className="">Please fill in all required fields to submit your paper</p></div>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                                    <div className="space-y-2">
                                        <label for="Paper_Title" className="block text-sm font-medium text-gray-700">Paper Title
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name='Paper_Title'
                                            value={formData.Paper_Title}
                                            onChange={handleFileInputChange}
                                            required
                                            placeholder="Enter Your Paper Title"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none  focus:border-orange-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label for="Institution_Name" className="block text-sm font-medium text-gray-700">Institution Name
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name='Institution_Name'
                                            value={formData.Institution_Name}
                                            onChange={handleFileInputChange}
                                            required
                                            placeholder="Enter Your Institution Name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none  focus:border-orange-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label for="Author_FUll_Name" className="block text-sm font-medium text-gray-700">Author Full Name
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name='Author_FUll_Name'
                                            value={formData.Author_FUll_Name}
                                            onChange={handleFileInputChange}
                                            required
                                            placeholder="Enter Author’s Full Name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none  focus:border-orange-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label for="Email_Address" className="block text-sm font-medium text-gray-700">Email
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name='Email_Address'
                                            value={formData.Email_Address}
                                            onChange={handleFileInputChange}
                                            required
                                            placeholder="Enter Author’s Email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none  focus:border-orange-400"
                                        />
                                    </div>
                                    <div className="space-y-2 lg:col-span-2">
                                        <label for="Paper_Track" className="block text-sm font-medium text-gray-700">Paper Track
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <select name='Paper_Track' value={formData.Paper_Track} onChange={handleFileInputChange}
                                            required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none  focus:border-orange-400">
                                            <option>Select Your Category</option>
                                            <option value="Artificial Intelligence & Machine Learning">Artificial Intelligence & Machine Learning</option>
                                            <option value="Data Science & Big Data Analytics">Data Science & Big Data Analytics</option>
                                            <option value="Cloud, Edge & Quantum Computing">Cloud, Edge & Quantum Computing</option>
                                            <option value="Cybersecurity & Blockchain">Cybersecurity & Blockchain</option>
                                            <option value="Internet of Things (IoT) & Industry 4.0">Internet of Things (IoT) & Industry 4.0</option>
                                            <option value="Human-Computer Interaction & Virtual Technologies">Human-Computer Interaction & Virtual Technologies</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2 lg:col-span-2">
                                        <label for="Paper_File" className="block text-sm font-medium text-gray-700">Paper File
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative w-full px-4 py-6 border border-gray-300 rounded-lg focus:outline-none  focus:border-orange-400 flex flex-col items-center justify-center text-center text-gray-500 overflow-hidden cursor-pointer">
                                            <input
                                                name='Paper_File'
                                                // onChange={handleChange}
                                                accept=".pdf,.doc,.docx"
                                                type="file"
                                                onChange={handleFileInputChange}
                                                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                            />
                                            <Upload className="text-3xl text-orange-500 mb-2 z-0" />
                                            <p className="z-0">{fileName || "Click to Upload Paper"}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        disabled={status === 'Sending...'}
                                        className="w-fit custom-btn btn-9 text-white px-3 py-2 rounded-lg  cursor-pointer transition duration-300 inter-semibold mt-6"
                                    >
                                        {status === 'Sending...' ? 'Submitting...' : 'Submit Your Paper'}
                                    </button>
                                </div>
                                <div className="mt-3 text-center text-sm text-gray-500">Need help? Contact <a href="mailto:info.iccsct@gmail.com" className="text-orange-500">info.icngcis@gmail.com</a></div>

                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
