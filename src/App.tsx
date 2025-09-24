import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NuqsAdapter } from 'nuqs/adapters/react-router/v6';
import Navbar from './components/layout/Navbar';
import Ticker from './components/ui/Ticker';
import Footer from './components/layout/Footer';
import Toaster from './components/ui/sonner';
import AboutPage from './pages/about';
import DesignGuide from './pages/DesignGuide';

// Sitemap Page
import SitemapPage from './pages/sitemap';
import Ideas from './pages/Ideas';
import JoinUs from './pages/JoinUs';
import TermsOfService from './pages/TermsOfService';
import ScrollToTop from './components/ui/ScrollToTop';
import Discord from './pages/Discord';
import NotFound from './pages/NotFound';
import AccessibilityPage from './pages/accessibility';

function App() {
  return (
    <Router>
      <NuqsAdapter>
        <div className='min-h-screen flex flex-col'>
          <Navbar />
          <Ticker />
          <Toaster position='top-right' closeButton />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<DesignGuide />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/accessibility' element={<AccessibilityPage />} />
            <Route path='/ideas' element={<Ideas />} />
            <Route path='/join-us' element={<JoinUs />} />{' '}
            <Route path='/terms-of-service' element={<TermsOfService />} />
            <Route path='/sitemap' element={<SitemapPage />} />
            <Route path='/discord' Component={Discord} />
            {/*Not Found/404 Page */}
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </NuqsAdapter>
    </Router>
  );
}

export default App;
