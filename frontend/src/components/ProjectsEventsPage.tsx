import React, { useState, useEffect } from 'react';
import { Project, ProjectType, Event } from '../types/types';
import { api } from '../services/api';
import { ProjectCard } from './ProjectCard';

export const ProjectsEventsPage: React.FC = () => {
    const [filter, setFilter] = useState<ProjectType | 'Todos'>('Todos');
    const [projects, setProjects] = useState<Project[]>([]);
    const [events, setEvents] = useState<Event[]>([]);

    // Busca de dados
    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiProjects = await api.getProjects();
                const apiEvents = await api.getEvents();

                const mappedProjects: Project[] = apiProjects
                    .map((p: any) => ({
                        id: p.id,
                        title: p.title,
                        description: p.description,
                        status: p.status,
                        type: p.type as ProjectType,
                        coverUrl: p.coverUrl,
                    }))
                    // Remove projetos do tipo empresa
                    .filter(project => project.type !== 'Empresa');

                setProjects(mappedProjects);
                setEvents(apiEvents);
            } catch (error) {
                console.error('Failed to fetch data', error);
            }
        };

        fetchData();
    }, []);

    // Filtros de projetos
    const projectFilters: { label: string; value: ProjectType | 'Todos' }[] = [
        { label: 'Todos', value: 'Todos' },
        { label: 'Interno', value: 'Interno' },
        { label: 'Extensão', value: 'Extensao' },
        { label: 'Pesquisa', value: 'Pesquisa' },
        { label: 'Outro', value: 'Outro' },
    ];

    const filteredProjects =
        filter === 'Todos'
            ? projects
            : projects.filter(project => project.type === filter);

    // Futuros eventos
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate >= today;
    });

    return (
        <div className="animate-fade-in pt-20">
            {/* HEADER */}
            <header className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-background-dark overflow-hidden">
                <div className="absolute inset-0 z-0 bg-network-pattern opacity-100 dark:opacity-30" />
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-wider">
                        Inovação e Conexão
                    </span>

                    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-secondary dark:text-white mb-6">
                        Projetos que Transformam,
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                            Eventos que Conectam
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        Descubra como o Connecta CI está diminuindo a distância entre a universidade, o mercado e a sociedade.
                    </p>
                </div>
            </header>

            {/* PROJETOS */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h3 className="text-3xl font-bold text-secondary dark:text-white">
                            Projetos em Destaque
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Iniciativas lideradas pelos nossos estudantes.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {projectFilters.length > 0 ? (
                            projectFilters.map(({ label, value }) => (
                                <button
                                    key={value}
                                    onClick={() => setFilter(value)}
                                    className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${filter === value
                                        ? 'bg-primary text-white shadow-md scale-105'
                                        : 'bg-white dark:bg-surface-dark text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary'
                                        }`}
                                >
                                    {label}
                                </button>
                            ))
                        ) : (
                            <p className="text-gray-500 dark:text-gray-400">
                                Nenhum evento programado no momento.
                            </p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, i) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={i}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 space-y-4">
                            <div className="text-5xl">📂</div>
                            <p className="text-gray-500 dark:text-gray-400 text-lg">
                                Nenhum projeto encontrado para este filtro.
                            </p>
                        </div>
                    )}


                </div>
            </section>

            {/* EVENTOS */}
            <section className="py-16 bg-blue-50 dark:bg-secondary/40 border-y border-gray-200 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-secondary dark:text-white">
                            Eventos
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Não perca as próximas datas importantes.
                        </p>
                    </div>

                    {upcomingEvents.length > 0 ? (
                        <div className="space-y-4">
                            {upcomingEvents.map(event => {
                                const date = new Date(event.date);
                                return (
                                    <div
                                        key={event.id}
                                        className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm flex gap-4 border-l-4 border-primary"
                                    >
                                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-lg flex flex-col items-center justify-center">
                                            <span className="text-xs uppercase font-bold">
                                                {date.toLocaleString('pt-BR', { month: 'short' })}
                                            </span>
                                            <span className="text-2xl font-black">
                                                {date.getUTCDate()}
                                            </span>
                                        </div>

                                        <div>
                                            <h5 className="font-bold text-secondary dark:text-white">
                                                {event.title}
                                            </h5>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-10 space-y-6">
                            <div className="text-5xl">⏳</div>
                            <p className="text-gray-500 dark:text-gray-400">
                                Nenhum evento programado no momento.
                            </p>

                            <a
                                href="https://www.instagram.com/connectaci/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold shadow-md hover:bg-primary/90"
                            >
                                📅 Acompanhar novidades
                            </a>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};
