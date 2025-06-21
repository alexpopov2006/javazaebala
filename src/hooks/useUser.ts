import { useState, useEffect } from 'react';
import { getUser } from '../api/user';
import { User } from '../types';

export const useUser = (userId?: number) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!userId) return;
        const fetchUser = async () => {
            setLoading(true);
            try {
                const userData = await getUser(userId);
                setUser(userData);
            } catch (err) {
                setError('Failed to fetch user');
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [userId]);

    return { user, loading, error };
};