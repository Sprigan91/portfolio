import AboutMe from "../components/CV_information/AboutMe";
import Education from "../components/CV_information/Education";
import Experience from "../components/CV_information/Experience";
import Header from "../components/CV_information/Header";
import Skills from "../components/CV_information/Skills";
import Navbar from "../components/NavBar/Menu";
import portfolioImage from "./portfolioImage.jpg";
import React, { useRef } from "react";

const Home = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="">
      <div className="flex-none sm:flex">
        <div className="md:w-screen sm:w-screen lg:h-screen  bg-gray-800 shadow w-screen  lg:w-1/6  fixed top-0">
          <Navbar
            onAboutMeClick={() => scrollToRef(aboutMeRef)}
            onEducation={() => scrollToRef(educationRef)}
            onExperience={() => scrollToRef(experienceRef)}
            onSkills={() => scrollToRef(skillsRef)}
            onHeader={() => scrollToRef(headerRef)}
          />
        </div>
        <div className="ml-2/12 bg-gray-950 w-screen h-screen flex flex-col justify-center items-center overflow-y-auto">
          <Header ref={headerRef} />
        </div>
      </div>
      <div className="flex mx-3 lg:mx-96 my-16">
        <AboutMe ref={aboutMeRef} />
      </div>
      <div className=" flex mx-3 lg:mx-96 my-16">
        <Education ref={educationRef} />
      </div>
      <div className=" mx-3 lg:mx-96 my-16">
        <Experience ref={experienceRef} />
      </div>
      <div className=" mx-3 lg:mx-96 my-16">
        <Skills ref={skillsRef} />
      </div>
    </div>
  );
};

export default Home;
