import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import NavigationSection from "./NavigationSection";
import { HomePageWrap } from "./style";

const HomePageScreen = () => {
  return (
    <HomePageWrap>
      <HeroSection />
      <NavigationSection />
      <AboutSection />
    </HomePageWrap>
  );
};

export default HomePageScreen;
