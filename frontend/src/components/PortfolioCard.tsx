import { useState } from 'react';
import { SkeletonLoader } from './SkeletonLoader';
import { PortfolioProject } from '../types/types';

interface Props {
    project: PortfolioProject;
    index: number;
}

export function PortfolioCard({ project, index }: Props) {
    const [expanded, setExpanded] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>({});

    return (
        <article
            className="
                bg-white dark:bg-surface-dark
                border border-gray-200 dark:border-gray-700
                rounded-2xl shadow-md
                transition-all duration-300
                flex flex-col
                hover:shadow-lg transition-all duration-300
              ">
            {/* Imagem */}
            <div className="relative h-40 w-full overflow-hidden rounded-t-2xl group">
                {!imagesLoaded[index] && (
                    <SkeletonLoader className="absolute inset-0" />
                )}

                <img
                    src={project.coverUrl || "https://www.ideianoar.com.br/wp-content/uploads/2021/05/programador-marketplace.jpg"}
                    alt={project.title}
                    onLoad={() =>
                        setImagesLoaded(prev => ({ ...prev, [index]: true }))
                    }
                    className={`w-full h-full object-cover transition-opacity duration-300 ${imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
                        }`}
                />

                {/* Overlay com links (Apenas se houver links e imagem carregada) */}
                {imagesLoaded[index] && (project.githubUrl || project.demoUrl) && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-secondary p-2 rounded-full transition-all"
                                title="Ver Código"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                            </a>
                        )}
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary hover:bg-primary/90 text-white p-2 rounded-full transition-all"
                                title="Ver Demo"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        )}
                    </div>
                )}
            </div>

            {/* Conteúdo */}
            <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-bold text-secondary dark:text-white">
                    {project.title}
                </h3>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-bold rounded-md uppercase tracking-wider"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {!expanded ? (
                    <button
                        onClick={() => setExpanded(true)}
                        className="
                                text-sm font-semibold text-primary
                                hover:underline w-fit
                              "
                    >
                        Saber mais
                    </button>
                ) : (
                    <>
                        {/* Área com rolagem */}
                        <div className="
                                max-h-40 overflow-y-auto pr-2
                                rounded-lg
                                dark:bg-surface-dark
                                bg-white">
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                {project.description}
                            </p>
                        </div>


                        <button
                            onClick={() => setExpanded(false)}
                            className="
                                text-sm font-semibold text-primary
                                hover:underline w-fit mt-1
                              "
                        >
                            Mostrar menos
                        </button>
                    </>
                )}

                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 text-center">
                    <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">Connecta CI</span>
                </div>
            </div>
        </article>
    );
}
