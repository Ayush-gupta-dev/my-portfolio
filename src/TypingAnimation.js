import React from 'react';
import Typed from 'react-typed';

const TypingAnimation = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Typed
        strings={['Building...','coming soon!','I love you :)','busy in a hackathon;)']}
        typeSpeed={90} // Adjust the typing speed (in milliseconds)
        loop={true}
        className="text-white text-center text-5xl"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      />
    </div>
  );
};

export default TypingAnimation;







