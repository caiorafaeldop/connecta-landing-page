import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
//import { SupportPage } from './components/SupportPage';
import { ContactPage } from './components/ContactPage';
import { TeamPage } from './components/TeamPage';
import { PortfolioPage } from './components/PortfolioPage';
import { EventsPage } from './components/EventsPage';
import { CVPage } from './components/CVPage';

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
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    {/*<Route path="/support" element={<SupportPage />} />*/}
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/cv/:userId" element={<CVPage />} />
                </Routes>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;