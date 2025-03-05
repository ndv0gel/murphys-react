import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import TopMenu from '../components/TopMenu';
import CenterContent from '../components/CenterContent';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="d-flex flex-column min-vh-100">
            <TopMenu />
            <CenterContent />
            <Footer />
        </main>
    );
}
