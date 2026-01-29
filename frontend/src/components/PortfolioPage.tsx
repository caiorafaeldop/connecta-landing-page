import { useEffect, useState } from 'react';
import { PortfolioCard } from './PortfolioCard';
import portfolioData from '../data/portfolio.json';
import { PortfolioProject } from '../types/types';

export const PortfolioPage: React.FC = () => {
    const [projects, setProjects] = useState<PortfolioProject[]>([]);

    useEffect(() => {
        setProjects(portfolioData);
    }, []);

    return (
        <div className="animate-fade-in pt-20">
            {/* HERO SECTION */}
            <header className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-background-dark overflow-hidden">
                <div className="absolute inset-0 z-0 bg-network-pattern opacity-100 dark:opacity-30" />
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-wider">
                        Portfólio de Grupo
                    </span>

                    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-secondary dark:text-white mb-6">
                        Soluções que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Impulsionam</span> o seu Negócio
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        Conheça os projetos desenvolvidos pelos membros do Connecta CI. Nossa equipe combina talento acadêmico com visão de mercado para entregar resultados de excelência.
                    </p>
                </div>
            </header>

            {/* PORTFOLIO GRID */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <PortfolioCard
                            key={project.id}
                            project={project}
                            index={i}
                        />
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-network-pattern opacity-10" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-8">
                        Tem um desafio para nós?
                    </h2>
                    <p className="text-xl text-white/80 mb-10">
                        Estamos prontos para transformar suas ideias em produtos digitais de impacto. Vamos conversar sobre o seu próximo projeto.
                    </p>
                    <a
                        href="#/contact"
                        className="inline-block bg-white text-primary hover:bg-blue-50 px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl hover:scale-105"
                    >
                        Solicite um Orçamento
                    </a>
                </div>
            </section>
        </div>
    );
};
