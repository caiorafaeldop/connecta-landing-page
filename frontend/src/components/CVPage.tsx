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
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20 pb-20 print:pt-0 print:pb-0 print:bg-white cv-page">
            
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
                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden mb-8 print:shadow-none print:rounded-none print:border-b-2 print:border-gray-200">
                    <div className="h-40 sm:h-48 bg-gradient-to-r from-primary via-blue-500 to-sky-400 relative print:h-8 print:bg-none print:border-b print:border-gray-200">
                        {/* Gamification Badge - Absolute top right */}
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-2xl flex items-center gap-2 print:hidden cursor-default shadow-lg hover:bg-white/30 transition-colors">
                            <Trophy className="text-yellow-300" size={20} />
                            <div className="text-white">
                                <span className="block text-xs uppercase tracking-wider font-semibold opacity-90">Nível Connecta</span>
                                <span className="block font-black text-lg leading-tight">{profile.tier?.name || 'Iniciante'}</span>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 sm:px-10 pb-8 sm:pb-12 relative">
                        <div className="flex flex-row gap-4 sm:gap-6 items-end -mt-16 sm:-mt-24 mb-6">
                            {/* Avatar */}
                            <div className="w-24 h-24 sm:w-40 sm:h-40 rounded-2xl sm:rounded-3xl border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0 print:border-gray-200 print:w-32 print:h-32">
                                {profile.avatarUrl ? (
                                    <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <Code size={48} />
                                    </div>
                                )}
                            </div>

                            {/* Main Info */}
                            <div className="flex-1 min-w-0 pb-1 sm:pb-0 print:pt-4">
                                <h1 className="text-2xl sm:text-5xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2 leading-tight break-words">
                                    {profile.name}
                                </h1>
                                {profile.course && (
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-primary font-semibold sm:font-bold text-sm sm:text-lg mb-2 sm:mb-3">
                                        <BookOpen size={16} className="shrink-0" />
                                        <span className="leading-snug">{profile.course}</span>
                                    </div>
                                )}
                                
                                {/* Level / Points Badge */}
                                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs sm:text-sm font-bold print:bg-transparent print:px-0">
                                    <Star size={14} className="text-yellow-500 sm:hidden shrink-0" />
                                    <Star size={16} className="text-yellow-500 hidden sm:inline shrink-0" />
                                    <span>{profile.connectaPoints || 0} Connecta Points</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact & Social Links */}
                        <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100 dark:border-slate-700 print:border-gray-200 print:gap-2 print:flex-col sm:print:flex-row">
                            {profile.contactEmail && (
                                <a href={`mailto:${profile.contactEmail}`} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors bg-slate-50 dark:bg-slate-900/50 px-4 py-2 rounded-xl print:bg-transparent print:px-0 print:py-1">
                                    <Mail size={18} />
                                    <span className="font-medium print:block">{profile.contactEmail}</span>
                                </a>
                            )}
                            {profile.linkedinUrl && (
                                <a href={profile.linkedinUrl.startsWith('http') ? profile.linkedinUrl : `https://${profile.linkedinUrl}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-sky-600 transition-colors bg-slate-50 dark:bg-slate-900/50 px-4 py-2 rounded-xl print:bg-transparent print:px-0 print:py-1">
                                    <Linkedin size={18} />
                                    {/* Normal view: 'LinkedIn', Print view: full URL */}
                                    <span className="font-medium print:hidden">LinkedIn</span>
                                    <span className="font-medium hidden print:inline">{profile.linkedinUrl}</span>
                                </a>
                            )}
                            {profile.githubUrl && (
                                <a href={profile.githubUrl.startsWith('http') ? profile.githubUrl : `https://${profile.githubUrl}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors bg-slate-50 dark:bg-slate-900/50 px-4 py-2 rounded-xl print:bg-transparent print:px-0 print:py-1">
                                    <Github size={18} />
                                    <span className="font-medium print:hidden">GitHub</span>
                                    <span className="font-medium hidden print:inline">{profile.githubUrl}</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 print:block">
                    
                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-1 space-y-8 print:w-full">
                        
                        {/* Skills Box */}
                        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 print:shadow-none print:border-none print:p-0 print:mb-8">
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <Terminal size={20} className="text-primary" />
                                Habilidades
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {profile.skills && profile.skills.length > 0 ? (
                                    profile.skills.map((skill: string, idx: number) => (
                                        <span key={idx} className="bg-blue-50 dark:bg-slate-700 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-lg text-sm font-semibold print:border print:border-gray-300 print:bg-transparent print:text-black">
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
                    <div className="lg:col-span-2 space-y-8 print:w-full">
                        
                        {/* Bio Box */}
                        {profile.bio && (
                            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 print:shadow-none print:border-none print:p-0 print:mb-8">
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">Sobre mim</h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                    {profile.bio}
                                </p>
                            </div>
                        )}

                        {/* Projects Box */}
                        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 print:shadow-none print:border-none print:p-0">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center justify-between">
                                Projetos de Destaque
                                <span className="text-sm font-bold bg-primary/10 text-primary px-3 py-1 rounded-full print:hidden">
                                    Connecta CI
                                </span>
                            </h3>
                            
                            <div className="space-y-6">
                                {(() => {
                                    if (!profile.memberOfProjects || profile.memberOfProjects.length === 0) {
                                        return <p className="text-slate-500 italic">Nenhum projeto registrado no sistema.</p>;
                                    }
                                    const filtered = profile.memberOfProjects.filter((mp: any) =>
                                        mp.tasks && mp.tasks.some((task: any) => task.status === 'DONE')
                                    );
                                    if (filtered.length === 0) {
                                        return <p className="text-slate-500 italic">Nenhum projeto com tarefas concluídas.</p>;
                                    }
                                    return filtered.map((mp: any) => (
                                        <div key={mp.project.id} className="group border border-slate-100 dark:border-slate-700 rounded-2xl p-5 hover:border-primary/30 transition-colors print:border-gray-300 print:break-inside-avoid">
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
                                            
                                            {/* Progress Bar - Simplified for print */}
                                            <div className="space-y-1.5">
                                                <div className="flex justify-between text-xs font-bold text-slate-500">
                                                    <span>Progresso Geral</span>
                                                    <span>{mp.project.progress || 0}%</span>
                                                </div>
                                                <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-1.5 print:bg-gray-200">
                                                    <div 
                                                        className="bg-primary h-1.5 rounded-full print:bg-gray-600" 
                                                        style={{ width: `${mp.project.progress || 0}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    ));
                                })()}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};
