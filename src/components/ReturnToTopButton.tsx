import { FC, useEffect, useState } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

export const ReturnToTopButton: FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const changeShow = () => {
    const page_y_offset: number = 100;
    if (window.pageYOffset > page_y_offset) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeShow);
    return () => window.removeEventListener('scroll', changeShow);
  }, []);

  const returnTop = () => {
    typeof window !== 'undefined' &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  };

  if (show)
    return (
      <button
        type='button'
        aria-label='return to top'
        onClick={returnTop}
        className='fixed right-10 bottom-20 rounded-full bg-orange-500 p-4 text-3xl text-white'
      >
        <FaAngleDoubleUp />
      </button>
    );
  else return null;
};
