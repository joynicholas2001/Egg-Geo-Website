import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
      <Navbar />
      <main id="main-content" className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
