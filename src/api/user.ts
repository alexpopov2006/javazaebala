import { User } from '../types';

const API_BASE_URL = 'http://localhost:8080/api'; // Замените на ваш URL бэкенда

export const getUser = async (id: number): Promise<User> => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
};