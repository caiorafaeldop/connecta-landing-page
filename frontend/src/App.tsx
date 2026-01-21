import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ProjectsEventsPage } from './components/ProjectsEventsPage';
import { SupportPage } from './components/SupportPage';
import { ContactPage } from './components/ContactPage';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App: React.FC = () => {
    return (
        <HashRouter>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectsEventsPage />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;