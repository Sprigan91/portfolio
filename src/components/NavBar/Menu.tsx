import {
  AddressBook,
  Buildings,
  Desktop,
  DotsThreeOutline,
  FacebookLogo,
  House,
  InstagramLogo,
  LinkedinLogo,
  Student,
  User,
} from "phosphor-react";
import React, { useState, useEffect } from "react";
import portfolioImage from "./portfolioImage.jpg"; // Ajustez le chemin en fonction de la structure de vos fichiers
import { Link } from "react-router-dom";
import { on } from "stream";

interface NavbarProps {
    onAboutMeClick: () => void;
    onEducation: () => void;
    onExperience: () => void;
    onSkills: () => void;
    onHeader: () => void;
  }

  export default function Sidebar({ onExperience, onAboutMeClick, onEducation, onSkills, onHeader }: NavbarProps) {
  const [showTabs, setShowTabs] = useState(true); // Initial state set to true for full-screen display

  useEffect(() => {
    // Add an event listener to detect window resize and update the state accordingly
    const handleResize = () => {
      setShowTabs(window.innerWidth >= 1033); // Adjust the breakpoint as needed
    };

    // Initial call to handleResize to set the initial state
    handleResize();

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="">
      <div className="space-y-6 text-2xl lg:my-5">
        <div className="flex items-center justify-center">
          <img
            src={portfolioImage}
            alt="Portfolio"
            className="lg:w-5/12 lg:block hidden rounded-full"
          />
        </div>
        <div className="flex items-center justify-center  lg:flex lg:items-center lg:justify-center md:flex md:items-center md:justify-center">
          <div className="font-bold text-white text-3xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-2xl">Arnaud Cologan</div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="lg:hidden  text-white"
            onClick={() => setShowTabs(!showTabs)}
          >
            <DotsThreeOutline size={32} />
          </button>
        </div>

        {showTabs && (
          <div className="lg:flex-1">
            <div className="flex items-center justify-center space-x-5 text-white">
              <div>
                <InstagramLogo size={32} />
              </div>
              <div>
                <FacebookLogo size={32} />
              </div>
              <div>
                <LinkedinLogo size={32} />
              </div>
            </div>
            <ul className="pt-2 pb-4 space-y-1 text-sm lg:text-xl lg:space-y-8 text-white my-1 mx-1 lg:my-5 lg:mx-5">
              <li className="">
                <div className="flex item-center space-x-5" onClick={onHeader}>
                  <div>
                    <House size={32} />
                  </div>
                  <div>Header</div>
                </div>
              </li>
              <li className="">
                <div>
                  <div className="flex items-center space-x-5"  onClick={onAboutMeClick}>
                
                    <div className="">
                      <User size={32} />
                    </div>
                    <div>AboutMe</div>
                  </div>
                  </div>
              </li>

              <li className="">
                <div className="flex item-center space-x-5 "onClick={onEducation} >
                  <div>
                    <Student size={32} />
                  </div>
                  <div>Student</div>
                </div>
              </li>

              <li className="">
                <div className="flex item-center space-x-5"  onClick={onExperience}>
                  <div>
                    <Buildings size={32} />
                  </div>
                  <div>Experience</div>
                </div>
              </li>
              <li className="">
                <div className="flex item-center space-x-5" onClick={onSkills}>
                  <div>
                    <Desktop size={32} />
                  </div>
                  <div>Skills</div>
                </div>
              </li>
              <li className="">
                <div className="flex item-center space-x-5">
                  <div>
                    <AddressBook size={32} />
                  </div>
                  <div>Contact</div>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
