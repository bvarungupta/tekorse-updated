import "./App.css";
import NavBar from "./components/NavBar";
import styled, { ThemeProvider } from "styled-components";
import AboutUs from "./screens/AboutUs";
import HeroSection from "./screens/HeroSection";
import WhyChooseUs from "./screens/WhyChooseUs";
import { ParallaxProvider } from "react-scroll-parallax";
import Services from "./screens/Services";
import Contact from "./screens/Contact";
import SubNavbar from "./components/SubNavbar";

function App() {
  return (
    <ParallaxProvider>
      <SubNavbar />
      <NavBar />
      <HeroSection />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Contact />
    </ParallaxProvider>
  );
}

export default App;
