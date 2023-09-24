import React from "react";
import Typewriter from "react-typewriter-effect";

const TypewriterComponent = () => {
  // Define the fields you want to repeat
  const fieldsToRepeat = [
    "Software Developer",
    "Open Source",
    "FullStack & Devops",
    "System Design",
    "Kubernetes",
    "Machine Learning",
    "Data Science",
    "Reactjs & React Native",
    "Programming",
    "JS, Python, Go, C++",
    "DSA",
    "Hackathons",
    "Technical Writing",
    "Computer Science",
  ];
  const mobileToRepeat = [
    "Software Developer",
    "Open Source",
    "Frontend",
    "Backend",
    "Devops",
    "Programming",
    "JS, Go, Py",
    "Kubernetes",
    "DSA",
    "Hackathons",
    "Full-Stack",
    "Computer Science",
  ];

  // Create an array by repeating the fields five times
  const repeatedFields = Array(4).fill(fieldsToRepeat).flat();
  const MobileFields = Array(3).fill(mobileToRepeat).flat();
  const isMobile = window.innerWidth <= 768; // Define your mobile breakpoint here

  return (
    <div className="w-full flex justify-center font-semibold">
      <Typewriter
        startDelay={100}
        cursorColor="#334155"
        multiText={isMobile ? MobileFields : repeatedFields}
        multiTextDelay={1000}
        typeSpeed={100}
      />
    </div>
  );
};

export default TypewriterComponent;
