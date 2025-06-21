import { User } from '../types';

const API_BASE_URL = 'http://localhost:8080/api'; // Замените на ваш URL бэкенда

export const login = async (email: string, password: string): Promise<User> => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error('Login failed');
    return response.json();
};

export const register = async (data: { firstName: string; email: string; password: string }): Promise<User> => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Registration failed');
    return response.json();
};

export const logout = async (): Promise<void> => {
    // Предполагается, что бэкенд обрабатывает logout
    await fetch(`${API_BASE_URL}/auth/logout`, { method: 'POST' });
};