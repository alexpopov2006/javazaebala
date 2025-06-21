import { useState, useEffect } from 'react';
import { getMatches } from '../api/matches';
import { User } from '../types';

export const useMatches = () => {
    const [matches, setMatches] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMatches = async () => {
            setLoading(true);
            try {
                const matchesData = await getMatches();
                setMatches(matchesData);
            } catch (err) {
                setError('Failed to fetch matches');
            } finally {
                setLoading(false);
            }
        };
        fetchMatches();
    }, []);

    return { matches, loading, error };
};