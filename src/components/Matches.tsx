import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Matches: React.FC = () => {
    const users = [
        { name: 'Maria', age: 28, location: 'Saint Petersburg', image: 'https://via.placeholder.com/150' },
        { name: 'Dmitry', age: 32, location: 'Moscow', image: 'https://via.placeholder.com/150' },
        { name: 'Anna', age: 25, location: 'Kazan', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <main className="flex-1 p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-fade-in">Find Your Match</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {users.map((user, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-200"
                    >
                        <img src={user.image} alt={user.name} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
                        <p className="text-gray-600">{user.age} • {user.location}</p>
                        <Link
                            to={`/profile/${user.name}`}
                            className="inline-block bg-pink-500 text-white px-4 py-2 mt-4 rounded-full hover:bg-pink-600 transition-transform duration-200 transform hover:scale-105"
                        >
                            Connect
                        </Link>
                    </motion.div>
                ))}
            </div>
        </main>
    );
};

export default Matches;