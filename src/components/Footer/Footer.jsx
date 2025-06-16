import { GraduationCap } from 'lucide-react';
import { colors } from '../Theme/Theme';

export function Footer() {
  return (
    <footer
      className={`${colors.background.primary} ${colors.text.secondary} py-16 border-t ${colors.border.default}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center space-x-2 mb-4'>
              <div
                className={`w-8 h-8 ${colors.primary[600]} rounded flex items-center justify-center`}>
                <GraduationCap className={`w-5 h-5 ${colors.text.white}`} />
              </div>
              <span className={`text-xl ${colors.text.primary} font-bold`}>
                Demo
              </span>
            </div>
            <p className={`${colors.text.muted} mb-4`}>
              Your complete guide for Nepal's education system
            </p>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${colors.text.secondary}`}>
              College Info Nepal
            </h4>
            <ul className={`space-y-2 ${colors.text.muted}`}>
              <li>
                <a
                  href='#'
                  className={`${colors.text.primaryHover} transition-colors duration-200`}>
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={`${colors.text.primaryHover} transition-colors duration-200`}>
                  Colleges
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={`${colors.text.primaryHover} transition-colors duration-200`}>
                  Courses
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={`${colors.text.primaryHover} transition-colors duration-200`}>
                  Universities
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${colors.text.secondary}`}>
              For Colleges
            </h4>
            <ul className={`space-y-2 ${colors.text.muted}`}>
              <li>
                <a
                  href='#'
                  className={`${colors.text.primaryHover} transition-colors duration-200`}>
                  Ranking
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={`${colors.text.primaryHover} transition-colors duration-200`}>
                  Profile
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={`${colors.text.primaryHover} transition-colors duration-200`}>
                  Admission
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={`${colors.text.primaryHover} transition-colors duration-200`}>
                  Scholarships
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${colors.text.secondary}`}>
              Legal Information
            </h4>
            <ul className={`space-y-2 ${colors.text.muted}`}>
              <li>
                <a
                  href='#'
                  className={`${colors.text.primaryHover} transition-colors duration-200`}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={`${colors.text.primaryHover} transition-colors duration-200`}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={`${colors.text.primaryHover} transition-colors duration-200`}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`border-t ${colors.border.default} mt-12 pt-8 text-center ${colors.text.muted}`}>
          <p>
            &copy; 2025 College Info Nepal. All rights reserved. Made with ❤️ in
            Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
