import {
  Award,
  BookOpen,
  ChevronDown,
  Globe,
  GraduationCap,
  Info,
  MapPin,
  Menu,
  Search,
  Users,
  X,
} from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ className = '' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showGetStartedDropdown, setShowGetStartedDropdown] = useState(false);

  const navigationItems = [
    {
      name: 'Courses',
      icon: BookOpen,
      href: '#',
      submenu: [
        { name: 'Engineering', href: '#' },
        { name: 'Medical', href: '#' },
        { name: 'Management', href: '#' },
        { name: 'Arts & Science', href: '#' },
      ],
    },
    {
      name: 'Colleges',
      icon: Users,
      href: '#',
      submenu: [
        { name: 'Top Colleges', href: '#' },
        { name: 'College Rankings', href: '#' },
        { name: 'College Reviews', href: '#' },
        { name: 'Admission Process', href: '#' },
      ],
    },
    {
      name: 'Exams',
      icon: Award,
      href: '#',
      submenu: [
        { name: 'JEE Main', href: '#' },
        { name: 'NEET', href: '#' },
        { name: 'CAT', href: '#' },
        { name: 'GATE', href: '#' },
      ],
    },
    {
      name: 'University',
      icon: Globe,
      href: '#',
      submenu: [
        { name: 'Central Universities', href: '#' },
        { name: 'State Universities', href: '#' },
        { name: 'Private Universities', href: '#' },
        { name: 'Deemed Universities', href: '#' },
      ],
    },
    { name: 'Exam Center', icon: MapPin, href: '#' },
    { name: 'Information', icon: Info, href: '#' },
  ];

  const handleDropdownToggle = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/60 shadow-sm ${className}`}>
        {/* Main Navigation */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo Section */}
            <div className='flex items-center'>
              <div className='flex items-center space-x-3'>
                <div className='relative'>
                  <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200'>
                    <GraduationCap className='w-6 h-6 text-white' />
                  </div>
                  <div className='absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white'></div>
                </div>
                <div className='hidden sm:block'>
                  <h1 className='text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent'>
                    Asian Education
                  </h1>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex items-center space-x-1'>
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className='relative group'>
                  <button
                    onClick={() =>
                      item.submenu && handleDropdownToggle(item.name)
                    }
                    className='flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-gray-50'>
                    <item.icon className='w-4 h-4' />
                    <span className='font-medium'>{item.name}</span>
                    {item.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.submenu && activeDropdown === item.name && (
                    <div className='absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50'>
                      <div className='px-4 py-2 border-b border-gray-100'>
                        <p className='text-sm font-semibold text-gray-900'>
                          {item.name}
                        </p>
                      </div>
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className='flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-150'>
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions & Get Started Button */}
            <div className='flex items-center space-x-4'>
              <div className='relative'>
                {/* Get Started Button */}
                <button
                  onClick={() =>
                    setShowGetStartedDropdown(!showGetStartedDropdown)
                  }
                  className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl'>
                  Get Started
                </button>

                {/* Dropdown under the button */}
                {showGetStartedDropdown && (
                  <div className='absolute right-0 mt-2 w-[320px] bg-white rounded-xl shadow-xl border border-gray-200 z-50 p-4 flex flex-wrap gap-4'>
                    {/* Login Card - flex-grow 3 */}
                    <a
                      href='/college-login'
                      className='bg-blue-100 rounded-xl p-4 flex flex-col items-center hover:bg-blue-200 transition-colors duration-200 flex-[3_1_0%]'>
                      <img
                        src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                        alt='Login Illustration'
                        className='w-16 h-16 mb-2'
                      />
                      <h2 className='text-lg font-semibold text-gray-800'>
                        Login
                      </h2>
                      <p className='text-sm text-gray-600'>as College</p>
                    </a>

                    {/* Signup Card - flex-grow 2 */}
                    <a
                      href='/college-register'
                      className='bg-blue-500 rounded-xl p-4 flex flex-col items-center hover:bg-blue-600 transition-colors duration-200 flex-[2_1_0%]'>
                      <img
                        src='https://cdn-icons-png.flaticon.com/512/1053/1053244.png'
                        alt='Signup Illustration'
                        className='w-16 h-16 mb-2'
                      />
                      <h2 className='text-lg font-semibold text-white'>
                        Signup
                      </h2>
                      <p className='text-sm text-white/90'>as College</p>
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className='lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200'>
                {mobileMenuOpen ? (
                  <X className='w-6 h-6' />
                ) : (
                  <Menu className='w-6 h-6' />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='lg:hidden bg-white border-t border-gray-200'>
            <div className='px-4 py-6 space-y-4'>
              {/* Mobile Search */}
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                <input
                  type='text'
                  placeholder='Search courses, colleges...'
                  className='w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>

              {/* Mobile Get Started Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg'>
                Get Started
              </button>

              {/* Mobile Navigation */}
              <nav className='space-y-2'>
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        item.submenu &&
                        handleDropdownToggle(`mobile-${item.name}`)
                      }
                      className='flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200'>
                      <div className='flex items-center space-x-3'>
                        <item.icon className='w-5 h-5' />
                        <span className='font-medium'>{item.name}</span>
                      </div>
                      {item.submenu && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === `mobile-${item.name}`
                              ? 'rotate-180'
                              : ''
                          }`}
                        />
                      )}
                    </button>

                    {/* Mobile Submenu */}
                    {item.submenu &&
                      activeDropdown === `mobile-${item.name}` && (
                        <div className='ml-8 mt-2 space-y-1'>
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className='block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-150'>
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
