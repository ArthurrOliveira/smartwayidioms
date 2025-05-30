import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import './index.css';  // Tailwind


export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}