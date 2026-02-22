import React from 'react';
import { api } from '../services/api';
import teamHierarchy from '../data/teamHierarchy.json';
import { Github, Linkedin } from "lucide-react";
import { TeamMember } from '../types/types';

const formatName = (name: string) => {
    return name
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

const hasValidProfile = (member: TeamMember) => {
    return member.role !== 'ADMIN' && member.avatarUrl && member.avatarUrl.trim() !== '';
};

export const TeamSection: React.FC = () => {
    const [members, setMembers] = React.useState<TeamMember[]>([]);

    React.useEffect(() => {
        const fetchMembers = async () => {
            const data = await api.getMembers();
            setMembers(data);
        };
        fetchMembers();
    }, []);

    const getGroupedMembers = () => {
        const validMembers = members.filter(hasValidProfile);
        const groups: Record<string, TeamMember[]> = {};

        // Inicializa os grupos
        teamHierarchy.roleDefinitions.forEach(role => {
            groups[role.id] = [];
        });

        validMembers.forEach(member => {
            const memberNameNormalized = member.name.trim().toLowerCase();

            // Correção para ignorar espaços extras no JSON
            const matchedEntry = Object.entries(teamHierarchy.memberMapping).find(
                ([key]) => key.trim().toLowerCase() === memberNameNormalized
            );

            const roleId = matchedEntry ? matchedEntry[1] : 'MEMBRO';

            const roleLabel =
                teamHierarchy.roleDefinitions.find(r => r.id === roleId)?.label || 'Membro';

            if (!groups[roleId]) {
                groups[roleId] = [];
            }

            groups[roleId].push({
                ...member,
                roleLabel
            });
        });

        return teamHierarchy.roleDefinitions
            .filter(role => groups[role.id]?.length > 0)
            .map(role => ({
                ...role,
                members: groups[role.id]
            }));
    };

    const groupedMembers = getGroupedMembers();

    // Separar diretoria e membros
    const leaders = groupedMembers.filter(group => group.id !== 'MEMBRO');
    const membersGroup = groupedMembers.find(group => group.id === 'MEMBRO');

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-4">
                        Quem Somos
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 dark:text-white mb-6">
                        Conheça nossa <span className="text-primary">Equipe</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Nossa equipe é formada por desenvolvedores apaixonados por tecnologia e inovação.
                    </p>
                </div>

                <div className="flex flex-col gap-16">

                    {/* DIRETORIA */}
                    {leaders.length > 0 && (
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white whitespace-nowrap">
                                    Diretoria
                                </h3>
                                <div className="h-px flex-1 bg-gradient-to-r from-gray-200 dark:from-white/10 to-transparent"></div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-8">
                                {leaders.flatMap(group => group.members).map(member => (
                                    <div
                                        key={member.id}
                                        className="w-full sm:w-[calc(50%-1rem)] max-w-md group relative bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                                    >
                                        <div className="h-32 bg-gradient-to-br from-primary/20 to-blue-600/20 relative"></div>

                                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                                            <div className="w-24 h-24 rounded-full border-4 border-white dark:border-surface-dark shadow-md overflow-hidden bg-gray-200">
                                                <img
                                                    src={member.avatarUrl}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-12 pb-8 px-6 text-center">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-1">
                                                {formatName(member.name)}
                                            </h3>

                                            <p className="text-primary font-semibold text-sm mb-2">
                                                {member.roleLabel}
                                            </p>

                                            {/* Social Icons */}
                                            <div className="flex justify-center gap-4 mt-3">

                                                <a
                                                    href={member?.githubUrl || ""}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-500 hover:text-black dark:hover:text-white transition-colors"
                                                >
                                                    <Github size={20} />
                                                </a>

                                                <a
                                                    href={member?.linkedinUrl || ""}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-500 hover:text-blue-600 transition-colors"
                                                >
                                                    <Linkedin size={20} />
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* MEMBROS */}
                    {membersGroup && (
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white whitespace-nowrap">
                                    Equipe
                                </h3>
                                <div className="h-px flex-1 bg-gradient-to-r from-gray-200 dark:from-white/10 to-transparent"></div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-8">
                                {membersGroup.members.map(member => (
                                    <div
                                        key={member.id}
                                        className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-sm group relative bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                                    >
                                        <div className="h-32 bg-gradient-to-br from-primary/20 to-blue-600/20 relative"></div>

                                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                                            <div className="w-24 h-24 rounded-full border-4 border-white dark:border-surface-dark shadow-md overflow-hidden bg-gray-200">
                                                <img
                                                    src={member.avatarUrl}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-12 pb-8 px-6 text-center">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-1">
                                                {formatName(member.name)}
                                            </h3>

                                            <p className="text-primary font-semibold text-sm mb-2">
                                                {member.roleLabel}
                                            </p>

                                            {/* Social Icons */}
                                            <div className="flex justify-center gap-4 mt-3">
                                                <a
                                                    href={member.githubUrl || ""}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-500 hover:text-black dark:hover:text-white transition-colors"
                                                >
                                                    <Github size={20} />
                                                </a>

                                                <a
                                                    href={member.linkedinUrl || ""}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-500 hover:text-blue-600 transition-colors"
                                                >
                                                    <Linkedin size={20} />
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
