import { useState } from 'react';
import { SkeletonLoader } from './SkeletonLoader';

interface Project {
    id: string;
    title: string;
    description: string;
    coverUrl: string;
    type: string;
    status: string;
}

interface Props {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: Props) {
    const [expanded, setExpanded] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>({});

    return (
        <article
            className="
                bg-white dark:bg-surface-dark
                border border-gray-200 dark:border-gray-700
                rounded-2xl shadow-md
                transition-all duration-300
                flex flex-col">
            {/* Imagem */}
            <div className="relative h-40 w-full overflow-hidden rounded-t-2xl">
                {!imagesLoaded[index] && (
                    <SkeletonLoader className="absolute inset-0" />
                )}

                <img
                    src={project.coverUrl}
                    alt={project.title}
                    onLoad={() =>
                        setImagesLoaded(prev => ({ ...prev, [index]: true }))
                    }
                    className={`w-full h-full object-cover transition-opacity duration-300 ${imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            </div>

            {/* Conteúdo */}
            <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-bold text-secondary dark:text-white">
                    {project.title}
                </h3>

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
            </div>
        </article>
    );
}
