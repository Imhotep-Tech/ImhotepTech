import React, { useEffect } from 'react';

const AboutMe = () => {
  useEffect(() => {
    window.location.replace('https://kbassem.imhotep-tech.com/');
  }, []);

  return (
    <div className="w-full min-h-screen bg-dark flex items-center justify-center text-white">
      <p className="text-sm md:text-base text-gray-300">
        Redirecting to the founder&apos;s portfolio at{' '}
        <a
          href="https://kbassem.imhotep-tech.com/"
          className="text-secondary underline hover:text-accent"
        >
          kbassem.imhotep-tech.com
        </a>
        ...
      </p>
    </div>
  );
};

export default AboutMe;
