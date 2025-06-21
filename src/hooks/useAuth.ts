import { useState, useEffect } from 'react';
import { login, register, logout as apiLogout } from '../api/auth';
import { User } from '../types';

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Проверка авторизации при загрузке
        const checkAuth = async () => {
            try {
                const storedUser = localStorage.getItem('user');
                if (storedUser) setUser(JSON.parse(storedUser));
            } catch (err) {
                console.error('Auth check failed', err);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    const loginUser = async (email: string, password: string) => {
        const userData = await login(email, password);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const registerUser = async (data: { firstName: string; email: string; password: string }) => {
        const userData = await register(data);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logoutUser = async () => {
        await apiLogout();
        setUser(null);
        localStorage.removeItem('user');
    };

    return { user, login: loginUser, register: registerUser, logout: logoutUser, loading };
};