import { Routes, Route } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import ServicePage from "./Components/ServicePage";
import ClientPage from "./pages/ClientPage";
import ContactPage from "./Components/ContactPage";
import Navbar from "./Components/Navbar";
import SocialMedia from "./Components/SocialMedia.jsx";
import UiUx from "./Components/UI-UX.jsx";
import  MobileAppDevelopmentPage  from "./Components/mobiledevelopment.jsx";
import WebDevelopmentPage from "./Components/Webdevelopment.jsx";
import AIServicePage from "./Components/AIServicePage.jsx";
import BlockchainSolutionsPage from "./Components/BlockchainSolutionsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Footer from "./Components/Footer.jsx";
import ServicesPage from "./pages/Services.jsx";
import CareerPage from "./pages/CareerPage.jsx";
import DigitalMarketingPage from "./pages/DigitalMarketingPage.jsx";
import VideographyPage from "./pages/VideographyPage.jsx";
import SEOPage from "./pages/SEOPage.jsx";
import SocialMediaPage from "./pages/SocialMediaPage.jsx";
import WebsitePage from "./pages/WebsitePage.jsx";
import PerformanceMarketingPage from "./pages/PerformanceMarketingPage.jsx";

function App() {
  return (
<div>
  <Navbar />
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/about" element={<AboutPage/>} />
      {/* <Route path="/services" element={<ServicePage />} /> */}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/clients" element={<ClientPage />} />
      <Route path="/career" element={<CareerPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path='/services/SocialMedia' element={<SocialMedia />} />
      <Route path='/services/ux-ui-design' element={<UiUx />} />
      <Route path='/services/mobile-development' element={<MobileAppDevelopmentPage />} />
      <Route path='/services/web-development' element={<WebDevelopmentPage />} />
      <Route path="/digital-marketing" element= { <DigitalMarketingPage />} />
      <Route path="/video-graphy" element={<VideographyPage />} />
       <Route path="/seo" element={<SEOPage />} />
       <Route path="/social-media" element={<SocialMediaPage />} />
    n <Route path="/performance-marketing" element={<PerformanceMarketingPage />} />
       <Route path="/website" element={<WebsitePage />} />
      <Route path='/services/ai-development' element={<AIServicePage />} />
      <Route path='/services/blockchain-solutions' element= {<BlockchainSolutionsPage/>} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
