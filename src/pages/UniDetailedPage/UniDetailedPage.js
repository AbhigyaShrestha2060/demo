import {
  Clock,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  User,
  X,
} from 'lucide-react';
import { useState } from 'react';

export default function ICANWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    education: '',
    course: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openModal = (courseName) => {
    setSelectedCourse(courseName);
    setFormData((prev) => ({ ...prev, course: courseName }));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      dateOfBirth: '',
      education: '',
      course: '',
      message: '',
    });
  };

  const generatePDF = () => {
    // Create PDF content
    const pdfContent = `
ICAN Course Inquiry Application
===============================

Personal Information:
---------------------
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
Date of Birth: ${formData.dateOfBirth}
Education: ${formData.education}

Course Information:
-------------------
Selected Course: ${formData.course}
Message: ${formData.message}

Application Date: ${new Date().toLocaleDateString()}
Application Time: ${new Date().toLocaleTimeString()}

Thank you for your interest in ICAN courses!
For further information, please contact us at:
Phone: +977015550374
Email: ican@nic.Net.Np

---
The Institute of Chartered Accountants of Nepal (ICAN)
Satdobato, Nepal
    `;

    // Create blob and download
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ICAN_Application_${formData.fullName.replace(
      /\s+/g,
      '_'
    )}_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }
    generatePDF();
    closeModal();
    alert(
      'Your application has been submitted successfully! The file has been downloaded.'
    );
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-blue-900 to-blue-600 text-white'>
        <div className='absolute inset-0 bg-black bg-opacity-30'></div>
        <div
          className='relative h-96 bg-cover bg-center'
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23f0f0f0'/%3E%3Cpolygon points='400,50 500,150 400,250 300,150' fill='%23e0e0e0'/%3E%3Cpolygon points='500,150 600,250 500,350 400,250' fill='%23d0d0d0'/%3E%3Cpolygon points='300,150 400,250 300,350 200,250' fill='%23d0d0d0'/%3E%3C/svg%3E')",
          }}>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80'></div>
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center'>
            <div className='flex items-center space-x-6'>
              {/* ICAN Logo */}
              <div className='bg-white p-4 rounded-lg shadow-lg'>
                <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center'>
                  <span className='text-white font-bold text-xl'>ICAN</span>
                </div>
              </div>

              {/* Title */}
              <div>
                <h1 className='text-4xl font-bold mb-2'>
                  The Institute of Chartered Accountants of Nepal (ICAN)
                </h1>
                <div className='flex items-center space-x-2 text-blue-200'>
                  <span>University</span>
                  <span></span>
                  <span className='text-blue-300'>
                    Institute Of Chartered Accountants Of Nepal
                  </span>
                </div>
                <button
                  onClick={() => openModal('CAP-III')}
                  className='bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600'>
                  Inquire
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          {/* Sidebar */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-lg shadow-sm p-6'>
              <h3 className='font-semibold text-gray-800 mb-4'>About Us</h3>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-blue-600 hover:text-blue-800'>
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-600 hover:text-blue-600'>
                    Course Offered
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-600 hover:text-blue-600'>
                    Affiliated Colleges
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-600 hover:text-blue-600'>
                    Map
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className='lg:col-span-3'>
            {/* About Section */}
            <div className='bg-white rounded-lg shadow-sm p-6 mb-8'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                About The Institute Of Chartered Accountants Of Nepal (ICAN)
              </h2>
              <p className='text-gray-600 leading-relaxed'>
                The Institute of Chartered Accountants of Nepal (ICAN) was
                established under a special act, The Nepal Chartered Accountants
                Act, 1997 to enhance social recognition and faith of people at
                large in the accounting profession by raising public awareness
                towards the importance of accounting profession as well as
                towards economic and social responsibility of the accountants,
                and to contribute towards economic development of the country.
                The Institute is an autonomous body and is fully authorized by
                the Act to regulate the accountancy profession in Nepal.
              </p>
            </div>

            {/* Overview Section */}
            <div className='bg-white rounded-lg shadow-sm p-6 mb-8'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6'>
                Overview
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <Clock className='h-6 w-6 text-blue-600' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-500'>Established</p>
                    <p className='font-semibold text-gray-800'>1997</p>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <MapPin className='h-6 w-6 text-blue-600' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-500'>Location</p>
                    <p className='font-semibold text-gray-800'>Satdobato</p>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <Phone className='h-6 w-6 text-blue-600' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-500'>Phone</p>
                    <p className='font-semibold text-gray-800'>+977015550374</p>
                  </div>
                </div>

                <div className='flex items-center space-x-3'>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <Mail className='h-6 w-6 text-blue-600' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-500'>Email</p>
                    <p className='font-semibold text-gray-800'>
                      ican@nic.Net.Np
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses Offered */}
            <div className='bg-white rounded-lg shadow-sm p-6 mb-8'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6'>
                Courses Offered
              </h2>
              <div className='space-y-4'>
                {[
                  {
                    name: 'CAP-III',
                    institute:
                      'The Institute of Chartered Accountants of Nepal (ICAN)',
                    fee: 'N/A',
                    duration: '3 Years',
                  },
                  {
                    name: 'CAP-II',
                    institute:
                      'The Institute of Chartered Accountants of Nepal (ICAN)',
                    fee: 'N/A',
                    duration: '9 Months',
                  },
                  {
                    name: 'CAP-I',
                    institute:
                      'The Institute of Chartered Accountants of Nepal (ICAN)',
                    fee: 'N/A',
                    duration: '6 Months',
                  },
                ].map((course, index) => (
                  <div
                    key={index}
                    className='border border-gray-200 rounded-lg p-4'>
                    <div className='flex items-center justify-between'>
                      <div className='flex-1'>
                        <h3 className='font-semibold text-gray-800 mb-1'>
                          {course.name}
                        </h3>
                        <p className='text-sm text-gray-600'>
                          {course.institute}
                        </p>
                      </div>
                      <div className='flex items-center space-x-6 text-sm'>
                        <div className='text-center'>
                          <p className='text-gray-500'>Fee</p>
                          <p className='font-semibold text-gray-800'>
                            {course.fee}
                          </p>
                        </div>
                        <div className='text-center'>
                          <p className='text-gray-500'>Duration</p>
                          <p className='font-semibold text-gray-800'>
                            {course.duration}
                          </p>
                        </div>
                        <button
                          onClick={() => openModal(course.name)}
                          className='bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600'>
                          Inquire
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Affiliated Colleges */}
            <div className='bg-white rounded-lg shadow-sm p-6 mb-8'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6'>
                Affiliated Colleges
              </h2>
              <div className='border border-gray-200 rounded-lg p-4'>
                <div className='flex items-center space-x-4'>
                  <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <span className='text-blue-600 font-bold text-xl'>CBM</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800'>
                      College of Business Management
                    </h3>
                    <p className='text-sm text-gray-600'>Lalitpur, Kathmandu</p>
                    <p className='text-sm text-blue-600'>
                      National Examinations Board (NEB)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className='bg-white rounded-lg shadow-sm p-6'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6'>
                The Institute Of Chartered Accountants Of Nepal (ICAN)
              </h2>
              <div className='rounded-lg overflow-hidden h-64'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.720231010322!2d85.32031697518415!3d27.694748026517294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19805b5e0a89%3A0xa9d622e73d0ce839!2sThe%20Institute%20of%20Chartered%20Accountants%20of%20Nepal%20(ICAN)!5e0!3m2!1sen!2snp!4v1718124097801!5m2!1sen!2snp'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            {/* Modal Header */}
            <div className='bg-blue-600 text-white p-6 rounded-t-xl'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center'>
                    <GraduationCap className='h-6 w-6' />
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold'>Course Inquiry</h2>
                    <p className='text-blue-100'>Apply for {selectedCourse}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className='text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors'>
                  <X className='h-6 w-6' />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <form
              onSubmit={handleSubmit}
              className='p-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Personal Information */}
                <div className='md:col-span-2'>
                  <h3 className='text-lg font-semibold text-gray-800 mb-4 flex items-center'>
                    <User className='h-5 w-5 mr-2 text-blue-600' />
                    Personal Information
                  </h3>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Full Name <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Enter your full name'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Email Address <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Enter your email address'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Phone Number <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Enter your phone number'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Date of Birth
                  </label>
                  <input
                    type='date'
                    name='dateOfBirth'
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  />
                </div>

                <div className='md:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Address
                  </label>
                  <input
                    type='text'
                    name='address'
                    value={formData.address}
                    onChange={handleInputChange}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Enter your full address'
                  />
                </div>

                {/* Educational Information */}
                <div className='md:col-span-2 mt-6'>
                  <h3 className='text-lg font-semibold text-gray-800 mb-4 flex items-center'>
                    <FileText className='h-5 w-5 mr-2 text-blue-600' />
                    Educational Information
                  </h3>
                </div>

                <div className='md:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Highest Education Level
                  </label>
                  <select
                    name='education'
                    value={formData.education}
                    onChange={handleInputChange}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
                    <option value=''>Select your education level</option>
                    <option value='High School'>High School</option>
                    <option value='Intermediate (+2)'>Intermediate (+2)</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>

                <div className='md:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Selected Course
                  </label>
                  <input
                    type='text'
                    name='course'
                    value={formData.course}
                    onChange={handleInputChange}
                    className='w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    readOnly
                  />
                </div>

                <div className='md:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Additional Message
                  </label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Tell us more about your interest in this course...'
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className='flex items-center justify-between mt-8 pt-6 border-t border-gray-200'>
                <p className='text-sm text-gray-600'>
                  <span className='text-red-500'>*</span> Required fields
                </p>
                <div className='flex space-x-4'>
                  <button
                    type='button'
                    onClick={closeModal}
                    className='px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors'>
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2'>
                    <FileText className='h-5 w-5' />
                    <span>Submit & Download</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
