import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 bg-slate-200 dark:bg-zinc-800 rounded-full shadow-md"
    >
      {theme === 'light' ? (
        <i className="fas fa-moon text-slate-800"></i>
      ) : (
        <i className="fas fa-sun text-zinc-200"></i>
      )}
    </button>
  );
};

export default ThemeToggle;
