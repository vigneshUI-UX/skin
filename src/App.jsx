import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import AOS from "aos";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import NewArrivals from "./components/NewArrivals";
import VideoShowcase from "./components/VideoShowcase";
import BrandStory from "./components/BrandStory";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import FAQ from "./components/FAQ";


import Footer from "./components/Footer";

// Homepage
function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <NewArrivals />
      <VideoShowcase />
      <BrandStory />
      <Testimonials />
      <Newsletter />
      <FAQ />
    </>
  );
}

// Page routing
function PageContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />


          <Route
            path="*"
            element={<Home />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

// Main App
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 70,
    });
  }, []);

  return (
    <BrowserRouter>
      <PageContent />
    </BrowserRouter>
  );
}