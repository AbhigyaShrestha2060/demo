import { Bell, BookOpen, Search } from 'lucide-react';
import { colors } from '../../../components/Theme/Theme';
export function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: 'Find Your College',
      description:
        'Discover colleges that match your career aspirations and location needs',
      buttonText: 'Explore Colleges',
    },
    {
      icon: BookOpen,
      title: 'Browse Courses',
      description:
        'Explore courses in different fields and levels that fit your academic path',
      buttonText: 'View Courses',
    },
    {
      icon: Bell,
      title: 'Stay Updated',
      description: 'Never miss out on key events, deadlines, and announcements',
      buttonText: 'View Latest',
    },
  ];

  return (
    <section className={`py-16 ${colors.background.primary}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className={`text-3xl font-bold ${colors.text.secondary} mb-4`}>
            Unlock Educational Opportunities tailored for you and stay
          </h2>
          <p className={`text-xl ${colors.text.muted}`}>
            connected with Nepal's academics
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='text-center'>
              <div
                className={`w-16 h-16 ${colors.primary[100]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className={`w-8 h-8 ${colors.text.primary}`} />
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${colors.text.secondary}`}>
                {feature.title}
              </h3>
              <p className={`${colors.text.muted} mb-4`}>
                {feature.description}
              </p>
              <button
                className={`${colors.button.primary} ${colors.text.white} px-6 py-2 rounded-md transition-colors`}>
                {feature.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
