import SiteRoutes from './components/routes';
import Header from './components/Header';
// import Footer from './components/Footer';
import ComingSoon from './pages/soon';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const isLive = import.meta.env.VITE_IS_LIVE === 'true';
function App() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return isLive ? (
    <>
      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <main className={`outerDrawer ${isMenuOpen ? `open` : `closed`}`}>
        <SiteRoutes />
      </main>
      {/* <Footer isMenuOpen={isMenuOpen} /> */}
    </>
  ) : (
    <ComingSoon />
  );
}
export default App;
