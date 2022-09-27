import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';

export const ChangeThemeButton: FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className='mx-3'>
      <button
        aria-label='DarkModeToggleButton'
        type='button'
        className='text-3xl'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && <>{theme === 'dark' ? <MdOutlineLightMode /> : <MdDarkMode />}</>}
      </button>
    </div>
  );
};
