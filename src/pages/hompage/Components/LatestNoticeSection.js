import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import { colors } from '../../../components/Theme/Theme';

export function LatestNoticesSection() {
  const notices = [
    {
      id: 1,
      title: 'BA 3rd Year Exam Center 2082 - Tribhuvan University',
      date: '15 JUN',
      university: 'Tribhuvan University',
      image: '/assets/logos/TU.png',

      imageAlt: 'BA 3rd Year Exam Center Notice',
    },
    {
      id: 2,
      title: 'BEc 3rd Year Exam Center 2082 - Tribhuvan University',
      date: '14 JUN',
      university: 'Tribhuvan University',
      image: '/assets/logos/TU.png',

      imageAlt: 'BEc 3rd Year Exam Center Notice',
    },
    {
      id: 3,
      title: 'BSc 3rd Year Exam Center 2082 - Tribhuvan University',
      date: '13 JUN',
      university: 'Tribhuvan University',
      image: '/assets/logos/TU.png',

      imageAlt: 'BSc 3rd Year Exam Center Notice',
    },
  ];

  return (
    <section className={`py-16 ${colors.background.secondary}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className={`text-3xl font-bold ${colors.text.secondary}`}>
            Latest Notices
          </h2>
          <div className='flex space-x-2'>
            <button
              className={`p-2 border ${colors.border.default} rounded-md hover:bg-gray-100`}>
              <ChevronLeft className='w-5 h-5' />
            </button>
            <button
              className={`p-2 border ${colors.border.default} rounded-md hover:bg-gray-100`}>
              <ChevronRight className='w-5 h-5' />
            </button>
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          {notices.map((notice) => (
            <div
              key={notice.id}
              className={`${colors.background.primary} rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300`}>
              {/* Image Section */}
              <div className='relative h-48 w-full'>
                <img
                  src={notice.image}
                  alt={notice.imageAlt}
                  className='w-full h-full object-cover'
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className='absolute inset-0 bg-gray-200 flex items-center justify-center hidden'>
                  <GraduationCap className='w-12 h-12 text-gray-400' />
                </div>

                {/* Date overlay */}
                <div className='absolute top-4 left-4'>
                  <div
                    className={`${colors.primary[600]} ${colors.text.white} px-3 py-1 rounded text-sm font-semibold shadow-md`}>
                    {notice.date}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className='p-6'>
                <div className='flex items-center space-x-2 mb-3'>
                  <div className='w-8 h-8 bg-red-100 rounded-full flex items-center justify-center'>
                    <GraduationCap className='w-4 h-4 text-red-600' />
                  </div>
                  <span className={`text-sm ${colors.text.muted}`}>
                    {notice.university}
                  </span>
                </div>

                <h3
                  className={`font-semibold ${colors.text.secondary} mb-3 line-clamp-2`}>
                  {notice.title}
                </h3>

                <div
                  className={`flex items-center space-x-2 text-sm ${colors.text.light} hover:${colors.text.primary} cursor-pointer transition-colors duration-200`}>
                  <BookOpen className='w-4 h-4' />
                  <span>View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
