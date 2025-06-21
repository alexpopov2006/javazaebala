import * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md p-4 flex justify-end items-center">
            <div className="flex gap-4">
                <Link
                    to="/login"
                    className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-transform duration-200 transform hover:scale-105"
                >
                    Login
                </Link>
                <Link
                    to="/register"
                    className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-transform duration-200 transform hover:scale-105"
                >
                    Register
                </Link>
            </div>
        </header>
    );
};

export default Header;