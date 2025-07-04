import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";
import ContactSection from './components/ContactSection';
import TestimonialsSection from "./components/TestimonialsSection";
import WhatsAppButton from './components/WhatsAppButton'; //import do botão de whatsapp
import Footer from "./components/Footer";
import "./index.css"; // Tailwind

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <ContactSection />
      <TestimonialsSection />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
