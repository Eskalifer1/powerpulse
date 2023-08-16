import HeroSection from "./HeroSection";
import NavigationSection from "./NavigationSection";
import { HomePageWrap } from "./style";

const HomePageScreen = () => {
  return (
    <HomePageWrap>
      <HeroSection />
      <NavigationSection />
    </HomePageWrap>
  );
};

export default HomePageScreen;
