import * as React from 'react';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
    return (
        <main className="flex-1 flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6"
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-fade-in">Login</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-600 font-semibold">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-semibold">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-transform duration-200 transform hover:scale-105"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </motion.div>
        </main>
    );
};

export default Login;