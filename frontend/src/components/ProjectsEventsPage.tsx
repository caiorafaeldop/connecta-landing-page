import React, { useState, useEffect } from 'react';
import { Project, Event } from '../types/types';
import { SkeletonLoader } from './SkeletonLoader';
import { api } from '../services/api';

export const ProjectsEventsPage: React.FC = () => {
    const [filter, setFilter] = useState('Todos');
    const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>({});
    const [projects, setProjects] = useState<Project[]>([]);
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiProjects = await api.getProjects();
                const apiEvents = await api.getEvents();

                // Map API projects to UI Project type
                const mappedProjects: Project[] = apiProjects.map(p => ({
                    id: p.id,
                    title: p.title,
                    description: p.description,
                    status: p.status,
                    coverUrl: p.coverUrl,
                }));

                // If API returns empty, keep some defaults or just show empty.
                // For now, let's append default/static ones or just use API if available.
                // Assuming we want to REPLACE with API data.
                if (mappedProjects.length > 0) {
                    setProjects(mappedProjects);
                }

                setEvents(apiEvents);

            } catch (error) {
                console.error("Failed to fetch data", error);
            }
        };

        fetchData();
    }, []);

    const filteredProjects = filter === 'Todos' ? projects : projects.filter(p => p.status === filter);

    return (
        <div className="animate-fade-in pt-20">
            <header className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-background-dark overflow-hidden">
                <div className="absolute inset-0 z-0 bg-network-pattern opacity-100 dark:opacity-30"></div>
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 dark:bg-primary/20 text-primary font-bold text-sm mb-6 uppercase tracking-wider border border-primary/20">Inovação e Conexão</span>
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-secondary dark:text-white mb-6 leading-tight">
                        Projetos que Transformam, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Eventos que Conectam</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                        Descubra como o Connecta CI está diminuindo a distância entre a universidade, o mercado e a sociedade através de iniciativas práticas e colaborativas.
                    </p>
                </div>
            </header>


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
                                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${filter === cat
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
                                {!imagesLoaded[i] && (
                                    <SkeletonLoader variant="image" className="absolute inset-0 w-full h-full" />
                                )}
                                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    alt={item.title}
                                    className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ${imagesLoaded[i] ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    src={item.coverUrl}
                                    onLoad={() => setImagesLoaded(prev => ({ ...prev, [i]: true }))}
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className={`${item.status === 'active' ? 'bg-blue-600' : 'bg-gray-600'} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>{item.status}</span>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h4 className="text-xl font-display font-bold text-secondary dark:text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">{item.description}</p>
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
                        <h3 className="text-2xl font-display font-bold text-secondary dark:text-white">Eventos</h3>
                        <p className="text-gray-500 dark:text-gray-400">Não perca as próximas datas importantes.</p>
                    </div>
                    <div className="space-y-4">
                        {events.length > 0 ? (
                            events.map(event => {
                                const dateObj = new Date(event.date);
                                const month = dateObj.toLocaleString('pt-BR', {
                                    month: 'short',
                                    timeZone: 'UTC',
                                });
                                const day = dateObj.getUTCDate();

                                return (
                                    <div key={event.id} className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm flex gap-4 border-l-4 border-primary">
                                        <div className="bg-primary/10 text-primary w-16 h-16 rounded-lg flex flex-col items-center justify-center">
                                            <span className="text-xs font-bold uppercase">{month}</span>
                                            <span className="text-2xl font-black">{day}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-bold text-secondary dark:text-white text-lg">
                                                {event.title}
                                            </h5>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p className="text-gray-500 dark:text-gray-400">
                                Nenhum evento marcado.
                            </p>
                        )}

                    </div>
                </div>
            </section>
        </div>
    );
};