import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t border-gray-800 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                        <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Connections */}
                            <path d="M25 15 L12 38" stroke="white" strokeWidth="4" strokeLinecap="round" />
                            <path d="M25 15 L38 38" stroke="white" strokeWidth="4" strokeLinecap="round" />
                            <path d="M12 38 L38 38" stroke="white" strokeWidth="4" strokeLinecap="round" />

                            {/* Nodes */}
                            <circle cx="12" cy="38" r="7" fill="white" />
                            <circle cx="38" cy="38" r="7" fill="white" />
                            <circle cx="25" cy="15" r="7" className="fill-primary" />
                        </svg>
                        <span className="font-display font-bold text-xl">connecta<span className="text-primary">CI</span></span>
                    </div>
                    <p className="text-gray-400 text-sm mb-6">
                        Conectando estudantes, transformando realidades e construindo o futuro da tecnologia na UFPB.
                    </p>
                    <div className="flex space-x-4">
                        {/* Instagram SVG */}
                        <a className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center text-slate-700 dark:text-white hover:text-primary dark:hover:text-primary hover:shadow-md transition-all" href="https://www.instagram.com/connectaci/">
                            <span className="sr-only">Instagram</span>
                            <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                        </a>
                        {/* LinkedIn SVG */}
                        <a className="w-10 h-10 rounded-full bg-white dark:bg-surface-dark flex items-center justify-center text-slate-700 dark:text-white hover:text-primary dark:hover:text-primary hover:shadow-md transition-all" href="https://www.linkedin.com/company/connecta-ci/">
                            <span className="sr-only">LinkedIn</span>
                            <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="font-display font-bold text-lg mb-4">Navegação</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link to="/" className="hover:text-primary transition-colors">Início</Link></li>
                        <li><Link to="/team" className="hover:text-primary transition-colors">Equipe</Link></li>
                        <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfólio</Link></li>
                        <li><Link to="/projects" className="hover:text-primary transition-colors">Projetos</Link></li>
                        <li><Link to="/events" className="hover:text-primary transition-colors">Eventos</Link></li>
                        {/*<li><Link to="/support" className="hover:text-primary transition-colors">Apoie</Link></li>*/}
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contato</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-display font-bold text-lg mb-4">Parceiros</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a className="hover:text-primary transition-colors" href="https://www.ci.ufpb.br/" target="_blank" rel="noopener noreferrer">Centro de Informática</a></li>
                        <li><a className="hover:text-primary transition-colors" href="https://www.ufpb.br/" target="_blank" rel="noopener noreferrer">UFPB</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-display font-bold text-lg mb-4">Contato</h4>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="material-icons text-primary text-sm mt-0.5">place</span>
                            <span>Centro de Informática - UFPB<br />João Pessoa - PB</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="material-icons text-primary text-sm">email</span>
                            <span>connecta.ci.pb@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm text-center md:text-left">© 2025 Connecta CI. Todos os direitos reservados.</p>
                <p className="text-gray-600 text-xs flex items-center gap-1">Feito com <span className="material-icons text-red-500 text-xs">favorite</span> por estudantes</p>
            </div>
        </div>
    </footer>
);