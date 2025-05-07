import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    // Check localStorage for the saved theme on initial load
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme); // Set theme based on stored value
    } else {
      // Default to 'light' if no theme is saved in localStorage
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    // Apply the 'dark' class to <html> element when dark mode is enabled
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save the theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between 'light' and 'dark' themes
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="p-4">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg transition-colors hover:bg-gray-600"
      >
        {theme === 'light' ? '☀️' : '🌙'}
      </button>
    </div>
  );
};
