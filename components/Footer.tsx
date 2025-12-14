import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                            <span className="material-icons text-sm">hub</span>
                        </div>
                        <span className="font-display font-bold text-xl">connecta<span className="text-primary">CI</span></span>
                    </div>
                    <p className="text-gray-400 text-sm mb-6">
                        Conectando estudantes, transformando realidades e construindo o futuro da tecnologia na UFPB.
                    </p>
                    <div className="flex space-x-4">
                        <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#"><span className="material-icons text-sm">alternate_email</span></a>
                        <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#"><span className="material-icons text-sm">photo_camera</span></a>
                        <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#"><span className="material-icons text-sm">language</span></a>
                    </div>
                </div>
                <div>
                    <h4 className="font-display font-bold text-lg mb-4">Navegação</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link to="/" className="hover:text-primary transition-colors">Início</Link></li>
                        <li><Link to="/projects" className="hover:text-primary transition-colors">Projetos</Link></li>
                        <li><Link to="/support" className="hover:text-primary transition-colors">Apoie</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Participe</Link></li>
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
                            <span>Centro de Informática - UFPB<br/>João Pessoa - PB</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="material-icons text-primary text-sm">email</span>
                            <span>contato@connectaci.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm text-center md:text-left">© 2023 Connecta CI. Todos os direitos reservados.</p>
                <p className="text-gray-600 text-xs flex items-center gap-1">Feito com <span className="material-icons text-red-500 text-xs">favorite</span> por estudantes</p>
            </div>
        </div>
    </footer>
);