import { Project, Event } from '../types/types';

const API_BASE_URL = 'https://gamification-9x5p.onrender.com/api/v1/stats'; // Placeholder, change as needed

export const api = {
    getProjects: async (): Promise<Project[]> => {
        try {
            const response = await fetch(`${API_BASE_URL}`);
            const data = await response.json();

            if (!response.ok) throw new Error('Failed to fetch projects');
            return data.projects;
        } catch (error) {
            console.error('Error fetching projects:', error);
            return [];
        }
    },

    getEvents: async (): Promise<Event[]> => {
        try {
            const response = await fetch(`${API_BASE_URL}`);
            const data = await response.json();
            if (!response.ok) throw new Error('Failed to fetch events');
            return data.events;
        } catch (error) {
            console.error('Error fetching events:', error);
            return [];
        }
    },

    // Assuming a similar endpoint for members/users since the user mentioned "quantidade de usuário"
    getMembers: async (): Promise<any[]> => {
        try {
            const response = await fetch(`${API_BASE_URL}`);
            const data = await response.json();
            if (!response.ok) throw new Error('Failed to fetch users');
            return data.users;
        } catch (error) {
            console.error('Error fetching members:', error);
            return [];
        }
    }
};
