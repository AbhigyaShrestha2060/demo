import { GraduationCap } from 'lucide-react';
import { colors } from '../../../components/Theme/Theme';

export function CollegesSection({ colleges }) {
  return (
    <section className={`py-16 ${colors.background.primary}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2
          className={`text-3xl font-bold text-center ${colors.text.secondary} mb-12`}>
          Colleges that Caught our Attention
        </h2>

        <div className='grid md:grid-cols-4 gap-6 mb-12'>
          {colleges.map((college, index) => (
            <div
              key={index}
              className='text-center group cursor-pointer transition-transform duration-300 hover:scale-105'>
              <div
                className={`w-32 h-32 ${colors.primary[100]} rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                <img
                  src={college.logo}
                  alt={`${college.name} logo`}
                  className='w-28 h-28 object-contain'
                  onError={(e) => {
                    // Fallback if logo fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback icon */}
                <div className='w-28 h-28 hidden items-center justify-center'>
                  <GraduationCap className='w-12 h-12 text-gray-400' />
                </div>
              </div>
              <h3
                className={`font-semibold ${colors.text.secondary} group-hover:${colors.text.primary} transition-colors duration-300`}>
                {college.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
