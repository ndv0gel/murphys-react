'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import TopMenu from './components/TopMenu';
import MiddleSection from './components/MiddleSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <TopMenu />
      <MiddleSection />
      <Footer />
    </main>
  );
}