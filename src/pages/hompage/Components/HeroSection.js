import {
  Award,
  BookOpen,
  MapPin,
  Search,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const suggestions = [
  'Engineering Colleges in Kathmandu',
  'Management Programs',
  'Medical College Admission',
  'IT Courses in Pokhara',
  'Scholarship Opportunities',
  'Plus Two Programs',
];

const stats = [
  { number: 500, label: 'Partner Colleges', icon: BookOpen },
  { number: 1200, label: 'Available Courses', icon: Award },
  { number: 50000, label: 'Students Helped', icon: Users },
  { number: 95, label: 'Success Rate', icon: TrendingUp, suffix: '%' },
];

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTypingText, setCurrentTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect using the actual suggestions
  useEffect(() => {
    const currentText = suggestions[typingIndex];

    const typingTimer = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setCurrentTypingText(currentText.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setCurrentTypingText(currentText.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setTypingIndex((typingIndex + 1) % suggestions.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, typingIndex]);

  // Animate statistics on mount
  useEffect(() => {
    setIsLoaded(true);
    const timers = stats.map((stat, index) =>
      setTimeout(() => {
        const duration = 2000;
        const increment = stat.number / (duration / 50);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timer);
          }
          setAnimatedStats((prev) => {
            const newStats = [...prev];
            newStats[index] = Math.floor(current);
            return newStats;
          });
        }, 50);
      }, index * 200)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const filteredSuggestions = suggestions.filter(
    (suggestion) =>
      suggestion.toLowerCase().includes(searchQuery.toLowerCase()) &&
      searchQuery.length > 0
  );

  return (
    <section className='relative min-h-screen overflow-hidden bg-white'>
      {/* Animated Blue Blur Spheres */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Large moving sphere - top left */}
        <div
          className='absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/30 to-blue-600/40 rounded-full blur-3xl'
          style={{
            animation: 'float-1 20s ease-in-out infinite',
            top: '-10%',
            left: '-10%',
          }}></div>

        {/* Medium sphere - top right */}
        <div
          className='absolute w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-gradient-to-br from-blue-500/25 to-blue-700/35 rounded-full blur-2xl'
          style={{
            animation: 'float-2 25s ease-in-out infinite',
            top: '10%',
            right: '-5%',
          }}></div>

        {/* Small sphere - center left */}
        <div
          className='absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-300/20 to-blue-500/30 rounded-full blur-xl'
          style={{
            animation: 'float-3 18s ease-in-out infinite',
            top: '40%',
            left: '5%',
          }}></div>

        {/* Medium sphere - bottom right */}
        <div
          className='absolute w-56 h-56 sm:w-68 sm:h-68 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-600/20 to-blue-800/30 rounded-full blur-3xl'
          style={{
            animation: 'float-4 22s ease-in-out infinite',
            bottom: '-15%',
            right: '10%',
          }}></div>

        {/* Small accent sphere - center */}
        <div
          className='absolute w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-400/15 to-blue-600/25 rounded-full blur-lg'
          style={{
            animation: 'float-5 15s ease-in-out infinite',
            top: '60%',
            left: '60%',
          }}></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16'>
        <div
          className={`text-center transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
          {/* Main Heading */}
          <div className='mb-8 sm:mb-12'>
            <div className='inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 text-blue-700 text-xs sm:text-sm font-medium border border-blue-200/50 shadow-xl'>
              <MapPin className='w-3 h-3 sm:w-4 sm:h-4' />
              <span>Nepal's Premier Education Platform</span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2'>
              Your Gateway to
              <span className='block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent'>
                Quality Education
              </span>
            </h1>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4'>
              Discover the perfect college, course, and career path with Nepal's
              most comprehensive educational platform
            </p>
          </div>

          {/* Enhanced Glassmorphism Search Interface */}
          <div className='max-w-4xl mx-auto mb-12 sm:mb-16 px-4'>
            <div className='relative group'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-600/15 rounded-2xl sm:rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500'></div>
              <div className='relative bg-white/70 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-2 sm:p-3 shadow-2xl border border-blue-200/30 hover:bg-white/80 hover:border-blue-300/40 transition-all duration-300'>
                <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0'>
                  <div className='flex items-center flex-1'>
                    <Search className='ml-4 sm:ml-6 w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0' />
                    <input
                      type='text'
                      placeholder={currentTypingText}
                      className='flex-1 px-3 sm:px-6 py-3 sm:py-4 text-base sm:text-lg text-gray-800 placeholder-gray-500 bg-transparent border-none outline-none'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setShowSuggestions(true)}
                      onBlur={() =>
                        setTimeout(() => setShowSuggestions(false), 200)
                      }
                    />
                  </div>
                  <button className='bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl text-sm sm:text-base'>
                    Search
                  </button>
                </div>

                {/* Glassmorphism Search Suggestions - Fixed z-index */}
                {/* {showSuggestions &&
                  (filteredSuggestions.length > 0 ||
                    searchQuery.length === 0) && (
                    <div className='absolute top-full left-0 right-0 mt-3 bg-white/90 backdrop-blur-2xl rounded-xl sm:rounded-2xl shadow-2xl border border-blue-200/30 overflow-hidden z-[100]'>
                      {(filteredSuggestions.length > 0
                        ? filteredSuggestions
                        : suggestions
                      ).map((suggestion, index) => (
                        <button
                          key={index}
                          className='w-full text-left px-4 sm:px-6 py-3 sm:py-4 hover:bg-blue-50/80 transition-all duration-200 flex items-center gap-3 text-gray-700 hover:text-blue-700 border-b border-blue-100/50 last:border-b-0 text-sm sm:text-base'
                          onClick={() => {
                            setSearchQuery(suggestion);
                            setShowSuggestions(false);
                          }}>
                          <Search className='w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0' />
                          <span className='truncate'>{suggestion}</span>
                        </button>
                      ))}
                    </div>
                  )} */}
              </div>
            </div>

            {/* Popular Searches with Glassmorphism - Fixed spacing */}
            <div className='mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-2 sm:gap-3 px-2'>
              <span className='text-gray-600 text-xs sm:text-sm mb-1 sm:mb-0'>
                Popular:
              </span>
              <div className='flex flex-wrap justify-center gap-2 sm:gap-3'>
                {['Engineering', 'Medicine', 'Management', 'IT Programs'].map(
                  (tag, index) => (
                    <button
                      key={index}
                      className='bg-white/60 hover:bg-white/80 text-blue-700 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300 backdrop-blur-xl border border-blue-200/40 hover:border-blue-300/60 hover:shadow-lg whitespace-nowrap'
                      onClick={() => setSearchQuery(tag)}>
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Professional Glassmorphism Statistics Grid */}
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-4'>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white/60 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-200/30 hover:bg-white/80 hover:border-blue-300/50 transition-all duration-500 shadow-2xl ${
                    isLoaded
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}>
                  {/* Liquid Glow Effect */}
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-600/15 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                  <div className='relative z-10'>
                    <Icon className='w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-600 mb-2 sm:mb-4 mx-auto group-hover:text-blue-700 transition-colors duration-300' />
                    <div className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-1 sm:mb-2'>
                      {animatedStats[index]}
                      {stat.suffix || ''}
                      {stat.suffix !== '%' &&
                        animatedStats[index] >= 1000 &&
                        '+'}
                    </div>
                    <div className='text-gray-600 text-xs sm:text-sm font-medium group-hover:text-gray-700 transition-colors duration-300'>
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Glassmorphism Call to Action Buttons - Removed jumping animation */}
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4'>
            <button className='group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl w-full sm:w-auto sm:min-w-[220px]'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/30 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <span className='relative z-10'>Explore Colleges</span>
            </button>
            <button className='group relative bg-white/60 backdrop-blur-2xl border-2 border-blue-300/50 text-blue-700 px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold hover:bg-white/80 hover:border-blue-400/70 transition-all duration-300 w-full sm:w-auto sm:min-w-[220px] shadow-2xl'>
              <div className='absolute inset-0 bg-blue-50/30 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <span className='relative z-10'>View Courses</span>
            </button>
          </div>

          {/* Professional Trust Indicators */}
          <div className='text-center px-4'>
            <p className='text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6'>
              Trusted by students across Nepal
            </p>
            <div className='flex flex-wrap justify-center items-center gap-3 sm:gap-6 opacity-80'>
              <div className='bg-white/60 backdrop-blur-xl rounded-lg sm:rounded-xl px-4 sm:px-6 py-2 sm:py-3 text-blue-700 text-xs sm:text-sm border border-blue-200/40 hover:bg-white/80 hover:border-blue-300/60 transition-all duration-300'>
                TU Affiliated
              </div>
              <div className='bg-white/60 backdrop-blur-xl rounded-lg sm:rounded-xl px-4 sm:px-6 py-2 sm:py-3 text-blue-700 text-xs sm:text-sm border border-blue-200/40 hover:bg-white/80 hover:border-blue-300/60 transition-all duration-300'>
                KU Partner
              </div>
              <div className='bg-white/60 backdrop-blur-xl rounded-lg sm:rounded-xl px-4 sm:px-6 py-2 sm:py-3 text-blue-700 text-xs sm:text-sm border border-blue-200/40 hover:bg-white/80 hover:border-blue-300/60 transition-all duration-300'>
                PU Recognized
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for floating animations */}
      <style jsx>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(30px, -20px) rotate(90deg);
          }
          50% {
            transform: translate(-20px, -40px) rotate(180deg);
          }
          75% {
            transform: translate(-40px, 20px) rotate(270deg);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-25px, 30px) rotate(-90deg);
          }
          50% {
            transform: translate(40px, 15px) rotate(-180deg);
          }
          75% {
            transform: translate(20px, -25px) rotate(-270deg);
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 20px) scale(0.9);
          }
        }

        @keyframes float-4 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(35px, -15px) rotate(45deg) scale(1.05);
          }
          50% {
            transform: translate(-15px, -35px) rotate(90deg) scale(0.95);
          }
          75% {
            transform: translate(-25px, 25px) rotate(135deg) scale(1.02);
          }
        }

        @keyframes float-5 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, -30px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
