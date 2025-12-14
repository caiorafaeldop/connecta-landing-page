import React from 'react';
import { FeatureItem, StatItem } from '../types';

export const HomePage: React.FC = () => {
    const features: FeatureItem[] = [
        {icon: "handshake", title: "Parcerias", desc: "Criar parcerias duradouras com empresas, trazendo demandas reais para dentro da universidade."},
        {icon: "apartment", title: "Infraestrutura", desc: "Contribuir ativamente para a melhoria da infraestrutura e ambiente do Centro de Informática."},
        {icon: "groups", title: "Integração", desc: "Integrar mercado, academia e sociedade através de rodas de conversa e eventos colaborativos."},
        {icon: "lightbulb", title: "Inovação", desc: "Fomentar a cultura de inovação e empreendedorismo dentro do ambiente acadêmico."}
    ];

    const stats: StatItem[] = [
        {val: "+15", lab: "Parceiros"}, 
        {val: "+40", lab: "Membros"}, 
        {val: "+10", lab: "Projetos"}, 
        {val: "UFPB", lab: "Base"}
    ];

    return (
        <div className="animate-fade-in pt-20">
             <header className="relative overflow-hidden network-bg py-20 lg:py-32 border-b border-white/5">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-flex items-center py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm mb-6 tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            Quem Somos
                        </span>
                        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-secondary dark:text-white mb-6">
                            A ponte entre <span className="text-primary relative inline-block">Universidade</span>, Mercado e Sociedade.
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
                            Nascemos no Centro de Informática da UFPB para transformar a jornada acadêmica e criar oportunidades reais de impacto.
                        </p>
                    </div>
                </div>
            </header>
            <section className="py-16 bg-white dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl relative group ring-1 ring-gray-900/5 dark:ring-white/10">
                                <img alt="Estudantes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4a4ux36eMjzQgGsxMfCUSbgTdtXEbnHNuReK5tPCaaqYi-p_uZzWzF9XCGwrV51cKGacgQ5cDL5gyNff_4ngqzbGh4nNuDcA66pNzPCHvcT5Bi_Egw2AWkMeyH05YCeyJQoaM8Vfb7528D1Sk2Nwwcz-Y-bH5Qx1EInjMlgzzw2dD3rpqSalC23p4ADowF6se3BDrck_kV12I-n7u8JW2csXWQJXkD_LxdHBLzR4pM6HmBezsTdG30G7Sgz6m7SejGapZyuYjuUCv"/>
                                <div className="absolute inset-0 bg-secondary/40 mix-blend-multiply"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg shadow-black/20">
                                        <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-lg -z-10 opacity-20 blur-xl"></div>
                        </div>
                        <div>
                            <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white mb-6">Nossa Missão</h2>
                            <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 mb-8">
                                <p className="mb-6 leading-relaxed">
                                    A Connecta nasceu com um objetivo claro: ser o elo que faltava. Através de projetos inovadores, eventos de alto nível e minicursos práticos, buscamos ampliar a visão dos alunos sobre o mundo da tecnologia.
                                </p>
                            </div>
                            <ul className="space-y-4">
                                {['Capacitação técnica e soft skills', 'Integração com o ecossistema local', 'Desenvolvimento de portfólio real'].map((text, i) => (
                                    <li key={i} className="flex items-start group">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-primary text-sm group-hover:text-white">check</span>
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-200 font-medium">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-background-light dark:bg-background-dark relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/10 border border-gray-100 dark:border-gray-700/50 hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-50 dark:bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white transition-colors">{item.icon}</span>
                                </div>
                                <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 bg-gradient-to-r from-secondary to-background-dark relative border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        {stats.map((s, i) => (
                            <div key={i} className="p-4">
                                <div className="text-4xl lg:text-5xl font-display font-black text-white mb-2 tracking-tight">{s.val}</div>
                                <div className="text-primary font-medium uppercase text-sm tracking-wider">{s.lab}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};