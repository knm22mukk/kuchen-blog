import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';

export const ChangeThemeButton: FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label='DarkModeToggleButton'
      type='button'
      className='mx-3'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && <>{theme === 'dark' ? <span>ライト</span> : <span>ダーク</span>}</>}
    </button>
  );
};
