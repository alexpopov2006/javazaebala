import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
    return (
        <main className="flex-1 p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6"
            >
                <div className="flex items-center gap-4 mb-6">
                    <svg className="w-16 h-16 text-pink-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <h2 className="text-3xl font-bold text-gray-800">Your Profile</h2>
                </div>
                <div className="space-y-4">
                    <div>
            <label className="block text-gray-600 font-semibold">Name</label>
            <p className="text-lg text-gray-800">Alex Smith</p>
        </div>
        <div>
            <label className="block text-gray-600 font-semibold">Bio</label>
            <p className="text-lg text-gray-800">Loves hiking, coffee, and good conversations.</p>
        </div>
        <div>
            <label className="block text-gray-600 font-semibold">Location</label>
            <p className="text-lg text-gray-800">Moscow, Russia</p>
        </div>
        <div className="flex gap-4">
            <Link
                to="/edit-profile"
                className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-transform duration-200 transform hover:scale-105"
            >
                Edit Profile
            </Link>
        </div>
                </div>
            </motion.div>
        </main>
    );
};

export default Profile;