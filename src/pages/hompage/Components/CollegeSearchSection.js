import {
  Bed,
  Book,
  Building2,
  CheckCircle,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  Heart,
  MapPin,
  Search,
  Star,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const CollegeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedStream, setSelectedStream] = useState('All Streams');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);

  const courses = [
    {
      name: 'BCA',
      icon: 'Building2',
      category: 'Technology',
      color: 'bg-green-500',
    },
    {
      name: 'Engineering',
      icon: 'FlaskConical',
      category: 'Engineering',
      color: 'bg-orange-500',
    },
    { name: 'MBA', icon: 'Book', category: 'Management', color: 'bg-red-500' },
    {
      name: 'Medicine',
      icon: 'Bed',
      category: 'Medical',
      color: 'bg-pink-500',
    },
  ];

  const colleges = [
    {
      id: 1,
      name: 'Tribhuvan University',
      location: 'Kathmandu',
      rating: 4.5,
      courses: ['BBA', 'CSIT', 'Engineering'],
      facilities: ['Library', 'Hostel', 'Lab', 'Sports', 'Wifi'],
      fee: 'NPR 45,000/year',
      levels: ['Undergraduate', 'Postgraduate'],
      students: '25,000+',
      established: '1959',
      image:
        'data:image/jpeg;base64,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',
      description:
        'Premier public university with comprehensive academic programs and research facilities.',
      contact: {
        phone: '+977-1-4331434',
        email: 'info@tu.edu.np',
        website: 'www.tu.edu.np',
      },
    },
    {
      id: 2,
      name: 'Kathmandu University',
      location: 'Dhulikhel',
      rating: 4.8,
      courses: ['Engineering', 'MBA', 'Medicine'],
      facilities: [
        'Library',
        'Hostel',
        'Lab',
        'Sports',
        'Wifi',
        'Research Center',
      ],
      fee: 'NPR 125,000/year',
      levels: ['Undergraduate', 'Postgraduate'],
      students: '15,000+',
      established: '1991',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      description:
        'Modern autonomous university known for quality education and innovative research.',
      contact: {
        phone: '+977-11-661399',
        email: 'info@ku.edu.np',
        website: 'www.ku.edu.np',
      },
    },
    {
      id: 3,
      name: 'Pokhara University',
      location: 'Pokhara',
      rating: 4.3,
      courses: ['BCA', 'MBA'],
      facilities: ['Library', 'Lab', 'Wifi', 'Sports'],
      fee: 'NPR 60,000/year',
      levels: ['Undergraduate'],
      students: '12,000+',
      established: '1997',
      image:
        'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop',
      description:
        'Dynamic university offering innovative programs in beautiful mountain setting.',
      contact: {
        phone: '+977-61-504034',
        email: 'info@pu.edu.np',
        website: 'www.pu.edu.np',
      },
    },
  ];

  const handleSearch = () => {
    const filteredColleges = colleges.filter((college) => {
      const matchesSearch =
        college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.courses.some((course) =>
          course.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesLevel =
        selectedLevel === 'All Levels' ||
        college.levels.includes(selectedLevel);
      const matchesStream =
        selectedStream === 'All Streams' ||
        college.courses.some(
          (course) =>
            courses.find((c) => c.name === course)?.category === selectedStream
        );
      const matchesLocation =
        selectedLocation === 'All Locations' ||
        college.location === selectedLocation;
      return matchesSearch && matchesLevel && matchesStream && matchesLocation;
    });
    setResults(filteredColleges);
  };

  const toggleFavorite = (collegeId) => {
    setFavorites((prev) =>
      prev.includes(collegeId)
        ? prev.filter((id) => id !== collegeId)
        : [...prev, collegeId]
    );
  };

  useEffect(() => {
    setResults(colleges);
  }, []);

  const renderIcon = (iconName, className = 'w-6 h-6') => {
    const iconMap = {
      Book: <Book className={className} />,
      Building2: <Building2 className={className} />,
      FlaskConical: <FlaskConical className={className} />,
      Bed: <Bed className={className} />,
    };
    return iconMap[iconName] || <Book className={className} />;
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 p-6'>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6'>
        {/* Left Panel - Search & Filters */}
        <div className='lg:col-span-4 space-y-6'>
          {/* Search Section */}
          <div className='bg-white rounded-lg p-4 shadow-md'>
            <div className='text-center mb-4'>
              <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-2'>
                <GraduationCap className='w-8 h-8 text-white' />
              </div>
              <h1 className='text-xl font-bold text-gray-800'>
                Find Your College
              </h1>
            </div>
            <div className='relative mb-4'>
              <input
                type='text'
                placeholder='Search colleges, courses...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className='w-full bg-gray-200 text-gray-700 p-3 rounded hover:bg-gray-300 transition'>
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            {showFilters && (
              <div className='mt-4 space-y-2'>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className='w-full p-2 border border-gray-300 rounded'>
                  <option value='All Levels'>All Levels</option>
                  <option value='Undergraduate'>Undergraduate</option>
                  <option value='Postgraduate'>Postgraduate</option>
                </select>
                <select
                  value={selectedStream}
                  onChange={(e) => setSelectedStream(e.target.value)}
                  className='w-full p-2 border border-gray-300 rounded'>
                  <option value='All Streams'>All Streams</option>
                  <option value='Technology'>Technology</option>
                  <option value='Management'>Management</option>
                  <option value='Engineering'>Engineering</option>
                  <option value='Medical'>Medical</option>
                </select>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className='w-full p-2 border border-gray-300 rounded'>
                  <option value='All Locations'>All Locations</option>
                  <option value='Kathmandu'>Kathmandu</option>
                  <option value='Dhulikhel'>Dhulikhel</option>
                  <option value='Pokhara'>Pokhara</option>
                </select>
              </div>
            )}
            <button
              onClick={handleSearch}
              className='w-full bg-blue-500 text-white p-3 rounded mt-4 hover:bg-blue-600 transition'>
              Search
            </button>
          </div>

          {/* Popular Courses */}
          <div className='bg-white rounded-lg p-4 shadow-md'>
            <h2 className='text-lg font-bold text-gray-800 mb-4'>
              Popular Courses
            </h2>
            <div className='grid grid-cols-2 gap-2'>
              {courses.map((course, index) => (
                <div
                  key={index}
                  className='p-2 bg-gray-100 rounded flex items-center gap-2'>
                  <div
                    className={`w-6 h-6 ${course.color} rounded flex items-center justify-center`}>
                    {renderIcon(course.icon, 'w-4 h-4 text-white')}
                  </div>
                  <div>
                    <p className='text-sm font-medium'>{course.name}</p>
                    <p className='text-xs text-gray-500'>{course.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div className='bg-white rounded-lg p-4 shadow-md'>
            <h3 className='text-lg font-bold text-gray-800 mb-4'>Insights</h3>
            <div className='space-y-2'>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Total Colleges</span>
                <span className='text-blue-600'>{colleges.length}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Courses Available</span>
                <span className='text-green-600'>{courses.length}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Results</span>
                <span className='text-purple-600'>{results.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Results */}
        <div className='lg:col-span-8'>
          <div className='bg-white rounded-lg p-4 shadow-md mb-6'>
            <h2 className='text-xl font-bold text-gray-800'>
              Search Results: {results.length} Colleges
            </h2>
          </div>
          <div
            className='bg-white rounded-lg shadow-md p-4'
            style={{ maxHeight: 'calc(129.2vh - 300px)', overflowY: 'auto' }}>
            {results.map((college) => (
              <div
                key={college.id}
                className='border border-gray-300 rounded-lg mb-4 p-4 flex flex-col md:flex-row items-center'>
                {/* Image Section */}
                <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                  <img
                    src={college.image}
                    alt={college.name}
                    className='w-5/6 h-48 object-cover rounded'
                  />
                </div>
                {/* Info Section */}
                <div className='w-full md:w-2/3 p-2'>
                  <div className='flex justify-between items-start mb-2'>
                    <div>
                      <h3 className='text-lg font-bold'>{college.name}</h3>
                      <div className='text-sm text-gray-600 flex items-center gap-2'>
                        <MapPin className='w-4 h-4' />
                        <span>{college.location}</span>
                        <span>Est. {college.established}</span>
                        <span>{college.students}</span>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='text-yellow-500 font-bold'>
                        {college.rating}
                      </span>
                      <Star className='w-4 h-4 text-yellow-500' />
                      <button
                        onClick={() => toggleFavorite(college.id)}
                        className={`p-1 rounded-full ${
                          favorites.includes(college.id)
                            ? 'text-red-500'
                            : 'text-gray-400'
                        }`}>
                        <Heart className='w-5 h-5' />
                      </button>
                    </div>
                  </div>
                  <p className='text-gray-700 mb-2'>{college.description}</p>
                  <div className='flex flex-wrap gap-2 mb-2'>
                    {college.courses.map((course, i) => (
                      <span
                        key={i}
                        className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full'>
                        {course}
                      </span>
                    ))}
                  </div>
                  <div className='flex flex-wrap gap-2 mb-2'>
                    {college.facilities.map((facility, i) => (
                      <span
                        key={i}
                        className='bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center gap-1'>
                        <CheckCircle className='w-3 h-3' />
                        {facility}
                      </span>
                    ))}
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-green-600 font-bold'>
                      ${college.fee}
                    </span>
                    <div className='flex gap-2'>
                      <button
                        onClick={() => setSelectedCollege(college)}
                        className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'>
                        View Details
                      </button>
                      <a
                        href={college.contact.website}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600 flex items-center gap-1'>
                        Visit <ExternalLink className='w-4 h-4' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {results.length === 0 && (
              <div className='text-center p-4'>
                <p className='text-gray-600'>
                  No colleges found. Try adjusting your search criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* College Detail Modal */}
      {selectedCollege && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
          <div className='bg-white rounded-lg p-6 max-w-md w-full'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-bold'>{selectedCollege.name}</h2>
              <button
                onClick={() => setSelectedCollege(null)}
                className='text-gray-500 hover:text-gray-700'>
                ✖
              </button>
            </div>
            <p className='text-gray-700 mb-4'>{selectedCollege.description}</p>
            <div className='space-y-2 mb-4'>
              <p>
                <strong>Phone:</strong> {selectedCollege.contact.phone}
              </p>
              <p>
                <strong>Email:</strong> {selectedCollege.contact.email}
              </p>
              <p>
                <strong>Website:</strong>{' '}
                <a
                  href={selectedCollege.contact.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500'>
                  {selectedCollege.contact.website}
                </a>
              </p>
            </div>
            <div className='flex gap-2'>
              <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                Apply Now
              </button>
              <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400'>
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeSearch;
