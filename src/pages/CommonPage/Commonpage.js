// components/University.js
import {
  Award,
  Calendar,
  ExternalLink,
  MapPin,
  Search,
  Star,
  Users,
} from 'lucide-react';
import { useUniversity } from '../../context/UniversityContext';
import { useUniversityFilters } from '../../hooks/useUniversityFilters';
import { FilterSlider } from './SideFlider/SideFilter';

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
  'Admission',
  'Result',
  'Job Vacancy',
  'Foreign Affiliated',
  'Local',
  'Featured',
  'Popular',
];

const University = () => {
  const {
    universities,
    loading,
    selectedUniversities,
    setSelectedUniversities,
    foreignAffiliated,
    setForeignAffiliated,
    searchTerm,
    setSearchTerm,
    clearFilters,
  } = useUniversity();

  const filteredUniversities = useUniversityFilters({
    universities,
    searchTerm,
    selectedUniversities,
    foreignAffiliated,
  });

  const openDetailedPage = () => {
    window.location.href = '/universityDetailed';
  };

  if (loading)
    return <div className='text-center p-8'>Loading universities...</div>;

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
      {/* Header & Search */}

      <div className='bg-white/80 backdrop-blur-lg border-b border-white/20 sticky top-0 z-40'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
            <div className='text-center lg:text-left'>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                Discover Universities
              </h1>
              <p className='text-gray-600 mt-1 text-sm sm:text-base'>
                Find the perfect institution for your educational journey
              </p>
            </div>

            <div className='relative max-w-md w-full mx-auto lg:mx-0'>
              <Search
                size={18}
                className='absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400'
              />
              <input
                type='text'
                placeholder='Search universities...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 text-sm sm:text-base'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Pills */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6'>
        <FilterSlider filters={filters} />

        {/* Results Count */}
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8'>
          <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4'>
            <p className='text-gray-600 font-medium text-center sm:text-left'>
              <span className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                {filteredUniversities.length}
              </span>
              <span className='ml-2 text-sm sm:text-base'>results found</span>
            </p>
            {(selectedUniversities.length > 0 ||
              foreignAffiliated.yes ||
              foreignAffiliated.no) && (
              <span className='px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mx-auto sm:mx-0 w-fit'>
                Filters applied
              </span>
            )}
          </div>
        </div>

        {/* University Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
          {filteredUniversities.map((university) => (
            <div
              key={university.id}
              className='group bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:border-blue-200 transform hover:-translate-y-2'>
              <div className='relative h-40 sm:h-48 lg:h-52 overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 z-10'></div>
                <img
                  src={university.image}
                  alt={university.name}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                />

                {/* Badges */}
                <div className='absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col gap-1 sm:gap-2 z-20'>
                  {university.featured && (
                    <div className='px-2 sm:px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse'>
                      ⭐ Featured
                    </div>
                  )}
                  <div className='px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full'>
                    {university.type}
                  </div>
                </div>

                {/* Rating */}
                <div className='absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full z-20'>
                  <Star
                    size={10}
                    className='text-yellow-500 fill-current sm:w-3 sm:h-3'
                  />
                  <span className='text-xs font-bold text-gray-700'>
                    {university.rating}
                  </span>
                </div>

                {/* Quick Stats Overlay - Hidden on mobile for better UX */}
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block'>
                  <div className='flex justify-between text-white text-xs'>
                    <div className='flex items-center space-x-1'>
                      <Users size={12} />
                      <span>{university.students}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <Calendar size={12} />
                      <span>Est. {university.established}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <Award size={12} />
                      <span>{university.programs} Programs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className='p-4 sm:p-6'>
                <h3 className='font-bold text-base sm:text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300'>
                  {university.name}
                </h3>

                <div className='flex items-start space-x-2 mb-3'>
                  <MapPin
                    size={14}
                    className='text-gray-400 mt-0.5 flex-shrink-0'
                  />
                  <p className='text-xs sm:text-sm text-gray-600 line-clamp-1'>
                    {university.location}
                  </p>
                </div>

                <p className='text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2'>
                  {university.description}
                </p>

                {/* Stats for mobile */}
                <div className='flex justify-between text-xs text-gray-500 mb-4 sm:hidden'>
                  <span>{university.students}</span>
                  <span>Est. {university.established}</span>
                  <span>{university.programs} Programs</span>
                </div>

                {/* Tags */}
                <div className='flex flex-wrap gap-1 sm:gap-2 mb-4'>
                  {university.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className='px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-lg font-medium'>
                      {tag}
                    </span>
                  ))}
                  {university.tags.length > 2 && (
                    <span className='px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg font-medium'>
                      +{university.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => openDetailedPage()}
                  className='w-full flex items-center justify-center space-x-2 px-4 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 font-medium group/btn text-sm sm:text-base'>
                  <span>View Details</span>
                  <ExternalLink
                    size={14}
                    className='group-hover/btn:translate-x-1 transition-transform duration-300'
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredUniversities.length === 0 && (
          <div className='text-center py-12 sm:py-16'>
            <div className='w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Search
                size={28}
                className='text-gray-400 sm:w-8 sm:h-8'
              />
            </div>
            <h3 className='text-lg sm:text-xl font-semibold text-gray-900 mb-2'>
              No universities found
            </h3>
            <p className='text-gray-600 mb-6 text-sm sm:text-base px-4'>
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={clearFilters}
              className='px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors text-sm sm:text-base'>
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default University;
