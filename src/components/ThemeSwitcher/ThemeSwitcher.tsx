import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme); 
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
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
