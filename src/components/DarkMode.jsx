import React, { useState, useEffect } from 'react';

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  // Check and load user preference on component mount
  useEffect(() => {
    const userTheme = localStorage.getItem('theme');
    if (userTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 transition-all duration-300">
        <button
          className=" bg-gray-300 dark:bg-gray-700 p-2 rounded-full text-sm"
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
    </div>
  );
}

export default DarkMode;
