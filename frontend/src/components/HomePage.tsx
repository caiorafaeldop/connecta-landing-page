import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { FeatureItem, StatItem } from '../types/types';
import { SkeletonLoader } from './SkeletonLoader';
import { Link } from "react-router-dom";
import image1 from '../assets/connecta_e_diretores.jpg';
import image2 from '../assets/buszer.jpg';
import image3 from '../assets/opi.jpg';
import image4 from '../assets/visita_empadinha.jpg';
import image5 from '../assets/visita_brascon.jpg';
import image6 from '../assets/equipe.jpg';

export const HomePage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    const features: FeatureItem[] = [
        { icon: "handshake", title: "Parcerias", desc: "Criar parcerias duradouras com empresas, trazendo demandas reais para dentro da universidade." },
        { icon: "apartment", title: "Infraestrutura", desc: "Contribuir ativamente para a melhoria da infraestrutura e ambiente do Centro de Informática." },
        { icon: "groups", title: "Integração", desc: "Integrar mercado, academia e sociedade através de rodas de conversa e eventos colaborativos." },
        { icon: "lightbulb", title: "Inovação", desc: "Fomentar a cultura de inovação e empreendedorismo dentro do ambiente acadêmico." }
    ];

    const [globalRanking, setGlobalRanking] = useState<Array<{
        id: string;
        name: string;
        avatarUrl?: string;
        points: number;
        level: string;
        course?: string;
    }>>([]);

    const rankingCards = globalRanking.length > 0 ? [...globalRanking, ...globalRanking] : [];


    // Image Slideshow Configuration (Optimized URLs)
    const slideshowImages = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(slideshowImages.length).fill(false));

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
        }, 4000); // Change slide every 4 seconds
        return () => clearInterval(timer);
    }, []);

    // Fetch Statistics
    const [projectCount, setProjectCount] = useState(0);
    const [memberCount, setMemberCount] = useState(0);
    const [eventCount, setEventCount] = useState(0);

    useEffect(() => {
        const fetchStats = async () => {
            const [projects, events, members] = await Promise.all([
                api.getProjects(),
                api.getEvents(),
                api.getMembers()
            ]);

            setProjectCount(projects.length);
            setEventCount(events.length);
            setMemberCount(members.length);

            const rankingResults = await Promise.allSettled(
                members.map(async (member) => {
                    const profile = await api.getPublicProfile(String(member.id));

                    return {
                        id: String(member.id),
                        name: profile.name || member.name,
                        avatarUrl: profile.avatarUrl || member.avatarUrl,
                        points: Number(profile.connectaPoints || 0),
                        level: profile.tier?.name || 'Iniciante',
                        course: profile.course
                    };
                })
            );

            const topMembers = rankingResults
                .flatMap((result) => result.status === 'fulfilled' ? [result.value] : [])
                .filter((member) => member.points > 0)
                .sort((a, b) => b.points - a.points)
                .slice(0, 8);

            setGlobalRanking(topMembers);
        };

        fetchStats();
    }, []);


    const stats: StatItem[] = [
        /*{
            val: "+15",
            lab: "Parceiros",
            link: "/parceiros"
        },*/
        {
            val: `+${memberCount > 0 ? memberCount : 40}`,
            lab: "Membros",
            link: "/team"
        },
        {
            val: `+${projectCount > 0 ? projectCount : 10}`,
            lab: "Projetos",
            link: "/projects"
        },
        {
            val: `+${eventCount > 0 ? eventCount : 5}`,
            lab: "Eventos",
            link: "/events"
        }
    ];


    // Reduce artificial loading delay for faster perceived performance
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 400);
        return () => clearTimeout(timer);
    }, []);

    // SVG Component for reusability within the file
    const GraphIcon = ({ className }: { className: string }) => (
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M25 15 L12 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M25 15 L38 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M12 38 L38 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <circle cx="12" cy="38" r="6" fill="currentColor" />
            <circle cx="38" cy="38" r="6" fill="currentColor" />
            <circle cx="25" cy="15" r="6" fill="currentColor" />
        </svg>
    );

    return (
        <div className="animate-fade-in pt-20">
            <header className="relative overflow-hidden py-24 lg:py-32 border-b border-white/5 bg-background-light dark:bg-background-dark">
                {/* Floating Graphs Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* 1. Top Left - Large, Primary */}
                    <div className="absolute top-10 -left-10 opacity-[0.03] dark:opacity-[0.05] animate-float text-primary rotate-12">
                        <GraphIcon className="w-64 h-64" />
                    </div>
                    {/* 2. Top Right - Medium, Secondary/White */}
                    <div className="absolute top-20 right-10 opacity-[0.03] dark:opacity-[0.05] animate-float-delayed text-secondary dark:text-white -rotate-12">
                        <GraphIcon className="w-40 h-40" />
                    </div>
                    {/* 3. Bottom Left - Medium, Primary */}
                    <div className="absolute bottom-10 left-20 opacity-[0.04] dark:opacity-[0.06] animate-float-slow text-primary rotate-45">
                        <GraphIcon className="w-48 h-48" />
                    </div>
                    {/* 4. Bottom Right - Large, Secondary/White */}
                    <div className="absolute -bottom-10 -right-10 opacity-[0.03] dark:opacity-[0.05] animate-float text-secondary dark:text-white rotate-[-15deg]">
                        <GraphIcon className="w-72 h-72" />
                    </div>
                    {/* 5. Center Top - Small, Primary */}
                    <div className="absolute top-5 left-1/2 transform -translate-x-1/2 opacity-[0.04] dark:opacity-[0.07] animate-float-delayed text-primary">
                        <GraphIcon className="w-24 h-24" />
                    </div>
                </div>

                {/* Light Gradients */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>

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
                            {/* Slideshow Container */}
                            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl relative group ring-1 ring-gray-900/5 dark:ring-white/10 bg-gray-100 dark:bg-gray-800">
                                {slideshowImages.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    >
                                        {!imagesLoaded[index] && (
                                            <SkeletonLoader variant="image" className="absolute inset-0 w-full h-full" />
                                        )}
                                        <img
                                            src={img}
                                            alt={`Slide ${index + 1}`}
                                            className={`w-full h-full object-cover transition-opacity duration-500 ${imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
                                                }`}
                                            loading={index === 0 ? "eager" : "lazy"}
                                            onLoad={() => {
                                                setImagesLoaded(prev => {
                                                    const next = [...prev];
                                                    next[index] = true;
                                                    return next;
                                                });
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-secondary/30 mix-blend-multiply"></div>
                                    </div>
                                ))}

                                {/* Navigation Dots */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                                    {slideshowImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-primary w-8' : 'bg-white/50 w-2 hover:bg-white'
                                                }`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
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
            {globalRanking.length > 0 && (
                <section className="py-16 bg-secondary text-white border-y border-white/5 overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-secondary via-secondary/90 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-secondary via-secondary/90 to-transparent z-10 pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-20">
                        <div className="max-w-3xl">
                            <span className="inline-flex items-center py-1 px-3 rounded-full bg-white/10 border border-white/10 text-primary font-bold text-sm mb-4 tracking-wide uppercase">
                                <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                                Ranking Connecta
                            </span>
                            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">Maiores pontuações globais da comunidade</h2>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                Ranking atualizado a partir dos perfis públicos reais dos membros, ordenado pelas maiores pontuações globais do Connecta.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="flex w-max animate-marquee gap-6 px-4 sm:px-6 lg:px-8">
                            {rankingCards.map((member, index) => (
                                <article
                                    key={`${member.id}-${index}`}
                                    className="min-w-[260px] sm:min-w-[320px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg shadow-black/10"
                                >
                                    <div className="flex items-center justify-between gap-4 mb-5">
                                        <div className="flex items-center gap-4 min-w-0">
                                            <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 bg-white/10 shrink-0">
                                                {member.avatarUrl ? (
                                                    <img src={member.avatarUrl} alt={member.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-lg font-black text-primary">
                                                        {member.name.charAt(0)}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-1">Top global</p>
                                                <h3 className="font-display font-bold text-xl text-white truncate">{member.name}</h3>
                                                <p className="text-sm text-gray-300 truncate">{member.course || 'Comunidade Connecta'}</p>
                                            </div>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-black text-lg shrink-0">
                                            #{(index % globalRanking.length) + 1}
                                        </div>
                                    </div>
                                    <div className="space-y-3 text-sm text-gray-200">
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-gray-400">Pontuação</span>
                                            <span className="font-bold text-2xl text-white">{member.points.toLocaleString('pt-BR')}</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-gray-400">Nível</span>
                                            <span className="font-semibold text-primary text-right">{member.level}</span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="py-20 bg-background-light dark:bg-background-dark relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {isLoading ? (
                        <SkeletonLoader variant="feature-card" />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((item, i) => (
                                <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/10 border border-gray-100 dark:border-gray-700/50 hover:-translate-y-2 transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                                    <div className="w-14 h-14 bg-blue-50 dark:bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                        <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white transition-colors">{item.icon}</span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <section className="py-16 bg-gradient-to-r from-secondary to-background-dark relative border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {isLoading ? (
                        <SkeletonLoader variant="stats" />
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                            {stats.map((s, i) => (
                                <Link
                                    to={s.link}
                                    key={i}
                                    className="p-4 animate-fade-in block hover:scale-105 transition-transform duration-300 cursor-pointer"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="text-4xl lg:text-5xl font-display font-black text-white mb-2 tracking-tight">{s.val}</div>
                                    <div className="text-primary font-medium uppercase text-sm tracking-wider">{s.lab}</div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};
