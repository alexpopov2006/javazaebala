import { User } from '../types';

const API_BASE_URL = 'http://localhost:8080/api'; // Замените на ваш URL бэкенда

export const getMatches = async (): Promise<User[]> => {
    const response = await fetch(`${API_BASE_URL}/matches`, {
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Failed to fetch matches');
    return response.json();
};