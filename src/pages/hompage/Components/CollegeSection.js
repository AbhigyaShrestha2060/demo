import {
  Award,
  BookOpen,
  GraduationCap,
  MapPin,
  Search,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useState } from 'react';

export default function CollegesSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedStream, setSelectedStream] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const colleges = [
    {
      name: 'Tribhuvan University',
      logo: '/assets/logos/TU.png',
      established: '1959',
      students: '500K+',
      programs: '2000+',
      ranking: '#1 in Nepal',
    },
    {
      name: 'Kathmandu University',
      logo: '/assets/logos/KU.png',
      established: '1991',
      students: '30K+',
      programs: '200+',
      ranking: 'Top Research University',
    },
    {
      name: 'Pokhara University',
      logo: '/assets/logos/pokharaU.png',
      established: '1997',
      students: '100K+',
      programs: '500+',
      ranking: 'Innovation Leader',
    },
    {
      name: 'Purbanchal University',
      logo: '/assets/logos/PU.png',
      established: '1993',
      students: '80K+',
      programs: '300+',
      ranking: 'Excellence in Education',
    },
  ];

  const popularCourses = [
    { name: 'BBA', trend: '+15%', icon: TrendingUp },
    { name: 'CSIT', trend: '+25%', icon: BookOpen },
    { name: 'BCA', trend: '+20%', icon: Users },
    { name: 'Engineering', trend: '+18%', icon: Award },
    { name: 'Medicine', trend: '+12%', icon: Star },
  ];

  const levels = ['Bachelor', 'Master', 'PhD', 'Diploma', 'Certificate'];
  const streams = [
    'Engineering',
    'Management',
    'Science',
    'Arts',
    'Medicine',
    'Law',
    'Agriculture',
  ];
  const locations = [
    'Kathmandu',
    'Pokhara',
    'Chitwan',
    'Biratnagar',
    'Birgunj',
    'Dharan',
    'Butwal',
    'Nepalgunj',
  ];

  return (
    <section className='py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-grid-slate-100 [background-size:20px_20px] opacity-30'></div>
      <div className='absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse'></div>
      <div className='absolute bottom-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4'>
            <Star className='w-4 h-4' />
            Premium Education Partners
          </div>
          <h2 className='text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6'>
            Colleges That Define Excellence
          </h2>
          <p className='text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
            Discover Nepal's most prestigious institutions and find your perfect
            academic match with our comprehensive college discovery platform
          </p>
        </div>

        {/* Colleges Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
          {colleges.map((college, index) => (
            <div
              key={index}
              className='group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-blue-200 hover:-translate-y-2 cursor-pointer'>
              {/* College Logo/Icon */}
              <div className='relative mb-6'>
                <div className='w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 p-2 border border-slate-100 overflow-hidden'>
                  {college.logo ? (
                    <>
                      <img
                        src={college.logo}
                        alt={`${college.name} logo`}
                        className='w-full h-full object-contain transition-transform duration-300 group-hover:scale-110'
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback icon - hidden by default */}
                      <div className='w-full h-full hidden items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl'>
                        <GraduationCap className='w-8 h-8 text-white' />
                      </div>
                    </>
                  ) : (
                    <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl'>
                      <GraduationCap className='w-8 h-8 text-white' />
                    </div>
                  )}
                </div>
                <div className='absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'>
                  <Star className='w-3 h-3 text-white' />
                </div>
              </div>

              {/* College Info */}
              <div className='text-center space-y-3'>
                <h3 className='font-bold text-lg text-slate-800 group-hover:text-blue-800 transition-colors duration-300'>
                  {college.name}
                </h3>
                <div className='text-sm text-slate-600 space-y-1'>
                  <div className='flex justify-between'>
                    <span>Established:</span>
                    <span className='font-medium'>{college.established}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Students:</span>
                    <span className='font-medium text-blue-600'>
                      {college.students}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Programs:</span>
                    <span className='font-medium'>{college.programs}</span>
                  </div>
                </div>
                <div className='bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2 rounded-lg'>
                  <span className='text-xs font-medium text-blue-800'>
                    {college.ranking}
                  </span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
          ))}
        </div>

        {/* Search Section */}
        <div className='bg-white/90 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50 relative overflow-hidden'>
          {/* Background Pattern */}
          <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl'></div>

          <div className='relative z-10'>
            {/* Search Header */}
            <div className='text-center mb-10'>
              <div className='inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4'>
                <Search className='w-4 h-4' />
                Smart Search Tools
              </div>
              <h3 className='text-3xl font-bold text-slate-800 mb-4'>
                Find Your Perfect College Match
              </h3>
              <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
                Use our advanced filtering system to discover colleges that
                align with your academic goals and preferences
              </p>
            </div>

            {/* Search Filters */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400' />
                <input
                  type='text'
                  placeholder='Search colleges...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='w-full pl-10 pr-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm text-slate-800 placeholder-slate-500'
                />
              </div>

              <div className='relative'>
                <GraduationCap className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400' />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className='w-full pl-10 pr-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm text-slate-800 appearance-none cursor-pointer'>
                  <option value=''>Select Level</option>
                  {levels.map((level, index) => (
                    <option
                      key={index}
                      value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              <div className='relative'>
                <BookOpen className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400' />
                <select
                  value={selectedStream}
                  onChange={(e) => setSelectedStream(e.target.value)}
                  className='w-full pl-10 pr-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm text-slate-800 appearance-none cursor-pointer'>
                  <option value=''>Select Stream</option>
                  {streams.map((stream, index) => (
                    <option
                      key={index}
                      value={stream}>
                      {stream}
                    </option>
                  ))}
                </select>
              </div>

              <div className='relative'>
                <MapPin className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400' />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className='w-full pl-10 pr-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm text-slate-800 appearance-none cursor-pointer'>
                  <option value=''>Select Location</option>
                  {locations.map((location, index) => (
                    <option
                      key={index}
                      value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Popular Courses */}
            <div className='mb-8'>
              <h4 className='text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2'>
                <TrendingUp className='w-5 h-5 text-blue-600' />
                Trending Programs
              </h4>
              <div className='flex flex-wrap gap-3'>
                {popularCourses.map((course, index) => {
                  const IconComponent = course.icon;
                  return (
                    <button
                      key={index}
                      className='group flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border border-blue-200 px-4 py-3 rounded-xl text-sm font-medium text-blue-800 hover:text-blue-900 transition-all duration-300 hover:shadow-md hover:scale-105 cursor-pointer'>
                      <IconComponent className='w-4 h-4' />
                      <span>{course.name}</span>
                      <span className='text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full'>
                        {course.trend}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search Button */}
            <div className='text-center'>
              <button className='group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95'>
                <Search className='w-5 h-5 group-hover:rotate-12 transition-transform duration-300' />
                Discover Perfect Matches
                <div className='w-2 h-2 bg-white rounded-full group-hover:animate-ping'></div>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='grid md:grid-cols-4 gap-8 mt-16'>
          {[
            {
              label: 'Partner Universities',
              value: '50+',
              icon: GraduationCap,
            },
            { label: 'Student Placements', value: '10K+', icon: Users },
            { label: 'Success Rate', value: '95%', icon: TrendingUp },
            { label: 'Expert Counselors', value: '25+', icon: Award },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className='text-center group'>
                <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <IconComponent className='w-8 h-8 text-white' />
                </div>
                <div className='text-3xl font-bold text-slate-800 mb-2'>
                  {stat.value}
                </div>
                <div className='text-slate-600 font-medium'>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
