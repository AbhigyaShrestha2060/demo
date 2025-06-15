import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

// FilterSlider Component - Mobile Optimized
export const FilterSlider = ({ filters }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [visibleCount, setVisibleCount] = useState(10);

  // Update visible count based on screen size using CSS classes
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(5); // Mobile: 2 filters
      else if (width < 768) setVisibleCount(4); // Small tablet: 4 filters
      else if (width < 1024) setVisibleCount(6); // Tablet: 6 filters
      else setVisibleCount(10); // Desktop: 8 filters
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, filters.length - visibleCount));
  };

  const visibleFilters = filters.slice(startIndex, startIndex + visibleCount);

  return (
    <div className='flex items-center justify-between mb-4 sm:mb-6 space-x-2 sm:space-x-4'>
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className='w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-full hover:bg-white/90 transition-all duration-300 shadow-md border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={startIndex === 0}>
        <ChevronLeft className='w-4 h-4 sm:w-5 sm:h-5 text-gray-600' />
      </button>

      {/* Filters */}
      <div className='flex items-center space-x-2 sm:space-x-3 overflow-hidden flex-1'>
        {visibleFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap px-3 py-2 sm:px-6 sm:py-3 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm flex-shrink-0 ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform scale-105'
                : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white/90 border border-gray-200'
            }`}>
            {filter}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className='w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-full hover:bg-white/90 transition-all duration-300 shadow-md border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={startIndex + visibleCount >= filters.length}>
        <ChevronRight className='w-4 h-4 sm:w-5 sm:h-5 text-gray-600' />
      </button>
    </div>
  );
};
