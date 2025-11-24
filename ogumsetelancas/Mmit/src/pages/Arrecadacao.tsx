import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import FundraisingSection from "@/components/ArrecadacaoArea";
import LocationFooter from "@/components/LocationFooter";
import ThemeToggleFloating from "@/components/ThemeToggleFloating";

export default function ArrecadacaoPage() {
  return (
    <>
      <Header />
      <SubHeader />

      <main
        className="
          pt-6 md:pt-8
          bg-gradient-to-b
          from-blue-50 via-white to-blue-50
          dark:from-black dark:via-zinc-950 dark:to-black
          min-h-screen
        "
      >
        <FundraisingSection />
        <LocationFooter />
      </main>

      <ThemeToggleFloating />
    </>
  );
}
