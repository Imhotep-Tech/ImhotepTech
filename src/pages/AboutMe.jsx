import React, { useEffect } from 'react';

const AboutMe = () => {
  useEffect(() => {
    window.location.replace('https://kbassem.vercel.app/');
  }, []);

  return (
    <div className="w-full min-h-screen bg-dark flex items-center justify-center text-white">
      <p className="text-sm md:text-base text-gray-300">
        Redirecting to the founder&apos;s portfolio at{' '}
        <a
          href="https://kbassem.vercel.app/"
          className="text-secondary underline hover:text-accent"
        >
          kbassem.vercel.app
        </a>
        ...
      </p>
    </div>
  );
};

export default AboutMe;
