import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Filter,
  MapPin,
  GraduationCap,
  BookOpen,
  Star,
  ChevronDown,
  X,
  SlidersHorizontal,
  Grid,
  List,
} from 'lucide-react';

import { colors } from '../../../components/Theme/Theme';

const CollegeSearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedStream, setSelectedStream] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);

  const popularCourses = [
    { name: 'BBA', category: 'Management', icon: '💼' },
    { name: 'CSIT', category: 'Technology', icon: '💻' },
    { name: 'BCA', category: 'Technology', icon: '🖥️' },
    { name: 'Engineering', category: 'Engineering', icon: '⚙️' },
    { name: 'MBA', category: 'Management', icon: '📊' },
    { name: 'Medicine', category: 'Medical', icon: '🏥' },
  ];

  const levels = ['Bachelor', 'Master', 'PhD', 'Diploma', 'Certificate'];
  const streams = [
    'Engineering',
    'Management',
    'Science',
    'Arts',
    'Medical',
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
  ];

  const facilities = [
    'Library',
    'Hostel',
    'Lab',
    'Sports',
    'Cafeteria',
    'WiFi',
    'Transport',
  ];
  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
  ];

  // Mock search results
  const mockResults = [
    {
      id: 1,
      name: 'Tribhuvan University',
      location: 'Kathmandu',
      rating: 4.5,
      price: 'NPR 45,000/year',
      courses: ['BBA', 'CSIT', 'Engineering'],
      facilities: ['Library', 'Hostel', 'Lab', 'Sports'],
      image: '🏛️',
    },
    {
      id: 2,
      name: 'Kathmandu University',
      location: 'Dhulikhel',
      rating: 4.8,
      price: 'NPR 125,000/year',
      courses: ['Engineering', 'MBA', 'Medicine'],
      facilities: ['Library', 'Hostel', 'Lab', 'Sports', 'WiFi'],
      image: '🎓',
    },
    {
      id: 3,
      name: 'Pokhara University',
      location: 'Pokhara',
      rating: 4.3,
      price: 'NPR 65,000/year',
      courses: ['BCA', 'BBA', 'Science'],
      facilities: ['Library', 'Lab', 'WiFi', 'Cafeteria'],
      image: '🏫',
    },
  ];

  const handleSearch = async () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockResults);
      setIsSearching(false);
    }, 1200);
  };

  const handleCourseClick = (course) => {
    setSearchQuery(course.name);
    searchInputRef.current?.focus();
  };

  const toggleFacility = (facility) => {
    setSelectedFacilities((prev) =>
      prev.includes(facility)
        ? prev.filter((f) => f !== facility)
        : [...prev, facility]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedLevel('');
    setSelectedStream('');
    setSelectedLocation('');
    setSelectedFacilities([]);
    setPriceRange([0, 500000]);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedLevel) count++;
    if (selectedStream) count++;
    if (selectedLocation) count++;
    if (selectedFacilities.length > 0) count++;
    if (priceRange[1] < 500000) count++;
    return count;
  };

  return (
    <div
      className={`${colors.background.gradient} rounded-2xl p-8 shadow-2xl border-2 ${colors.border.default} backdrop-blur-sm`}>
      {/* Header Section */}
      <div className='text-center mb-10'>
        <div
          className={`inline-flex items-center justify-center w-20 h-20 ${colors.primary[600]} rounded-full mb-6 shadow-xl transform hover:scale-110 transition-all duration-300`}>
          <GraduationCap className={`w-10 h-10 ${colors.text.white}`} />
        </div>
        <h2
          className={`text-5xl font-bold ${colors.text.secondary} mb-4 tracking-tight`}>
          Find Your Dream College
        </h2>
        <p
          className={`${colors.text.muted} text-xl leading-relaxed max-w-2xl mx-auto`}>
          Explore thousands of colleges and courses tailored to your academic
          goals and career aspirations
        </p>
      </div>

      {/* Enhanced Search Bar */}
      <div className='relative mb-8 group'>
        <div
          className={`absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none z-10`}>
          <Search
            className={`h-6 w-6 ${colors.text.light} group-focus-within:text-blue-500 transition-colors duration-300`}
          />
        </div>
        <input
          ref={searchInputRef}
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search for colleges, courses, or locations...'
          className={`w-full pl-16 pr-6 py-5 text-lg ${colors.background.primary} border-2 ${colors.border.default} rounded-2xl focus:outline-none focus:ring-4 ${colors.ring.focus} focus:ring-opacity-20 focus:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl`}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none'></div>
      </div>

      {/* Quick Filter Pills */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
        <div className='relative group'>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className={`w-full appearance-none ${colors.background.primary} border-2 ${colors.border.default} rounded-xl px-5 py-4 pr-12 focus:outline-none focus:ring-4 ${colors.ring.focus} focus:ring-opacity-20 focus:border-blue-500 transition-all duration-300 shadow-md hover:shadow-lg ${colors.text.secondary} font-medium`}>
            <option value=''>🎓 All Levels</option>
            {levels.map((level) => (
              <option
                key={level}
                value={level}>
                {level}
              </option>
            ))}
          </select>
          <ChevronDown
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${colors.text.light} pointer-events-none group-focus-within:text-blue-500 transition-colors duration-300`}
          />
        </div>

        <div className='relative group'>
          <select
            value={selectedStream}
            onChange={(e) => setSelectedStream(e.target.value)}
            className={`w-full appearance-none ${colors.background.primary} border-2 ${colors.border.default} rounded-xl px-5 py-4 pr-12 focus:outline-none focus:ring-4 ${colors.ring.focus} focus:ring-opacity-20 focus:border-blue-500 transition-all duration-300 shadow-md hover:shadow-lg ${colors.text.secondary} font-medium`}>
            <option value=''>📚 All Streams</option>
            {streams.map((stream) => (
              <option
                key={stream}
                value={stream}>
                {stream}
              </option>
            ))}
          </select>
          <ChevronDown
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${colors.text.light} pointer-events-none group-focus-within:text-blue-500 transition-colors duration-300`}
          />
        </div>

        <div className='relative group'>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className={`w-full appearance-none ${colors.background.primary} border-2 ${colors.border.default} rounded-xl px-5 py-4 pr-12 focus:outline-none focus:ring-4 ${colors.ring.focus} focus:ring-opacity-20 focus:border-blue-500 transition-all duration-300 shadow-md hover:shadow-lg ${colors.text.secondary} font-medium`}>
            <option value=''>📍 All Locations</option>
            {locations.map((location) => (
              <option
                key={location}
                value={location}>
                {location}
              </option>
            ))}
          </select>
          <ChevronDown
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${colors.text.light} pointer-events-none group-focus-within:text-blue-500 transition-colors duration-300`}
          />
        </div>

        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className={`relative flex items-center justify-center gap-3 ${colors.background.secondary} hover:bg-gray-100 border-2 ${colors.border.default} rounded-xl px-5 py-4 transition-all duration-300 shadow-md hover:shadow-lg group font-medium ${colors.text.secondary}`}>
          <SlidersHorizontal className='w-5 h-5 group-hover:rotate-180 transition-transform duration-500' />
          <span>Advanced Filters</span>
          {getActiveFiltersCount() > 0 && (
            <span
              className={`absolute -top-2 -right-2 ${colors.primary[600]} ${colors.text.white} text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse`}>
              {getActiveFiltersCount()}
            </span>
          )}
        </button>
      </div>

      {/* Advanced Filters Panel with Animation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          showAdvancedFilters
            ? 'max-h-96 opacity-100 mb-8'
            : 'max-h-0 opacity-0'
        }`}>
        <div
          className={`${colors.background.primary} rounded-2xl border-2 ${colors.border.default} p-8 shadow-lg`}>
          <div className='flex items-center justify-between mb-6'>
            <h3
              className={`text-2xl font-bold ${colors.text.secondary} flex items-center gap-3`}>
              <Filter className='w-6 h-6' />
              Advanced Search Options
            </h3>
            <button
              onClick={clearFilters}
              className={`${colors.text.primary} ${colors.text.primaryHover} font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200`}>
              🗑️ Clear All Filters
            </button>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Price Range Slider */}
            <div className='space-y-4'>
              <label
                className={`block text-lg font-semibold ${colors.text.secondary} mb-3`}>
                💰 Annual Fee Range (NPR)
              </label>
              <div className='space-y-3'>
                <div className='flex items-center gap-4'>
                  <input
                    type='range'
                    min='0'
                    max='500000'
                    step='10000'
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className='flex-1 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider'
                  />
                  <div
                    className={`${colors.primary[100]} ${colors.text.primary} px-4 py-2 rounded-lg font-bold min-w-32 text-center shadow-md`}>
                    ₹{priceRange[1].toLocaleString()}
                  </div>
                </div>
                <div
                  className={`flex justify-between text-sm ${colors.text.muted}`}>
                  <span>₹0</span>
                  <span>₹5,00,000+</span>
                </div>
              </div>
            </div>

            {/* Facilities Selection */}
            <div className='space-y-4'>
              <label
                className={`block text-lg font-semibold ${colors.text.secondary} mb-3`}>
                🏫 Required Facilities
              </label>
              <div className='grid grid-cols-2 gap-3'>
                {facilities.map((facility) => (
                  <button
                    key={facility}
                    onClick={() => toggleFacility(facility)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium border-2 transition-all duration-300 transform hover:scale-105 ${
                      selectedFacilities.includes(facility)
                        ? `${colors.primary[100]} border-blue-300 ${colors.text.primary} shadow-md`
                        : `${colors.background.secondary} ${colors.border.default} ${colors.text.muted} hover:bg-gray-100`
                    }`}>
                    {facility}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Courses Grid */}
      <div className='mb-10'>
        <h3
          className={`text-2xl font-bold ${colors.text.secondary} mb-6 flex items-center gap-3`}>
          <Star className='w-6 h-6 text-yellow-500' />
          Popular Courses & Programs
        </h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
          {popularCourses.map((course, index) => (
            <button
              key={index}
              onClick={() => handleCourseClick(course)}
              className={`group ${colors.background.primary} hover:bg-gradient-to-br ${colors.primary[50]} border-2 ${colors.border.default} hover:border-blue-300 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 transform`}>
              <div className='text-4xl mb-3 group-hover:scale-125 transition-transform duration-300'>
                {course.icon}
              </div>
              <div
                className={`font-bold ${colors.text.secondary} mb-2 text-lg`}>
                {course.name}
              </div>
              <div
                className={`text-sm ${colors.text.muted} group-hover:${colors.text.primary} transition-colors duration-300`}>
                {course.category}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Search Action & Controls */}
      <div className='flex flex-col lg:flex-row gap-6 items-center justify-between mb-8'>
        <div className='flex items-center gap-4'>
          <button
            onClick={handleSearch}
            disabled={isSearching}
            className={`${colors.button.primary} ${colors.text.white} font-bold px-10 py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed min-w-48 text-lg relative overflow-hidden`}>
            {isSearching ? (
              <div className='flex items-center justify-center gap-3'>
                <div className='w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin'></div>
                <span>Searching...</span>
              </div>
            ) : (
              <div className='flex items-center justify-center gap-3'>
                <Search className='w-5 h-5' />
                <span>Search Colleges</span>
              </div>
            )}
          </button>
        </div>

        {searchResults.length > 0 && (
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-3'>
              <span className={`text-sm ${colors.text.muted} font-medium`}>
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`text-sm border-2 ${colors.border.default} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${colors.ring.focus} ${colors.background.primary} font-medium`}>
                {sortOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div
              className={`flex items-center gap-1 border-2 ${colors.border.default} rounded-xl p-1 ${colors.background.primary} shadow-md`}>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid'
                    ? `${colors.primary[100]} ${colors.text.primary}`
                    : `${colors.text.light} hover:bg-gray-100`
                }`}>
                <Grid className='w-4 h-4' />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list'
                    ? `${colors.primary[100]} ${colors.text.primary}`
                    : `${colors.text.light} hover:bg-gray-100`
                }`}>
                <List className='w-4 h-4' />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Search Results Section */}
      {searchResults.length > 0 && (
        <div className='space-y-6'>
          <div className='flex items-center justify-between'>
            <h3
              className={`text-3xl font-bold ${colors.text.secondary} flex items-center gap-3`}>
              🎯 Search Results
              <span
                className={`${colors.primary[100]} ${colors.text.primary} px-4 py-2 rounded-full text-lg font-bold`}>
                {searchResults.length} colleges found
              </span>
            </h3>
          </div>

          <div
            className={`grid gap-6 ${
              viewMode === 'grid' ? 'lg:grid-cols-2' : 'grid-cols-1'
            }`}>
            {searchResults.map((college, index) => (
              <div
                key={college.id}
                className={`${colors.background.primary} rounded-2xl border-2 ${colors.border.default} p-8 hover:shadow-2xl transition-all duration-500 hover:border-blue-300 hover:scale-102 transform group animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}>
                <div className='flex items-start justify-between mb-6'>
                  <div className='flex items-center gap-4'>
                    <div className='text-5xl group-hover:scale-110 transition-transform duration-300'>
                      {college.image}
                    </div>
                    <div>
                      <h4
                        className={`text-2xl font-bold ${colors.text.secondary} mb-2 group-hover:${colors.text.primary} transition-colors duration-300`}>
                        {college.name}
                      </h4>
                      <div
                        className={`flex items-center gap-2 ${colors.text.muted}`}>
                        <MapPin className='w-5 h-5' />
                        <span className='font-medium'>{college.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full'>
                    <Star className='w-5 h-5 text-yellow-400 fill-current' />
                    <span
                      className={`font-bold ${colors.text.secondary} text-lg`}>
                      {college.rating}
                    </span>
                  </div>
                </div>

                <div className='space-y-5'>
                  <div>
                    <span
                      className={`text-sm ${colors.text.muted} font-semibold mb-3 block`}>
                      🎓 Popular Courses:
                    </span>
                    <div className='flex flex-wrap gap-2'>
                      {college.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className={`${colors.primary[100]} ${colors.text.primary} px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors duration-200 cursor-pointer`}>
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span
                      className={`text-sm ${colors.text.muted} font-semibold mb-3 block`}>
                      🏫 Available Facilities:
                    </span>
                    <div className='flex flex-wrap gap-2'>
                      {college.facilities.map((facility, idx) => (
                        <span
                          key={idx}
                          className={`${colors.background.secondary} ${colors.text.secondary} px-4 py-2 rounded-full text-sm font-medium border ${colors.border.default}`}>
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`flex items-center justify-between pt-6 border-t-2 ${colors.border.default}`}>
                    <div className='flex items-center gap-2'>
                      <span className='text-2xl'>💰</span>
                      <span className={`font-bold text-green-600 text-xl`}>
                        {college.price}
                      </span>
                    </div>
                    <button
                      className={`${colors.button.primary} ${colors.text.white} px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95`}>
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {searchResults.length > 6 && (
            <div className='text-center pt-8'>
              <button
                className={`${colors.background.secondary} hover:bg-gray-100 ${colors.text.secondary} font-bold px-8 py-4 rounded-2xl border-2 ${colors.border.default} transition-all duration-300 hover:shadow-lg`}>
                Load More Colleges
              </button>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
          transition: all 0.2s ease;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 12px rgba(37, 99, 235, 0.4);
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default CollegeSearchSection;
