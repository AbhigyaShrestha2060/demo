import { Search } from 'lucide-react';
import { useState } from 'react';
import { colors } from '../../../components/Theme/Theme';
export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className={`${colors.background.gradient} py-16`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1
            className={`text-4xl md:text-5xl font-bold ${colors.text.secondary} mb-4`}>
            Your Gateway to Searching
            <span className={`${colors.text.primary} block`}>
              Education in Nepal
            </span>
          </h1>
          <p className={`text-xl ${colors.text.muted} mb-8`}>
            Explore colleges, courses, and resources tailored for your academic
            goals
          </p>

          <div className='max-w-2xl mx-auto mb-8'>
            <div className='relative'>
              <Search
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${colors.text.light} w-5 h-5`}
              />
              <input
                type='text'
                placeholder='Search for College name, Course, Affiliation, Events'
                className={`w-full pl-12 pr-4 py-4 border ${colors.border.default} rounded-lg focus:ring-2 ${colors.ring.focus} focus:border-transparent`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${colors.button.primary} ${colors.text.white} px-6 py-2 rounded-md transition-colors`}>
                Search
              </button>
            </div>
          </div>

          <p className={`${colors.text.primary} text-sm`}>
            🎯 Planning Your College Journey? Discover Colleges, Courses, News
            with College Info Nepal 🎯
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
