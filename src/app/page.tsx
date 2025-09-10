import Header from "./components/header";
import Footer from "./components/footer";
import LenisProvider from "./components/lenisProvider";
import HomeSection from "./components/homeSection";
import AboutSection from "./components/aboutSection";
import ExperienceSection from "./components/experienceSection";
import ProjectSection from "./components/projectSection";
import ContactSection from "./components/contactSection";

export default function Home() {

  return (
    <div className="bg-gray-100 h-full overflow-hidden md:rounded-2xl">
      <LenisProvider>
        <div className="flex flex-col h-full max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 py-2">
          <Header />
          <main className="flex-grow flex flex-col gap-8 md:gap-12 lg:gap-16">
            <HomeSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectSection />
            <ContactSection />
          </main>
          <Footer />
        </div >
      </LenisProvider>
    </div>
  );
}
