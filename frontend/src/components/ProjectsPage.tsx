import React, { useState, useEffect } from 'react';
import { Project, ProjectType } from '../types/types';
import { api } from '../services/api';
import { ProjectCard } from './ProjectCard';

export const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState<ProjectType | 'Todos'>('Todos');
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const apiProjects = await api.getProjects();

                const mappedProjects: Project[] = apiProjects
                    .map((p: any) => ({
                        id: p.id,
                        title: p.title,
                        description: p.description,
                        status: p.status,
                        type: p.type as ProjectType,
                        coverUrl: p.coverUrl,
                    }))
                    .filter(project => project.type !== 'Empresa');

                setProjects(mappedProjects);
            } catch (error) {
                console.error('Failed to fetch data', error);
            }
        };

        fetchProjects();
    }, []);

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

    return (
        <div className="animate-fade-in pt-20">

            {/* HEADER ORIGINAL */}
            <header className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-background-dark overflow-hidden">
                <div className="absolute inset-0 z-0 bg-network-pattern opacity-100 dark:opacity-30" />
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-wider">
                        Inovação
                    </span>

                    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-secondary dark:text-white mb-6">
                        Projetos que Transformam
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        Iniciativas lideradas pelos nossos estudantes.
                    </p>
                </div>
            </header>

            {/* SEÇÃO DE PROJETOS ORIGINAL */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h3 className="text-3xl font-bold text-secondary dark:text-white">
                            Projetos em Destaque
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Conheça nossas iniciativas.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {projectFilters.map(({ label, value }) => (
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
                        ))}
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
                                Nenhum projeto encontrado.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};
