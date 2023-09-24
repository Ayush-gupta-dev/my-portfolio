import React from "react";
import ProfilePic from "./assets/Profile_photo.jpeg";
import TypewriterComponent from "./TypingAnimation";
import SocialLink from "./socialLink";

const About = () => {
  return (
    <>
      <div className="md:h-full h-auto bg-gray-900 place-content-center pt-24">
        <div className="flex flex-col md:flex-row  place-content-center p-4 flex-wrap ">
          <div className=" md:w-1/5 w-6/12 m-4 mt-10 mx-auto md:mx-0">
            <img
              src={ProfilePic}
              alt="profile pic"
              className="object-cover place-self-center rounded-full w-full mt-4"
            />
            <div className="text-xl mt-3 font-medium text-slate-700 font-sora">
            <TypewriterComponent/>
            </div>
            <div>
              <SocialLink/>
            </div>
          </div>
          <div className="md:w-2/4 w-full md:p-4 p-0 md:m-4 m-1">
            <p className="md:text-5xl text-2xl font-semibold text-white font-sora mb-3">
              {" "}
              About me{" "}
            </p>
            <p className="md:text-lg text-sm font-medium text-white font-sora my-3">
            Hello! I am Ayush Gupta, an undergraduate student at BITS Pilani. I have a strong interest in the software development lifecycle. As a full-stack developer, I create and contribute to useful software projects.
            <p className="my-3">
            This website serves as my portfolio, where I share my experiences, projects, achievements, and learning.
            What drives me in this ever-evolving field is the opportunity to create software that not only functions flawlessly but also enhances the lives of its users. I thrive on collaborative projects, leveraging my communication skills to work seamlessly with cross-functional teams.
            </p>
            You can find me exploring the latest tech trends, attending tech meetups, or contributing to open-source projects. I believe in the power of knowledge-sharing by making content in visual and written form and continuously seek opportunities to learn and grow in this dynamic industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
