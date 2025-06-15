import {
  Award,
  Bell,
  BookOpen,
  ChevronDown,
  Globe,
  GraduationCap,
  Info,
  LogOut,
  MapPin,
  Menu,
  Search,
  Settings,
  User,
  Users,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Navbar({ className = '' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const searchRef = useRef(null);
  const userMenuRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const mockNotifications = [
    {
      id: 1,
      title: 'New exam dates announced',
      time: '2 min ago',
      unread: true,
    },
    {
      id: 2,
      title: 'College application deadline',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      title: 'Scholarship opportunities available',
      time: '3 hours ago',
      unread: false,
    },
  ];

  const handleDropdownToggle = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
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
                  Demo University
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

          {/* Search, Actions & User Section */}
          <div className='flex items-center space-x-4'>
            {/* Search */}
            <div
              ref={searchRef}
              className='relative hidden md:block'>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                <input
                  type='text'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchOpen(true)}
                  placeholder='Search courses, colleges...'
                  className='w-64 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                />
              </div>

              {/* Search Dropdown */}
              {searchOpen && (
                <div className='absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50'>
                  <div className='px-4 py-2 text-sm text-gray-500'>
                    Recent searches
                  </div>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>
                    Engineering Colleges
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>
                    JEE Main 2024
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>
                    Medical Entrance
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Search */}
            <button className='md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200'>
              <Search className='w-5 h-5' />
            </button>

            {/* Notifications */}
            <div
              ref={notificationRef}
              className='relative'>
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className='relative p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200'>
                <Bell className='w-5 h-5' />
                <span className='absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>
                  2
                </span>
              </button>

              {/* Notifications Dropdown */}
              {notificationsOpen && (
                <div className='absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50'>
                  <div className='px-4 py-3 border-b border-gray-100'>
                    <h3 className='text-sm font-semibold text-gray-900'>
                      Notifications
                    </h3>
                  </div>
                  <div className='max-h-64 overflow-y-auto'>
                    {mockNotifications.map((notification) => (
                      <div
                        key={notification.id}
                        className='px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-b-0'>
                        <div className='flex items-start space-x-3'>
                          <div
                            className={`w-2 h-2 rounded-full mt-2 ${
                              notification.unread
                                ? 'bg-blue-500'
                                : 'bg-gray-300'
                            }`}></div>
                          <div className='flex-1'>
                            <p className='text-sm font-medium text-gray-900'>
                              {notification.title}
                            </p>
                            <p className='text-xs text-gray-500 mt-1'>
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='px-4 py-2 border-t border-gray-100'>
                    <button className='text-sm text-blue-600 hover:text-blue-700 font-medium'>
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Account Type Selector */}
            <select className='hidden sm:block border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'>
              <option>For Students</option>
              <option>For Colleges</option>
              <option>For Counselors</option>
            </select>

            {/* User Menu */}
            <div
              ref={userMenuRef}
              className='relative'>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className='flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200'>
                <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center'>
                  <User className='w-4 h-4 text-white' />
                </div>
                <div className='hidden sm:block text-left'>
                  <p className='text-sm font-medium text-gray-900'>John Doe</p>
                  <p className='text-xs text-gray-500'>Student</p>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    userMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* User Dropdown */}
              {userMenuOpen && (
                <div className='absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50'>
                  <div className='px-4 py-3 border-b border-gray-100'>
                    <p className='text-sm font-semibold text-gray-900'>
                      John Doe
                    </p>
                    <p className='text-xs text-gray-500'>
                      john.doe@example.com
                    </p>
                  </div>
                  <a
                    href='#'
                    className='flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>
                    <User className='w-4 h-4' />
                    <span>My Profile</span>
                  </a>
                  <a
                    href='#'
                    className='flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>
                    <Settings className='w-4 h-4' />
                    <span>Settings</span>
                  </a>
                  <a
                    href='#'
                    className='flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>
                    <BookOpen className='w-4 h-4' />
                    <span>My Courses</span>
                  </a>
                  <div className='border-t border-gray-100 mt-2 pt-2'>
                    <button className='flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left'>
                      <LogOut className='w-4 h-4' />
                      <span>Sign Out</span>
                    </button>
                  </div>
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
                  {item.submenu && activeDropdown === `mobile-${item.name}` && (
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

            {/* Mobile Account Selector */}
            <select className='w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'>
              <option>For Students</option>
              <option>For Colleges</option>
              <option>For Counselors</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}
