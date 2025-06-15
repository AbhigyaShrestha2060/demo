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
  ];

  const handleSearch = async () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockResults);
      setIsSearching(false);
    }, 1000);
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

  return (
    <div className='bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl p-8 shadow-2xl border border-gray-100'>
      {/* Header */}
      <div className='text-center mb-8'>
        <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4'>
          <GraduationCap className='w-8 h-8 text-white' />
        </div>
        <h2 className='text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3'>
          Find Your Perfect College
        </h2>
        <p className='text-gray-600 text-lg'>
          Discover opportunities that match your dreams and aspirations
        </p>
      </div>

      {/* Main Search Bar */}
      <div className='relative mb-6'>
        <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
          <Search className='h-5 w-5 text-gray-400' />
        </div>
        <input
          ref={searchInputRef}
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search colleges, courses, or locations...'
          className='w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white shadow-sm'
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
      </div>

      {/* Quick Filters */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-6'>
        <div className='relative'>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className='w-full appearance-none bg-white border-2 border-gray-200 rounded-xl px-4 py-3 pr-8 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300'>
            <option value=''>All Levels</option>
            {levels.map((level) => (
              <option
                key={level}
                value={level}>
                {level}
              </option>
            ))}
          </select>
          <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none' />
        </div>

        <div className='relative'>
          <select
            value={selectedStream}
            onChange={(e) => setSelectedStream(e.target.value)}
            className='w-full appearance-none bg-white border-2 border-gray-200 rounded-xl px-4 py-3 pr-8 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300'>
            <option value=''>All Streams</option>
            {streams.map((stream) => (
              <option
                key={stream}
                value={stream}>
                {stream}
              </option>
            ))}
          </select>
          <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none' />
        </div>

        <div className='relative'>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className='w-full appearance-none bg-white border-2 border-gray-200 rounded-xl px-4 py-3 pr-8 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300'>
            <option value=''>All Locations</option>
            {locations.map((location) => (
              <option
                key={location}
                value={location}>
                {location}
              </option>
            ))}
          </select>
          <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none' />
        </div>

        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className='flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 border-2 border-gray-200 rounded-xl px-4 py-3 transition-all duration-300'>
          <SlidersHorizontal className='w-4 h-4' />
          Advanced
        </button>
      </div>

      {/* Advanced Filters Panel */}
      {showAdvancedFilters && (
        <div className='bg-white rounded-xl border-2 border-gray-100 p-6 mb-6 shadow-sm'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-lg font-semibold text-gray-800'>
              Advanced Filters
            </h3>
            <button
              onClick={clearFilters}
              className='text-sm text-blue-600 hover:text-blue-800 font-medium'>
              Clear All
            </button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Price Range */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Annual Fee Range (NPR)
              </label>
              <div className='flex items-center gap-4'>
                <input
                  type='range'
                  min='0'
                  max='500000'
                  step='10000'
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className='flex-1'
                />
                <span className='text-sm text-gray-600 min-w-24'>
                  ₹{priceRange[1].toLocaleString()}
                </span>
              </div>
            </div>

            {/* Facilities */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Required Facilities
              </label>
              <div className='flex flex-wrap gap-2'>
                {facilities.map((facility) => (
                  <button
                    key={facility}
                    onClick={() => toggleFacility(facility)}
                    className={`px-3 py-1 rounded-full text-sm border transition-all duration-200 ${
                      selectedFacilities.includes(facility)
                        ? 'bg-blue-100 border-blue-300 text-blue-700'
                        : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                    }`}>
                    {facility}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popular Courses */}
      <div className='mb-8'>
        <h3 className='text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2'>
          <Star className='w-5 h-5 text-yellow-500' />
          Popular Courses
        </h3>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-3'>
          {popularCourses.map((course, index) => (
            <button
              key={index}
              onClick={() => handleCourseClick(course)}
              className='group bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border-2 border-gray-100 hover:border-blue-200 rounded-xl p-4 text-center transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95'>
              <div className='text-2xl mb-2 group-hover:scale-110 transition-transform duration-300'>
                {course.icon}
              </div>
              <div className='font-semibold text-gray-800 mb-1'>
                {course.name}
              </div>
              <div className='text-xs text-gray-500'>{course.category}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Search Controls */}
      <div className='flex flex-col sm:flex-row gap-4 items-center justify-between mb-6'>
        <div className='flex items-center gap-4'>
          <button
            onClick={handleSearch}
            disabled={isSearching}
            className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed min-w-32'>
            {isSearching ? (
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                Searching...
              </div>
            ) : (
              <>Search Colleges</>
            )}
          </button>
        </div>

        {searchResults.length > 0 && (
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <span className='text-sm text-gray-600'>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className='text-sm border border-gray-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-100'>
                {sortOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className='flex items-center gap-1 border border-gray-200 rounded-lg p-1'>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1 rounded ${
                  viewMode === 'grid'
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-400'
                }`}>
                <Grid className='w-4 h-4' />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1 rounded ${
                  viewMode === 'list'
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-400'
                }`}>
                <List className='w-4 h-4' />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className='mt-8'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-xl font-semibold text-gray-800'>
              Search Results ({searchResults.length} colleges found)
            </h3>
          </div>

          <div
            className={`grid gap-6 ${
              viewMode === 'grid' ? 'md:grid-cols-2' : 'grid-cols-1'
            }`}>
            {searchResults.map((college) => (
              <div
                key={college.id}
                className='bg-white rounded-xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-200'>
                <div className='flex items-start justify-between mb-4'>
                  <div className='flex items-center gap-3'>
                    <div className='text-3xl'>{college.image}</div>
                    <div>
                      <h4 className='text-xl font-semibold text-gray-800'>
                        {college.name}
                      </h4>
                      <div className='flex items-center gap-1 text-gray-600'>
                        <MapPin className='w-4 h-4' />
                        <span className='text-sm'>{college.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Star className='w-4 h-4 text-yellow-400 fill-current' />
                    <span className='font-semibold'>{college.rating}</span>
                  </div>
                </div>

                <div className='space-y-3'>
                  <div>
                    <span className='text-sm text-gray-600'>
                      Popular Courses:
                    </span>
                    <div className='flex flex-wrap gap-1 mt-1'>
                      {college.courses.slice(0, 3).map((course, idx) => (
                        <span
                          key={idx}
                          className='bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs'>
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className='text-sm text-gray-600'>Facilities:</span>
                    <div className='flex flex-wrap gap-1 mt-1'>
                      {college.facilities.slice(0, 4).map((facility, idx) => (
                        <span
                          key={idx}
                          className='bg-gray-50 text-gray-700 px-2 py-1 rounded-full text-xs'>
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='flex items-center justify-between pt-3 border-t border-gray-100'>
                    <span className='font-semibold text-green-600'>
                      {college.price}
                    </span>
                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200'>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeSearchSection;
