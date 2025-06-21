import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Profile from './components/Profile';
import Matches from './components/Matches';
import Login from './components/Login';
import Register from './components/Register';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Header />
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 100 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <MainContent />
                                    </motion.div>
                                }
                            />
                            <Route
                                path="/profile"
                                element={
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 100 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Profile />
                                    </motion.div>
                                }
                            />
                            <Route
                                path="/matches"
                                element={
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 100 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Matches />
                                    </motion.div>
                                }
                            />
                            <Route
                                path="/login"
                                element={
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 100 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Login />
                                    </motion.div>
                                }
                            />
                            <Route
                                path="/register"
                                element={
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 100 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Register />
                                    </motion.div>
                                }
                            />
                        </Routes>
                    </AnimatePresence>
                </div>
            </div>
        </BrowserRouter>
    );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
export default App;