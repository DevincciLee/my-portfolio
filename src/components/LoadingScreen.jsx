import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 3000); // start fade after 1s
    const removeTimer = setTimeout(() => setVisible(false), 4000); // remove after fade

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0a0f2c] via-[#1c1b3a] to-black transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center px-4">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-amber-300 animate-pulse">
          Loading Cyrus' universe...
        </h1>
        <div className="mt-6 flex justify-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-amber-300 rounded-full animate-bounce [animation-delay:0s]"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-amber-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-amber-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;