import React from 'react';
import Typewriter from 'react-typewriter-effect';

const TypewriterComponent = () => {
  return (
      <div className="flex items-center justify-center h-screen">
    <Typewriter
      textStyle={{
        color:'white',
        fontWeight:500,
        fontSize: '2.5em',
        textAlign:'center',

        }}
      startDelay={100}
      cursorColor='white'
      multiText={[
        'Building...',
        'Coming Soon!',
        'I Love You :)',
        'Busy in Hackathon ;)',

        'Building...',
        'Coming Soon!',
        'I Love You :)',
        'Busy in Hackathon ;)',

        'Building...',
        'Coming Soon!',
        'I Love You :)',
        'Busy in Hackathon ;)',

        'Building...',
        'Coming Soon!',
        'I Love You :)',
        'Busy in Hackathon ;)',

        'Building...',
        'Coming Soon!',
        'I Love You :)',
        'Busy in Hackathon ;)',
        'Building...:)'
      ]}
      multiTextDelay={1000}
      typeSpeed={100}
    />
    </div>
  );
};

export default TypewriterComponent;








