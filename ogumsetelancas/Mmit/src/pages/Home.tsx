import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Hero from "@/components/Hero";
import CommunityAchievements from "@/components/CommunityAchievements";
import InstagramGrid from "@/components/InstagramGrid";
import LocationFooter from "@/components/LocationFooter";
import ThemeToggleFloating from "@/components/ThemeToggleFloating";

export default function Home() {
  return (
    <>
      <Header />
      <SubHeader />

      <main className="pt-4 md:pt-6">
        <Hero />
        <CommunityAchievements />
        <InstagramGrid />
      </main>

      <LocationFooter />
      <ThemeToggleFloating />
    </>
  );
}
