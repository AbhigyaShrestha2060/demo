import { colors } from '../../components/Theme/Theme';
import CollegesSection from './Components/CollegeSection';
import { ExamResourcesSection } from './Components/ExamResourceSection';
import { FeaturesSection } from './Components/FeaturedSection';
import HeroSection from './Components/HeroSection';
import { LatestNoticesSection } from './Components/LatestNoticeSection';

export default function CollegeInfoNepal() {
  return (
    <div className={`min-h-screen ${colors.background.secondary}`}>
      <HeroSection />
      <FeaturesSection />
      <LatestNoticesSection />
      <CollegesSection />
      <ExamResourcesSection />
    </div>
  );
}
