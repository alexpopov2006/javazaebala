import * as React from 'react';
import { Link } from 'react-router-dom';

const MainContent: React.FC = () => {
    return (
        <main className="flex-1 flex items-center justify-center p-6">
            <div className="text-center">
                <svg className="w-32 h-32 mx-auto mb-6 text-pink-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">Welcome to LoveConnect</h2>
                <p className="text-lg text-gray-600 mb-6">Find your perfect match today!</p>
                <div className="flex justify-center gap-4">
                    <Link
                        to="/register"
                        className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-transform duration-200 transform hover:scale-105"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default MainContent;