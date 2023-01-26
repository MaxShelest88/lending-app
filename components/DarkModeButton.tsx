'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
      {currentTheme === 'dark' ? (
        <SunIcon
          onClick={() => {
            setTheme('light');
          }}
          className="h-6 w-6 cursor-pointer text-white"
        />
      ) : (
        <MoonIcon
          onClick={() => {
            setTheme('dark');
          }}
          className="h-6 w-6 cursor-pointer text-slate-900"
        />
      )}
    </div>
  );
}
export default DarkModeButton;
