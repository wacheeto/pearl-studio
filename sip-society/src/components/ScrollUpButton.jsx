import React, { useEffect, useState } from 'react';

export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300); 
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-zinc-900 text-white p-3 rounded-md w-[50px] shadow-lg hover:bg-zinc-800 transition-all z-10"
        aria-label="Scroll to top"
      >
        <i class="fa-solid fa-caret-up"></i>
      </button>
    )
  );
}
