import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Theme Context
const ThemeContext = React.createContext();

// Icons
const SunIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
  </svg>
);

const TerminalIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

// Theme Switcher Button
const ThemeToggle = ({ theme, toggleTheme }) => (
  <motion.button
    onClick={toggleTheme}
    className={`fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-xl border-2 transition-all duration-300 ${
      theme === 'dark'
        ? 'bg-black/60 border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]'
        : 'bg-white/90 border-purple-500/50 text-purple-600 hover:border-purple-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]'
    }`}
    whileHover={{ scale: 1.1, rotate: 180 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 400 }}
  >
    <AnimatePresence mode="wait">
      {theme === 'dark' ? (
        <motion.div
          key="sun"
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <SunIcon />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          initial={{ rotate: 180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <MoonIcon />
        </motion.div>
      )}
    </AnimatePresence>
  </motion.button>
);

// Animated Background
const AnimatedBackground = ({ theme }) => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    {theme === 'dark' ? (
      <>
        {/* Neon Orbs for Dark Mode */}
        <motion.div
          className="absolute top-0 -left-20 w-96 h-96 rounded-full blur-3xl opacity-30 bg-cyan-500"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-25 bg-purple-500"
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full blur-3xl opacity-20 bg-pink-500"
          animate={{
            x: [0, 75, 0],
            y: [0, -75, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-15 bg-orange-500"
          animate={{
            x: [-50, 50, -50],
            y: [50, -50, 50],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </>
    ) : (
      <>
        {/* Light Mode Orbs */}
        <motion.div
          className="absolute top-0 -left-4 w-72 h-72 rounded-full blur-3xl opacity-30 bg-purple-400"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 bg-pink-400"
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </>
    )}
  </div>
);

// Navigation
const Navigation = ({ currentPage, setCurrentPage, theme }) => {
  const pages = [
    { id: 'home', label: 'Inicio', icon: RocketIcon },
    { id: 'about', label: 'Sobre mí', icon: UserIcon },
    { id: 'projects', label: 'Proyectos', icon: BriefcaseIcon },
    { id: 'skills', label: 'Habilidades', icon: TerminalIcon },
    { id: 'contact', label: 'Contacto', icon: MailIcon },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-2xl border-b-2 transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-black/60 border-cyan-400/20'
          : 'bg-white/80 border-purple-500/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="text-2xl font-black tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            <span className={theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'}>
              angello
            </span>
            <span className="text-pink-500">.dev</span>
          </motion.div>

          <div className="hidden md:flex gap-3">
            {pages.map((page) => (
              <motion.button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-xl border-2 ${
                  currentPage === page.id
                    ? theme === 'dark'
                      ? 'bg-cyan-500/20 text-cyan-400 border-cyan-400/80 shadow-[0_0_20px_rgba(34,211,238,0.5)]'
                      : 'bg-purple-500/20 text-purple-600 border-purple-500/80 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : theme === 'dark'
                    ? 'text-gray-300 border-gray-700/50 hover:border-cyan-400/50 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                    : 'text-gray-600 border-purple-500/20 hover:border-purple-500/60 hover:text-purple-600 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                }`}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <page.icon />
                <span>{page.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex gap-2">
            {pages.map((page) => (
              <motion.button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`p-2.5 rounded-lg backdrop-blur-xl border-2 transition-all ${
                  currentPage === page.id
                    ? theme === 'dark'
                      ? 'bg-cyan-500/20 border-cyan-400/60 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                      : 'bg-purple-500/20 border-purple-500/60 text-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                    : theme === 'dark'
                    ? 'text-gray-400 border-gray-700/30 hover:border-cyan-400/40 hover:text-cyan-400'
                    : 'text-gray-600 border-purple-500/20 hover:border-purple-500/50 hover:text-purple-600'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <page.icon />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// GlassCard Component
const GlassCard = ({ children, theme, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={`backdrop-blur-xl rounded-2xl border-2 shadow-2xl transition-all duration-300 ${
      theme === 'dark'
        ? 'bg-black/40 border-cyan-400/20 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]'
        : 'bg-white/60 border-purple-500/30 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]'
    } ${className}`}
    whileHover={{ y: -5, scale: 1.02 }}
  >
    {children}
  </motion.div>
);

// Home Page
const HomePage = ({ theme }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen flex items-center justify-center px-4 pt-20"
  >
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="mb-8"
      >
        <div className={`inline-block p-4 rounded-full backdrop-blur-xl border-2 ${
          theme === 'dark'
            ? 'bg-cyan-500/10 border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.4)] text-cyan-400'
            : 'bg-purple-500/10 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.4)] text-purple-600'
        }`}>
          <CodeIcon />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`text-6xl md:text-8xl font-black mb-6 ${
          theme === 'dark'
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500'
            : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500'
        }`}
        style={{
          textShadow: theme === 'dark' ? '0 0 80px rgba(34,211,238,0.5)' : 'none'
        }}
      >
        Backend Developer
      </motion.h1>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className={`text-xl md:text-2xl mb-12 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}
      >
        Arquitecto de sistemas escalables con Node.js, Express y PostgreSQL
      </motion.p>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4 justify-center flex-wrap"
      >
        <motion.button
          onClick={() => {
            setCurrentPage('projects');
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
          }}
          className={`px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 backdrop-blur-xl border border-white/20 group ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.7)]'
              : 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)]'
          }`}
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span className="flex items-center gap-2" initial={{ x: 0 }} whileHover={{ x: 5 }}>
            <BriefcaseIcon />
            Ver Proyectos
          </motion.span>
        </motion.button>
        <motion.button
          onClick={() => {
            setCurrentPage('contact');
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
          }}
          className={`px-8 py-4 rounded-xl font-bold backdrop-blur-xl border-2 transition-all duration-300 ${
            theme === 'dark'
              ? 'border-cyan-400/80 text-cyan-400 hover:bg-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]'
              : 'border-purple-500/80 text-purple-600 hover:bg-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]'
          }`}
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span className="flex items-center gap-2" initial={{ x: 0 }} whileHover={{ x: 5 }}>
            <MailIcon />
            Contactar
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
      >
        {[
          { label: 'Proyectos', value: '3+' },
          { label: 'Especialidad', value: 'Backend' },
          { label: 'Capacidad', value: 'Full-stack' },
        ].map((stat, idx) => (
          <GlassCard key={idx} theme={theme} delay={1 + idx * 0.1} className="p-6">
            <div className={`text-4xl font-black mb-2 ${
              theme === 'dark'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500'
            }`}>
              {stat.value}
            </div>
            <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              {stat.label}
            </div>
          </GlassCard>
        ))}
      </motion.div>
    </div>
  </motion.div>
);

// About Page
const CommunicationIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 12H8v-2h12v2m0-3H8V9h12v2m0-3H8V6h12v2" />
  </svg>
);

const ThinkingIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82M12 3L1 9l11 6 9-4.91V19h2V9L12 3" />
  </svg>
);

const BugIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-1.82 1.82C13.2 4.64 12.61 4.5 12 4.5s-1.2.14-1.77.32L8.41 3 7 4.41l1.63 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1s.04.67.09 1H4v2h2.81c.45.78 1.07 1.45 1.82 1.96L7 19.59 8.41 21l1.82-1.82c.57.18 1.16.32 1.77.32s1.2-.14 1.77-.32L15.59 21 17 19.59l-1.63-1.63c.75-.51 1.37-1.18 1.82-1.96H20v-2h-2.09c.05-.33.09-.66.09-1s-.04-.67-.09-1H20V8" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5" />
  </svg>
);

const BriefcaseSmallIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" />
  </svg>
);

const WrenchIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.6C.4 7 .9 10 2.9 12c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4" />
  </svg>
);

const GraduationIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82M12 3L1 9l11 6 9-4.91V19h2V9L12 3" />
  </svg>
);

const AboutPage = ({ theme }) => {
  const softSkills = [
    { 
      title: "Comunicación asertiva",
      desc: "Explico decisiones técnicas con claridad",
      icon: CommunicationIcon,
      color: 'cyan'
    },
    { 
      title: "Pensamiento crítico",
      desc: "Analizo problemas profundamente",
      icon: ThinkingIcon,
      color: 'purple'
    },
    { 
      title: "Responsabilidad técnica",
      desc: "Cada línea de código tiene propósito",
      icon: CheckIcon,
      color: 'pink'
    },
    { 
      title: "Aprendizaje continuo",
      desc: "Investigación activa de nuevas tecnologías",
      icon: BookIcon,
      color: 'orange'
    },
    { 
      title: "Debugging metódico",
      desc: "Sigo pasos lógicos para resolver problemas",
      icon: BugIcon,
      color: 'cyan'
    },
    { 
      title: "Empatía técnica",
      desc: "Código que otros puedan entender y mantener",
      icon: HeartIcon,
      color: 'pink'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen px-4 pt-32 pb-20"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`text-5xl md:text-7xl font-black mb-16 text-center ${
            theme === 'dark'
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500'
          }`}
          style={{
            textShadow: theme === 'dark' ? '0 0 60px rgba(34,211,238,0.4)' : 'none'
          }}
        >
          Angel Valentin Flores Eduardo
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <GlassCard theme={theme} delay={0.2} className="p-8 group">
            <motion.div 
              className={`w-14 h-14 rounded-2xl mb-4 flex items-center justify-center backdrop-blur-xl border-2 transition-all ${
                theme === 'dark'
                  ? 'bg-cyan-500/30 border-cyan-400/70 text-cyan-300 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] group-hover:border-cyan-300'
                  : 'bg-cyan-500/30 border-cyan-500/70 text-cyan-700 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]'
              }`}
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <TargetIcon />
            </motion.div>
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
            }`}>
              Mi Especialidad
            </h3>
            <p className={`leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Construyo la "capa invisible" que hace que las aplicaciones funcionen. APIs robustas, 
              autenticación segura, bases de datos bien diseñadas y lógica de negocio confiable.
            </p>
          </GlassCard>

          <GlassCard theme={theme} delay={0.3} className="p-8 group">
            <motion.div 
              className={`w-14 h-14 rounded-2xl mb-4 flex items-center justify-center backdrop-blur-xl border-2 transition-all ${
                theme === 'dark'
                  ? 'bg-pink-500/30 border-pink-400/70 text-pink-300 group-hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] group-hover:border-pink-300'
                  : 'bg-pink-500/30 border-pink-500/70 text-pink-700 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]'
              }`}
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <BriefcaseSmallIcon />
            </motion.div>
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-pink-400' : 'text-pink-600'
            }`}>
              Experiencia
            </h3>
            <p className={`leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              E-commerce con pagos, sistemas en tiempo real, aplicaciones sin conexión. 
              Cada proyecto me enseñó sobre escalabilidad, seguridad y experiencia del usuario.
            </p>
          </GlassCard>

          <GlassCard theme={theme} delay={0.4} className="p-8 group">
            <motion.div 
              className={`w-14 h-14 rounded-2xl mb-4 flex items-center justify-center backdrop-blur-xl border-2 transition-all ${
                theme === 'dark'
                  ? 'bg-purple-500/30 border-purple-400/70 text-purple-300 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] group-hover:border-purple-300'
                  : 'bg-purple-500/30 border-purple-500/70 text-purple-700 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]'
              }`}
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <WrenchIcon />
            </motion.div>
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`}>
              Stack Principal
            </h3>
            <div className="space-y-2">
              {['Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'JWT Auth'].map((tech) => (
                <div key={tech} className={`flex items-center gap-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <span className={theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'}>›</span>
                  {tech}
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard theme={theme} delay={0.5} className="p-8 group">
            <motion.div 
              className={`w-14 h-14 rounded-2xl mb-4 flex items-center justify-center backdrop-blur-xl border-2 transition-all ${
                theme === 'dark'
                  ? 'bg-orange-500/30 border-orange-400/70 text-orange-300 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] group-hover:border-orange-300'
                  : 'bg-orange-500/30 border-orange-500/70 text-orange-700 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]'
              }`}
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <GraduationIcon />
            </motion.div>
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
            }`}>
              Enfoque
            </h3>
            <div className="space-y-2">
              {['Arquitectura escalable', 'Seguridad first', 'Código mantenible', 'Debugging metódico'].map((focus) => (
                <div key={focus} className={`flex items-center gap-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <span className={theme === 'dark' ? 'text-pink-400' : 'text-pink-600'}>✓</span>
                  {focus}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <motion.h3
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`text-3xl md:text-4xl font-black mb-8 text-center ${
            theme === 'dark'
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500'
          }`}
        >
          Soft Skills
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, idx) => (
            <GlassCard key={idx} theme={theme} delay={0.7 + idx * 0.05} className="p-6 group">
              <motion.div 
                className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center backdrop-blur-xl border-2 transition-all ${
                  theme === 'dark'
                    ? skill.color === 'cyan'
                      ? 'bg-cyan-500/30 border-cyan-400/70 text-cyan-300 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] group-hover:border-cyan-300'
                      : skill.color === 'purple'
                      ? 'bg-purple-500/30 border-purple-400/70 text-purple-300 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] group-hover:border-purple-300'
                      : skill.color === 'pink'
                      ? 'bg-pink-500/30 border-pink-400/70 text-pink-300 group-hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] group-hover:border-pink-300'
                      : 'bg-orange-500/30 border-orange-400/70 text-orange-300 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] group-hover:border-orange-300'
                    : skill.color === 'cyan'
                    ? 'bg-cyan-500/30 border-cyan-500/70 text-cyan-700 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]'
                    : skill.color === 'purple'
                    ? 'bg-purple-500/30 border-purple-500/70 text-purple-700 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]'
                    : skill.color === 'pink'
                    ? 'bg-pink-500/30 border-pink-500/70 text-pink-700 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]'
                    : 'bg-orange-500/30 border-orange-500/70 text-orange-700 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]'
                }`}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <skill.icon className="w-10 h-10" />
              </motion.div>
              <h4 className={`text-lg font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {skill.title}
              </h4>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {skill.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Projects Page
const ProjectsPage = ({ theme }) => {
  const projects = [
    {
      title: 'CrypticOnline',
      desc: 'E-commerce con backend profesional',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'React Native'],
      color: 'cyan',
    },
    {
      title: 'Sistema de Torneos',
      desc: 'App de competencias sin conexión',
      tech: ['Node.js', 'WebSockets', 'SQLite'],
      color: 'purple',
    },
    {
      title: 'Proyectos Académicos',
      desc: 'APIs, CRUDs y autenticación',
      tech: ['Express', 'JWT', 'Prisma ORM'],
      color: 'pink',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen px-4 pt-32 pb-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`text-5xl md:text-7xl font-black mb-16 text-center ${
            theme === 'dark'
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500'
          }`}
          style={{
            textShadow: theme === 'dark' ? '0 0 60px rgba(34,211,238,0.4)' : 'none'
          }}
        >
          Proyectos Destacados
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <GlassCard key={idx} theme={theme} delay={idx * 0.1} className="p-8 group cursor-pointer">
              <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center backdrop-blur-xl border-2 transition-all duration-300 ${
                theme === 'dark'
                  ? project.color === 'cyan'
                    ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]'
                    : project.color === 'purple'
                    ? 'bg-purple-500/20 border-purple-400/50 text-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]'
                    : 'bg-pink-500/20 border-pink-400/50 text-pink-400 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]'
                  : project.color === 'cyan'
                  ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-600'
                  : project.color === 'purple'
                  ? 'bg-purple-500/20 border-purple-500/50 text-purple-600'
                  : 'bg-pink-500/20 border-pink-500/50 text-pink-600'
              }`}>
                <RocketIcon />
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {project.title}
              </h3>
              <p className={`mb-6 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-xl border ${
                      theme === 'dark'
                        ? 'bg-cyan-500/10 border-cyan-400/30 text-cyan-400'
                        : 'bg-purple-500/10 border-purple-500/30 text-purple-600'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Skills Page
const SkillsPage = ({ theme }) => {
  const skillCategories = [
    {
      title: 'Backend',
      icon: TerminalIcon,
      skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT'],
      color: 'cyan',
    },
    {
      title: 'Frontend',
      icon: CodeIcon,
      skills: ['React', 'React Native', 'Tailwind', 'HTML/CSS'],
      color: 'purple',
    },
    {
      title: 'DevOps',
      icon: RocketIcon,
      skills: ['Git', 'npm', 'Postman', 'CLI'],
      color: 'pink',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen px-4 pt-32 pb-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`text-5xl md:text-7xl font-black mb-16 text-center ${
            theme === 'dark'
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500'
          }`}
          style={{
            textShadow: theme === 'dark' ? '0 0 60px rgba(34,211,238,0.4)' : 'none'
          }}
        >
          Stack Técnico
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <GlassCard key={idx} theme={theme} delay={idx * 0.1} className="p-8">
              <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center backdrop-blur-xl border-2 transition-all duration-300 ${
                theme === 'dark'
                  ? category.color === 'cyan'
                    ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                    : category.color === 'purple'
                    ? 'bg-purple-500/20 border-purple-400/50 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                    : 'bg-pink-500/20 border-pink-400/50 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.4)]'
                  : category.color === 'cyan'
                  ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-600'
                  : category.color === 'purple'
                  ? 'bg-purple-500/20 border-purple-500/50 text-purple-600'
                  : 'bg-pink-500/20 border-pink-500/50 text-pink-600'
              }`}>
                <category.icon />
              </div>
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className={`px-4 py-3 rounded-xl backdrop-blur-xl border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-black/50 border-gray-800 text-gray-300 hover:border-cyan-400/50 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]'
                        : 'bg-white/50 border-gray-300 text-gray-700 hover:border-purple-500/50'
                    }`}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Contact Page
const GithubContactIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinContactIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.84v8.37h2.84v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.84M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77" />
  </svg>
);

const EmailContactIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5-8-5V6l8 5 8-5v2" />
  </svg>
);

const RocketIconSmall = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03z" />
  </svg>
);

const UserGroupIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
  </svg>
);

const BuildingsIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 13h2v8H3v-8m4-8h2v16H7V5m4-2h2v18h-2V3m4 4h2v14h-2V7m4-2h2v16h-2V5" />
  </svg>
);

const ContactPage = ({ theme }) => {
  const contacts = [
    { label: 'GitHub', url: 'https://github.com/FallenAngel968', icon: GithubContactIcon, desc: 'Ver mi código y proyectos', color: 'cyan' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/angel-flores-eduardo', icon: LinkedinContactIcon, desc: 'Conexión profesional', color: 'purple' },
    { label: 'Email', url: 'mailto:angel_eduardo4@icloud.com', icon: EmailContactIcon, desc: 'Contacto directo', color: 'pink' },
  ];

  const interests = [
    { text: 'Proyectos backend desafiantes', icon: RocketIconSmall },
    { text: 'Equipo técnico serio', icon: UserGroupIcon },
    { text: 'Problemas de escalabilidad', icon: ChartIcon },
    { text: 'Arquitectura de sistemas', icon: BuildingsIcon }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen px-4 pt-32 pb-20"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`text-5xl md:text-7xl font-black mb-8 text-center ${
            theme === 'dark'
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500'
          }`}
          style={{
            textShadow: theme === 'dark' ? '0 0 60px rgba(34,211,238,0.4)' : 'none'
          }}
        >
          ¿Hablamos?
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-xl text-center mb-16 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Estoy abierto a oportunidades, colaboraciones y conversaciones sobre arquitectura backend, 
          problemas técnicos interesantes o desarrollo serio
        </motion.p>

        <div className="space-y-4 mb-12">
          {contacts.map((contact, idx) => (
            <GlassCard key={idx} theme={theme} delay={idx * 0.1} className="p-6 group cursor-pointer">
              <a
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-xl border-2 flex-shrink-0 ${
                  theme === 'dark'
                    ? contact.color === 'cyan'
                      ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400'
                      : contact.color === 'purple'
                      ? 'bg-purple-500/20 border-purple-400/50 text-purple-400'
                      : 'bg-pink-500/20 border-pink-400/50 text-pink-400'
                    : contact.color === 'cyan'
                    ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-600'
                    : contact.color === 'purple'
                    ? 'bg-purple-500/20 border-purple-500/50 text-purple-600'
                    : 'bg-pink-500/20 border-pink-500/50 text-pink-600'
                }`}>
                  <contact.icon />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {contact.label}
                  </h3>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {contact.desc}
                  </p>
                </div>
                <motion.span
                  className={theme === 'dark' ? 'text-cyan-400 text-2xl' : 'text-purple-600 text-2xl'}
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                >
                  →
                </motion.span>
              </a>
            </GlassCard>
          ))}
        </div>

        <GlassCard theme={theme} delay={0.4} className="p-8">
          <h3 className={`text-2xl font-bold mb-6 text-center ${
            theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
          }`}>
            Siempre interesado en:
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {interests.map((interest, idx) => (
              <motion.div
                key={idx}
                className={`px-4 py-4 rounded-lg flex flex-col items-center gap-2 backdrop-blur-xl border transition-all ${
                  theme === 'dark'
                    ? 'bg-black/50 border-gray-700 text-gray-300 hover:border-cyan-400/50'
                    : 'bg-white/50 border-gray-300 text-gray-700 hover:border-purple-500/50'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <div className={theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'}>
                  <interest.icon />
                </div>
                <span className="text-sm font-medium text-center">{interest.text}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
};

// Main App
export default function App() {
  const [theme, setTheme] = useState('dark');
  const [currentPage, setCurrentPage] = useState('home');

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const pages = {
    home: HomePage,
    about: AboutPage,
    projects: ProjectsPage,
    skills: SkillsPage,
    contact: ContactPage,
  };

  const CurrentPageComponent = pages[currentPage];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`min-h-screen transition-colors duration-500 ${
          theme === 'dark'
            ? 'bg-black'
            : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
        }`}
      >
        <AnimatedBackground theme={theme} />
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} theme={theme} />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        
        <AnimatePresence mode="wait">
          <CurrentPageComponent key={currentPage} theme={theme} />
        </AnimatePresence>
      </div>
    </ThemeContext.Provider>
  );
}