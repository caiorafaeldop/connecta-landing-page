import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../services/api';
import { Printer, Mail, Linkedin, Github, Trophy, Star, BookOpen, Code, Terminal, Zap, ExternalLink } from 'lucide-react';

export const CVPage: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if (userId) {
                    const data = await api.getPublicProfile(userId);
                    setProfile(data);
                }
            } catch (err: any) {
                setError(err.message || 'Erro ao carregar o portfólio');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [userId]);

    useEffect(() => {
        let isDarkBeforePrint = false;

        const handleBeforePrint = () => {
            isDarkBeforePrint = document.documentElement.classList.contains('dark');
            if (isDarkBeforePrint) {
                document.documentElement.classList.remove('dark');
            }
        };

        const handleAfterPrint = () => {
            if (isDarkBeforePrint) {
                document.documentElement.classList.add('dark');
            }
        };

        window.addEventListener('beforeprint', handleBeforePrint);
        window.addEventListener('afterprint', handleAfterPrint);

        return () => {
            window.removeEventListener('beforeprint', handleBeforePrint);
            window.removeEventListener('afterprint', handleAfterPrint);
        };
    }, []);

    const handlePrint = () => {
        window.print();
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-surface-light dark:bg-background-dark pt-20">
                <div className="animate-spin text-primary">
                    <Zap size={48} />
                </div>
            </div>
        );
    }

    if (error || !profile) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-surface-light dark:bg-background-dark pt-20">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-500 mb-2">Ops!</h2>
                    <p className="text-gray-600 dark:text-gray-400">{error || 'Perfil não encontrado.'}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20 pb-20 print:p-0 print:bg-white cv-page relative">
            <style>{`
                @media print {
                    @page {
                        margin: 1.5cm;
                        size: A4;
                    }
                    body {
                        -webkit-print-color-adjust: exact;
                        font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
                    }
                    h1, h2, h3, h4 {
                        font-weight: 700 !important;
                    }
                    p, span, a {
                        font-weight: 400;
                    }
                }
            `}</style>

            {/* Print Decorative Line & Logo */}
            <div className="hidden print:block w-full h-2 bg-gradient-to-r from-primary via-blue-500 to-sky-400 absolute top-0 left-0 right-0"></div>
            <div className="hidden print:flex flex-col items-center justify-center mb-10 pt-8 pb-6 border-b border-gray-200 w-full relative">
                <div className="flex items-center gap-3">
                    <svg width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 15 L12 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-slate-900" />
                        <path d="M25 15 L38 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-slate-900" />
                        <path d="M12 38 L38 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-slate-900" />
                        <circle cx="12" cy="38" r="7" className="fill-slate-900" />
                        <circle cx="38" cy="38" r="7" className="fill-slate-900" />
                        <circle cx="25" cy="15" r="7" className="fill-primary" />
                    </svg>
                    <span className="font-display font-bold text-2xl text-slate-900 tracking-tight">connecta<span className="text-primary">CI</span></span>
                </div>
            </div>
            
            {/* FAB for Print - Hidden when printing */}
            <div className="fixed bottom-8 right-8 z-50 print:hidden">
                <button 
                    onClick={handlePrint}
                    className="flex flex-col items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-2xl hover:scale-110 hover:bg-blue-600 transition-all duration-300 group"
                    title="Imprimir Currículo"
                >
                    <Printer size={24} className="group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 print:px-0">
                
                {/* HERO SECTION */}
                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden mb-8 print:shadow-none print:rounded-none print:border-b-2 print:border-gray-200 print:mb-10 print:overflow-visible">
                    <div className="h-40 sm:h-48 bg-gradient-to-r from-primary via-blue-500 to-sky-400 relative print:hidden">
                    </div>

                    <div className="px-6 sm:px-10 pb-8 sm:pb-12 relative print:px-0 print:pb-8">
                        <div className="flex flex-col sm:flex-row gap-6 sm:items-end -mt-20 sm:-mt-24 mb-6 print:mt-0 print:items-center">
                            {/* Avatar */}
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0 print:border-gray-200 print:w-32 print:h-32 print:shadow-none">
                                {profile.avatarUrl ? (
                                    <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <Code size={48} />
                                    </div>
                                )}
                            </div>

                            {/* Main Info */}
                            <div className="flex-1 pt-4 sm:pt-0 print:pt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                                <div className="space-y-3">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight break-words">
                                        {profile.name}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-3">
                                        {profile.course && (
                                            <div className="flex items-center gap-2 text-primary font-bold text-base sm:text-lg">
                                                <BookOpen size={20} />
                                                <span>{profile.course}</span>
                                            </div>
                                        )}
                                        {/* Points Badge for Print / Mobile context if needed */}
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-bold print:bg-transparent print:px-0">
                                            <Star size={16} className="text-yellow-500" />
                                            <span>{profile.connectaPoints || 0} Connecta Points</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Gamification Badge */}
                                <div className="bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-2xl flex flex-col sm:max-w-[280px] print:hidden shadow-sm hover:shadow-md transition-all self-start sm:self-auto w-full sm:w-auto mt-2 sm:mt-0">
                                    <div className="flex items-center gap-3 w-full mb-2">
                                        <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-xl shrink-0">
                                            <Trophy className="text-yellow-600 dark:text-yellow-400" size={24} />
                                        </div>
                                        <div>
                                            <span className="block text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">Nível Connecta</span>
                                            <span className="block font-black text-lg text-slate-900 dark:text-white leading-tight">{profile.tier?.name || 'Iniciante'}</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                                        Este membro é proativo e está no nível <strong className="text-slate-900 dark:text-white">{profile.tier?.name || 'Iniciante'}</strong> dentro do Connecta CI.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact & Social Links */}
                        <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 dark:border-slate-700 print:border-gray-200 print:pt-6">
                            {profile.contactEmail && (
                                <a href={`mailto:${profile.contactEmail}`} className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-primary transition-colors bg-slate-50 dark:bg-slate-900/50 px-4 py-2 rounded-xl print:bg-transparent print:px-0 print:py-1 group">
                                    <Mail size={18} className="shrink-0" />
                                    <span className="font-medium group-hover:underline break-all print:font-normal print:text-sm">{profile.contactEmail}</span>
                                </a>
                            )}
                            {profile.linkedinUrl && (
                                <a href={profile.linkedinUrl.startsWith('http') ? profile.linkedinUrl : `https://${profile.linkedinUrl}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-sky-600 transition-colors bg-slate-50 dark:bg-slate-900/50 px-4 py-2 rounded-xl print:bg-transparent print:px-0 print:py-1 group">
                                    <Linkedin size={18} className="shrink-0" />
                                    <span className="font-medium group-hover:underline break-all print:font-normal print:text-sm">{profile.linkedinUrl}</span>
                                </a>
                            )}
                            {profile.githubUrl && (
                                <a href={profile.githubUrl.startsWith('http') ? profile.githubUrl : `https://${profile.githubUrl}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-slate-900 dark:hover:text-white transition-colors bg-slate-50 dark:bg-slate-900/50 px-4 py-2 rounded-xl print:bg-transparent print:px-0 print:py-1 group">
                                    <Github size={18} className="shrink-0" />
                                    <span className="font-medium group-hover:underline break-all print:font-normal print:text-sm">{profile.githubUrl}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 print:block">
                    
                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-1 space-y-8 print:w-full print:space-y-10">
                        
                        {/* Skills Box */}
                        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 print:shadow-none print:border-none print:p-0 print:mb-10 print:break-inside-avoid">
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2 print:text-xl print:mb-5 print:border-b print:border-gray-200 print:pb-2">
                                <Terminal size={20} className="text-primary print:hidden" />
                                Habilidades
                            </h3>
                            <div className="flex flex-wrap gap-2 print:gap-3">
                                {profile.skills && profile.skills.length > 0 ? (
                                    profile.skills.map((skill: string, idx: number) => (
                                        <span key={idx} className="bg-blue-50 dark:bg-slate-700 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-lg text-sm font-semibold print:border print:border-gray-300 print:bg-transparent print:text-slate-800 print:font-medium">
                                            {skill}
                                        </span>
                                    ))
                                ) : (
                                    <span className="text-sm text-slate-500 italic">Não especificado</span>
                                )}
                            </div>
                        </div>


                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-2 space-y-8 print:w-full print:space-y-10">
                        
                        {/* Bio Box */}
                        {profile.bio && (
                            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 print:shadow-none print:border-none print:p-0 print:mb-10 print:break-inside-avoid">
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 print:border-b print:border-gray-200 print:pb-2 print:mb-5">Sobre mim</h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium print:font-normal print:text-slate-700 print:text-justify">
                                    {profile.bio}
                                </p>
                            </div>
                        )}

                        {/* Projects Box */}
                        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 print:shadow-none print:border-none print:p-0 print:break-inside-avoid">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center justify-between print:border-b print:border-gray-200 print:pb-2 print:mb-6">
                                Projetos de Destaque
                                <span className="text-sm font-bold bg-primary/10 text-primary px-3 py-1 rounded-full print:hidden">
                                    Connecta CI
                                </span>
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:block print:space-y-8">
                                {profile.memberOfProjects && profile.memberOfProjects.filter((mp: any) => mp.project.tasks && mp.project.tasks.length > 0).length > 0 ? (
                                    profile.memberOfProjects.filter((mp: any) => mp.project.tasks && mp.project.tasks.length > 0).map((mp: any) => (
                                        <div key={mp.project.id} className="group flex flex-col border border-slate-100 dark:border-slate-700 rounded-2xl p-5 hover:border-primary/30 transition-colors print:border-gray-300 print:break-inside-avoid">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors flex items-center gap-2">
                                                    {mp.project.title}
                                                    {mp.project.category && (
                                                        <span className="text-[10px] uppercase font-black bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 px-2 py-1 rounded print:border print:border-gray-200">
                                                            {mp.project.category}
                                                        </span>
                                                    )}
                                                </h4>
                                                <ExternalLink size={16} className="text-slate-400 opacity-0 group-hover:opacity-100 print:hidden" />
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                                                {mp.project.description || 'Participação ativa no desenvolvimento deste projeto.'}
                                            </p>
                                            
                                            {/* Completed Tasks */}
                                            {mp.project.tasks && mp.project.tasks.length > 0 && (
                                                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
                                                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Entregas do Membro</h5>
                                                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc list-inside">
                                                        {mp.project.tasks.slice(0, 10).map((task: any) => (
                                                            <li key={task.id} className="truncate" title={task.title}>{task.title || 'Tarefa Concluída'}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-slate-500 italic">Nenhum projeto registrado no sistema.</p>
                                )}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};
