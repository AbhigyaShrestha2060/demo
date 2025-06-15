import { ChevronDown, ChevronUp, Filter, Search, X } from 'lucide-react';
import { useState } from 'react';

const University = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [universityDropdown, setUniversityDropdown] = useState(false);
  const [foreignAffiliatedDropdown, setForeignAffiliatedDropdown] =
    useState(false);
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [foreignAffiliated, setForeignAffiliated] = useState({
    yes: false,
    no: false,
  });

  const filters = [
    'All',
    'College',
    'University',
    'Course',
    'Event',
    'Information',
    'Scholarship',
    'Exam Routine',
    'Entrance',
  ];

  const universities = [
    {
      id: 1,
      name: 'The Institute of Chartered Accountants of Nepal (ICAN)',
      location: 'Satdobato, Lalitpur',
      image:
        'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
      type: 'Institute',
      featured: true,
    },
    {
      id: 2,
      name: 'Rapti Academy of Health Sciences',
      location: 'Ghorahi, Dang. Dang',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      type: 'Academy',
      featured: false,
    },
    {
      id: 3,
      name: 'Madan Bhandari University of Science and Technology',
      location: 'Chitlang, Hetauda, Makwanpur, Makwanpur',
      image:
        'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop',
      type: 'University',
      featured: true,
    },
    {
      id: 4,
      name: 'Pashupati Hindu University',
      location: 'Manohara, Kathmandu, Kageshwari Manohara, Kathmandu',
      image:
        'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&h=300&fit=crop',
      type: 'University',
      featured: false,
    },
    {
      id: 5,
      name: 'Manmohan Technical University',
      location: 'Sundarijal, Kathmandu, Nepal',
      image:
        'https://images.unsplash.com/photo-1581091870620-1c8f3b2d4e5f?w=400&h=300&fit=crop',
      type: 'Technical University',
      featured: true,
    },
  ];

  const universityOptions = [
    'The Institute of Chartered Accountants of Nepal (ICAN)',
    'Rapti Academy of Health Sciences',
    'Madan Bhandari University of Science and Technology',
    'Pashupati Hindu University',
    'Manmohan Technical University',
  ];

  const handleUniversitySelect = (university) => {
    setSelectedUniversities((prev) =>
      prev.includes(university)
        ? prev.filter((u) => u !== university)
        : [...prev, university]
    );
  };

  const clearFilters = () => {
    setSelectedUniversities([]);
    setForeignAffiliated({ yes: false, no: false });
  };

  const saveFilters = () => {
    setShowFilterModal(false);
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Filter Tabs */}
      <div className='bg-white px-6 py-4 border-b'>
        <div className='flex items-center space-x-2 overflow-x-auto'>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                activeFilter === filter
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Results Counter and Filter Button */}
      <div className='px-6 py-4 flex items-center justify-between'>
        <p className='text-gray-600 font-medium'>
          <span className='text-blue-600 font-bold text-lg'>70</span> results
          Found
        </p>
        <button
          onClick={() => setShowFilterModal(true)}
          className='flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'>
          <Filter size={18} />
          <span>Filter</span>
        </button>
      </div>

      {/* Universities Grid */}
      <div className='px-6 pb-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {universities.map((university) => (
            <div
              key={university.id}
              className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'>
              {/* Image */}
              <div className='relative h-48 bg-gradient-to-br from-blue-400 to-blue-600'>
                <img
                  src={university.image}
                  alt={university.name}
                  className='w-full h-full object-cover'
                />
                {university.featured && (
                  <div className='absolute top-3 left-3 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full'>
                    Featured
                  </div>
                )}
                <div className='absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700'>
                  {university.type}
                </div>
              </div>

              {/* Content */}
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-gray-900 mb-2 line-clamp-2'>
                  {university.name}
                </h3>
                <p className='text-gray-600 text-sm'>{university.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Modal */}
      {showFilterModal && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg w-full max-w-md mx-4 max-h-[80vh] overflow-y-auto'>
            {/* Header */}
            <div className='flex items-center justify-between p-4 border-b'>
              <h2 className='text-lg font-semibold'>Filter</h2>
              <button
                onClick={() => setShowFilterModal(false)}
                className='p-1 hover:bg-gray-100 rounded'>
                <X size={20} />
              </button>
            </div>

            {/* Filter Content */}
            <div className='p-4 space-y-6'>
              {/* University Filter */}
              <div>
                <button
                  onClick={() => setUniversityDropdown(!universityDropdown)}
                  className='flex items-center justify-between w-full text-left font-medium text-blue-600 pb-2'>
                  University
                  {universityDropdown ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>

                {universityDropdown && (
                  <div className='space-y-3'>
                    <div className='relative'>
                      <Search
                        size={16}
                        className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                      />
                      <input
                        type='text'
                        placeholder='Search...'
                        className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      />
                    </div>

                    <div className='space-y-2 max-h-40 overflow-y-auto'>
                      {universityOptions.map((university) => (
                        <label
                          key={university}
                          className='flex items-start space-x-2 cursor-pointer'>
                          <input
                            type='checkbox'
                            checked={selectedUniversities.includes(university)}
                            onChange={() => handleUniversitySelect(university)}
                            className='mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
                          />
                          <span className='text-sm text-gray-700 leading-tight'>
                            {university}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Foreign Affiliated Filter */}
              <div>
                <button
                  onClick={() =>
                    setForeignAffiliatedDropdown(!foreignAffiliatedDropdown)
                  }
                  className='flex items-center justify-between w-full text-left font-medium text-blue-600 pb-2'>
                  Foreign Affiliated
                  {foreignAffiliatedDropdown ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>

                {foreignAffiliatedDropdown && (
                  <div className='space-y-2'>
                    <label className='flex items-center space-x-2 cursor-pointer'>
                      <input
                        type='checkbox'
                        checked={foreignAffiliated.yes}
                        onChange={(e) =>
                          setForeignAffiliated((prev) => ({
                            ...prev,
                            yes: e.target.checked,
                          }))
                        }
                        className='rounded border-gray-300 text-blue-600 focus:ring-blue-500'
                      />
                      <span className='text-sm text-gray-700'>Yes</span>
                    </label>
                    <label className='flex items-center space-x-2 cursor-pointer'>
                      <input
                        type='checkbox'
                        checked={foreignAffiliated.no}
                        onChange={(e) =>
                          setForeignAffiliated((prev) => ({
                            ...prev,
                            no: e.target.checked,
                          }))
                        }
                        className='rounded border-gray-300 text-blue-600 focus:ring-blue-500'
                      />
                      <span className='text-sm text-gray-700'>No</span>
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className='flex items-center justify-between p-4 border-t space-x-3'>
              <button
                onClick={clearFilters}
                className='px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors'>
                Clear
              </button>
              <button
                onClick={saveFilters}
                className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default University;
