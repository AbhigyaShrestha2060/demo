import { useContext, useEffect, useState } from 'react';
import { Colleges } from '../../components/Data/Data';
import { colors } from '../../components/Theme/Theme';
import { ThemeContext } from '../../context/ThemeContext';
import { CollegesSection } from './Components/CollegeSection';
import { ExamResourcesSection } from './Components/ExamResourceSection';
import { FeaturesSection } from './Components/FeaturedSection';
import HeroSection from './Components/HeroSection';
import { LatestNoticesSection } from './Components/LatestNoticeSection';

export default function CollegeInfoNepal() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    // Fetch colleges data from an API or local JSON file
    const fetchColleges = async () => {
      try {
        const response = Colleges;

        setColleges(response);
      } catch (error) {
        console.error('Error fetching colleges:', error);
      }
    };

    fetchColleges();
  }, []);

  return (
    <div className={`min-h-screen ${colors.background.secondary}`}>
      <HeroSection />
      <FeaturesSection />
      <LatestNoticesSection />
      <CollegesSection colleges={colleges} />
      {/* <CollegeSearchSection /> */}
      <ExamResourcesSection />
      {/* toogle button */}
      <div>
        <button
          className={`p-2 rounded ${
            darkMode ? 'bg-gray-800' : 'bg-gray-200'
          } text-white`}
          onClick={() => {
            setDarkMode(!darkMode);
          }}>
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}
