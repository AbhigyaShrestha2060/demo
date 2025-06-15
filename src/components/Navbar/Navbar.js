import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { colors } from '../Theme/Theme';

// Header Component
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 ${colors.background.primary} shadow-sm border-b`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <div className='flex items-center space-x-2'>
              <div
                className={`w-8 h-8 ${colors.primary[600]} rounded flex items-center justify-center`}>
                <GraduationCap className={`w-5 h-5 ${colors.text.white}`} />
              </div>
              <span className={`text-xl font-bold ${colors.text.secondary}`}>
                LOGO
              </span>
            </div>
          </div>

          <nav className='hidden md:flex space-x-8'>
            <a
              href='#'
              className={`${colors.text.muted} ${colors.text.primaryHover} transition-colors`}>
              Courses
            </a>
            <a
              href='#'
              className={`${colors.text.muted} ${colors.text.primaryHover} transition-colors`}>
              Colleges
            </a>
            <a
              href='#'
              className={`${colors.text.muted} ${colors.text.primaryHover} transition-colors`}>
              Exams
            </a>
            <a
              href='#'
              className={`${colors.text.muted} ${colors.text.primaryHover} transition-colors`}>
              University
            </a>
            <a
              href='#'
              className={`${colors.text.muted} ${colors.text.primaryHover} transition-colors`}>
              Exam Center
            </a>
            <a
              href='#'
              className={`${colors.text.muted} ${colors.text.primaryHover} transition-colors`}>
              Information
            </a>
          </nav>

          <div className='hidden md:flex items-center space-x-4'>
            <select
              className={`border ${colors.border.default} rounded-md px-3 py-1 text-sm`}>
              <option>For College</option>
              <option>For Students</option>
            </select>
            <button
              className={`${colors.button.primary} ${colors.text.white} px-4 py-2 rounded-md transition-colors`}>
              Login
            </button>
          </div>

          <button
            className='md:hidden'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden ${colors.background.primary} border-t`}>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <a
              href='#'
              className={`block px-3 py-2 ${colors.text.muted}`}>
              Courses
            </a>
            <a
              href='#'
              className={`block px-3 py-2 ${colors.text.muted}`}>
              Colleges
            </a>
            <a
              href='#'
              className={`block px-3 py-2 ${colors.text.muted}`}>
              Exams
            </a>
            <a
              href='#'
              className={`block px-3 py-2 ${colors.text.muted}`}>
              University
            </a>
            <a
              href='#'
              className={`block px-3 py-2 ${colors.text.muted}`}>
              Exam Center
            </a>
            <a
              href='#'
              className={`block px-3 py-2 ${colors.text.muted}`}>
              Information
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
