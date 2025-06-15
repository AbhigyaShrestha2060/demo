import { useEffect, useState } from 'react';
import { Colleges } from '../../components/Data/Data';
import { colors } from '../../components/Theme/Theme';
import CollegeSearchSection from './Components/CollegeSearchSection';
import { CollegesSection } from './Components/CollegeSection';
import { ExamResourcesSection } from './Components/ExamResourceSection';
import { FeaturesSection } from './Components/FeaturedSection';
import HeroSection from './Components/HeroSection';
import { LatestNoticesSection } from './Components/LatestNoticeSection';

export default function CollegeInfoNepal() {
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
      <CollegeSearchSection />
      <ExamResourcesSection />
    </div>
  );
}
