import React from 'react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    social: {
        linkedin?: string;
        github?: string;
        email?: string;
    };
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'Ana Silva',
        role: 'Tech Lead & Fullstack Developer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Apaixonada por arquitetura de software e mentoria de novos talentos. Lidera a equipe técnica da Connecta CI.',
        social: {
            linkedin: '#',
            github: '#',
            email: 'ana@example.com'
        }
    },
    {
        id: 2,
        name: 'Carlos Oliveira',
        role: 'Frontend Specialist',
        image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Especialista em React e UI/UX. Transforma designs complexos em interfaces fluidas e acessíveis.',
        social: {
            linkedin: '#',
            github: '#'
        }
    },
    {
        id: 3,
        name: 'Mariana Costa',
        role: 'Backend Developer',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Focada em escalabilidade e performance. Cuida de toda a infraestrutura e APIs do sistema.',
        social: {
            linkedin: '#',
            github: '#'
        }
    },
    {
        id: 4,
        name: 'Pedro Santos',
        role: 'Mobile Developer',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        bio: 'Desenvolvedor entusiasta de Flutter e React Native. Cria experiências mobile nativas incríveis.',
        social: {
            linkedin: '#',
            github: '#'
        }
    }
];

export const TeamSection: React.FC = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-4">
                        Quem Somos
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 dark:text-white mb-6">
                        Conheça o <span className="text-primary">Time</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Nossa equipe é formada por desenvolvedores apaixonados por tecnologia e inovação, dedicados a construir o futuro da Connecta CI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="group relative bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                            
                            {/* Card Header / Image Area */}
                            <div className="h-32 bg-gradient-to-br from-primary/20 to-blue-600/20 relative">
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors"></div>
                            </div>
                            
                            {/* Avatar */}
                            <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                                <div className="w-24 h-24 rounded-full border-4 border-white dark:border-surface-dark shadow-md overflow-hidden bg-gray-200">
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="pt-12 pb-8 px-6 text-center">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                                <p className="text-slate-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                                    {member.bio}
                                </p>
                                
                                {/* Social Links */}
                                <div className="flex justify-center gap-3">
                                    {member.social.linkedin && (
                                        <a href={member.social.linkedin} className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                        </a>
                                    )}
                                    {member.social.github && (
                                        <a href={member.social.github} className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-gray-900 hover:text-white transition-all transform hover:scale-110">
                                            <span className="sr-only">GitHub</span>
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
