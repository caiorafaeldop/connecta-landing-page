import React, { useState } from 'react';
import { Project } from '../types';

export const ProjectsEventsPage: React.FC = () => {
    const [filter, setFilter] = useState('Todos');

    const projects: Project[] = [
        { title: "Conexão Tech 2025", tag: "Eventos", color: "bg-blue-600", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDszC6l5BaV19NZhiJICzCaMMzjJv0Afy97MF-Q6DVQYzHIGelrDIE-6it2YBjmPYTlLHOZ4P4FN9VWBgI_I4xPhhpVLD53DXxSt0IEO58FPoEK5axlEkvSz3qUMXMkh_BvFBexcKHlBGBQHU2bFal62Zg7GvmodhyfRAPV6tJ8AFoG9w_bg7owV-O-x2w6QsgWofRHWPmbTupmAyGVrWpc4Ss796TFY5ptHF20PZElkfr_0O-0XnqfIWqQsz4BZ4iDY9Ysxx7eyoRs", desc: "Uma série de palestras com ex-alunos que hoje atuam em grandes empresas." },
        { title: "Python para Dados", tag: "Bootcamps", color: "bg-emerald-500", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQd7Zcs2jQTjb6OUJOCb-hOXv7LD01lAuSzSs3URjU32GPnE-Jkwb9KvINhrwHW2tJ0LIpr1XRnwYOwnbBoSiT3JCbQMls3LzP5AG4z26ttxVkUS3F3RgT35s1ZM4XpfD3h9piFaBye4WaPkeilvwektfovSDj-5UkjrktnAR2DoVsIs-RiXVdxnbcSvgqrLucYGNwq5Xh84wpVzG71g0K4tTZhVM-2GOC9mqzQO-bhBFKlsy0KGho7Q--o_ocFakhlF8n1Tb9M4x0", desc: "Capacitação técnica intensiva focada em bibliotecas como Pandas e NumPy." },
        { title: "Inclusão Digital", tag: "Extensão", color: "bg-purple-500", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLjbp6hTUx4PZ-QCQGsCFT-iiHbKKJAWvmXSpJuNRVjWdioljFHbHRgZ1NdBDtAiSPOMgWNsCz3KvF-sGm_g7o3sIBcBoyDQSaNvsePBT2Wi_RdbFSBqRpG78-P14pl_oX3VRN3Xisq5ZiXm93m_avtUjtm1WGnxM-WWaPqUwg5bxkUaDMfYCYQvRQibOKtR2XozrBznGrJN1X22JTswCdzKT4qJ61R7nrkQG73DX_QfArhYHVfnpOEFwbeiYJcyQdGRtmP_Y2T9tJ", desc: "Projeto contínuo onde alunos ensinam informática básica para idosos." }
    ];

    const filteredProjects = filter === 'Todos' ? projects : projects.filter(p => p.tag === filter);

    return (
        <div className="animate-fade-in pt-20">
             <header className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-background-dark overflow-hidden">
                <div className="absolute inset-0 z-0 bg-network-pattern opacity-100 dark:opacity-30"></div>
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 dark:bg-primary/20 text-primary font-bold text-sm mb-6 uppercase tracking-wider border border-primary/20">Inovação e Conexão</span>
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-secondary dark:text-white mb-6 leading-tight">
                        Projetos que Transformam, <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Eventos que Conectam</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                        Descubra como o Connecta CI está diminuindo a distância entre a universidade, o mercado e a sociedade através de iniciativas práticas e colaborativas.
                    </p>
                </div>
            </header>
            
            {/* Processo Seletivo Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-200 dark:border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 px-4 py-1.5 rounded-full border border-primary/20">
                            <span className="flex h-2.5 w-2.5 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            <span className="text-primary font-bold text-sm tracking-wide uppercase">Aberto</span>
                        </div>
                        <div>
                            <h2 className="font-display font-black text-4xl sm:text-5xl leading-tight text-slate-900 dark:text-white">
                                Processo <br/>
                                <span className="text-primary bg-clip-text">Seletivo</span>
                            </h2>
                            <div className="mt-4 inline-block border-2 border-slate-900 dark:border-white px-6 py-2 rounded-lg">
                                <span className="font-display font-bold text-xl tracking-widest text-slate-900 dark:text-white uppercase">Trainee 2025.2</span>
                            </div>
                        </div>
                        <div className="space-y-6">
                            {[
                                {icon: "school", title: "Capacitação Técnica", desc: "Através de Bootcamps intensivos e minicursos práticos."},
                                {icon: "folder_special", title: "Desenvolvimento de Portfólio", desc: "Construa projetos reais para mostrar ao mercado."},
                                {icon: "groups", title: "Networking Exclusivo", desc: "Rodas de conversa com grandes nomes do mercado."}
                            ].map((item, i) => (
                                <div key={i} className="flex items-start space-x-4 group p-3 -ml-3 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                                    <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-sm">{item.icon}</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed font-medium">
                                        <span className="text-slate-900 dark:text-white font-bold block mb-1">{item.title}</span>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="pt-4">
                            <button 
                                onClick={() => alert("🎉 Redirecionando para inscrição...")}
                                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:bg-sky-400 transform hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2 group">
                                Inscrever-se Agora
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative hidden lg:block">
                        <div className="relative z-10 bg-white dark:bg-card-dark rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="flex justify-between items-start mb-8">
                                <div className="bg-gray-100 dark:bg-background-dark p-3 rounded-2xl">
                                    <span className="material-symbols-outlined text-4xl text-primary">hub</span>
                                </div>
                                <div className="text-right">
                                    <h3 className="font-display font-bold text-xl text-slate-800 dark:text-white">Connecta CI</h3>
                                    <p className="text-sm text-slate-500 dark:text-gray-400">Universidade Federal da Paraíba</p>
                                </div>
                            </div>
                            <div className="relative h-64 w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-background-dark dark:to-[#0a2742] rounded-2xl mb-8 overflow-hidden flex items-center justify-center group">
                                <img alt="Students collaborating" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaNyfbMaJqtr_VJ3Mkwa0fyJqh1EPpqou6EcW1CRKC9EUYgvqyL2FsLQdMR1383z2aem_NfqtgPtf9dPnfTwIxoUMazwVRrTGh0EwXDC0gS6VaG-0WZJvoWsN2K_WTye_G3742ik4htddcKPvP4dmdSdMLhrg2jnZSNLB5Oe0huaDCr7R33hKElV4myouUsHn-LrKlBEdT6iqqu3SjEs5ebDbiGk1c2hCrqkBAtedA8q7YvE5BdE3shYeiijRqVzuv0gg8pkj1fzKR"/>
                                <div className="absolute inset-0 bg-secondary/40 mix-blend-multiply"></div>
                                <div className="relative z-10 text-center px-4">
                                    <span className="block text-white font-display font-black text-3xl mb-2 drop-shadow-lg">SEJA TRAINEE</span>
                                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">Inscrições Abertas</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary rounded-full opacity-20 blur-xl"></div>
                        <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h3 className="text-3xl font-display font-bold text-secondary dark:text-white mb-2">Projetos em Destaque</h3>
                        <p className="text-gray-600 dark:text-gray-400">Iniciativas lideradas pelos nossos estudantes.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['Todos', 'Extensão', 'Eventos', 'Bootcamps'].map((cat) => (
                            <button 
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${
                                    filter === cat 
                                    ? "bg-primary text-white shadow-md transform scale-105" 
                                    : "bg-white dark:bg-surface-dark text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((item, i) => (
                        <article key={i} className="bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group flex flex-col h-full animate-fade-in-up">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src={item.img} />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className={`${item.color} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>{item.tag}</span>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h4 className="text-xl font-display font-bold text-secondary dark:text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">{item.desc}</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                                    <button onClick={() => alert(`Detalhes sobre: ${item.title}`)} className="text-primary font-bold text-sm hover:underline">Saiba mais</button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <section className="py-16 bg-blue-50 dark:bg-secondary/40 border-y border-gray-200 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-display font-bold text-secondary dark:text-white">Agenda Acadêmica</h3>
                        <p className="text-gray-500 dark:text-gray-400">Não perca as próximas datas importantes.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 border-l-4 border-primary">
                            <div className="bg-primary/10 text-primary w-16 h-16 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                                <span className="text-xs font-bold uppercase">Nov</span>
                                <span className="text-2xl font-black">14</span>
                            </div>
                            <div className="flex-1">
                                <h5 className="font-bold text-secondary dark:text-white text-lg">Encerramento Inscrições Trainee</h5>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Processo Seletivo 2025.2</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 border-l-4 border-purple-500">
                            <div className="bg-purple-500/10 text-purple-500 w-16 h-16 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                                <span className="text-xs font-bold uppercase">Nov</span>
                                <span className="text-2xl font-black">20</span>
                            </div>
                            <div className="flex-1">
                                <h5 className="font-bold text-secondary dark:text-white text-lg">Workshop de ReactJS</h5>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Laboratório 3 - Centro de Informática</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};