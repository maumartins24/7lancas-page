import Arrecadacao from '../components/ArrecadacaoArea';
import Hero from '../components/Hero';
import InstagramGrid from '../components/InstagramGrid';
import CommunityAchievements from '../components/CommunityAchievements';
import LocationFooter from '../components/LocationFooter';
import Header from "../components/Header";
import ThemeToggleFloating from "../components/ThemeToggleFloating";
import SubHeader from "../components/SubHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-all duration-500">
      <Header />
      <SubHeader />
      <Hero />
      <Arrecadacao />
      <InstagramGrid />
      <CommunityAchievements />
      <LocationFooter />
      <ThemeToggleFloating />
    </div>
  );
}
