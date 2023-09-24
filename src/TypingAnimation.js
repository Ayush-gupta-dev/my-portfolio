import React from 'react';
import Typewriter from 'react-typewriter-effect';

const TypewriterComponent = () => {
  // Define the fields you want to repeat
  const fieldsToRepeat = [
    'Software Developer',
    'Technical Writing',
    'Open Source Softwares',
    'Kubernetes',
    'Machine Learning',
    'Data Science',
    'Full-Stack & Devops',
  ];

  // Create an array by repeating the fields five times
  const repeatedFields = Array(5).fill(fieldsToRepeat).flat();

  return (
    <div className='w-full flex justify-center font-semibold'>
      <Typewriter
        startDelay={100}
        cursorColor='#334155'
        multiText={repeatedFields}
        multiTextDelay={1000}
        typeSpeed={100}
      />
    </div>
  );
};

export default TypewriterComponent;
