import { Project, Event } from '../types/types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface ApiResponse {
    projects: Project[];
    events: Event[];
    users: any[];
}

let fetchPromise: Promise<ApiResponse> | null = null;

const getData = (): Promise<ApiResponse> => {
    if (!fetchPromise) {
        fetchPromise = fetch(`${API_BASE_URL}`)
            .then(async (response) => {
                if (!response.ok) throw new Error('Failed to fetch data');
                return response.json();
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // Return empty arrays structure in case of error to prevent crashes
                return { projects: [], events: [], users: [] };
            });
    }
    return fetchPromise;
};

export const api = {
    getProjects: async (): Promise<Project[]> => {
        const data = await getData();
        return data.projects || [];
    },

    getEvents: async (): Promise<Event[]> => {
        const data = await getData();
        return data.events || [];
    },

    getMembers: async (): Promise<any[]> => {
        const data = await getData();
        return data.users || [];
    }
};
