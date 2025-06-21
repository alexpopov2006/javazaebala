import * as React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    text: string;
    to: string;
}

const Button: React.FC<ButtonProps> = ({ text, to }) => {
    return (
        <Link
            to={to}
            className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-transform duration-200 transform hover:scale-105"
        >
            {text}
        </Link>
    );
};

export default Button;