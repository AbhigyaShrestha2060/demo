import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function UNIDetailed() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600'>
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
              <div className='h-64 bg-gray-200 rounded-lg flex items-center justify-center'>
                <p className='text-gray-500'>Map Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
