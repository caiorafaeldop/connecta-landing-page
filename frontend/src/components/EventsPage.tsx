import React, { useState, useEffect } from 'react';
import { Event } from '../types/types';
import { api } from '../services/api';

export const EventsPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const apiEvents = await api.getEvents();
                setEvents(apiEvents);
            } catch (error) {
                console.error('Failed to fetch data', error);
            }
        };

        fetchEvents();
    }, []);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate >= today;
    });

    return (
        <div className="animate-fade-in pt-20">

            {/* HEADER ORIGINAL */}
            <header className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-surface-light dark:bg-background-dark overflow-hidden">
                <div className="absolute inset-0 z-0 bg-network-pattern opacity-100 dark:opacity-30" />
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-wider">
                        Conexão
                    </span>

                    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-secondary dark:text-white mb-6">
                        Eventos que Conectam
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        Não perca as próximas datas importantes.
                    </p>
                </div>
            </header>

            {/* SEÇÃO DE EVENTOS ORIGINAL */}
            <section className="py-16 bg-blue-50 dark:bg-secondary/40 border-y border-gray-200 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-secondary dark:text-white">
                            Próximos Eventos
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Fique por dentro das novidades.
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
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};
