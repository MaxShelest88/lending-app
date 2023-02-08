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
    <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full text-sm text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
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
