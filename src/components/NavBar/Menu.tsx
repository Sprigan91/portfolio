import React, { useState, useEffect } from "react";
import { AddressBook, Buildings, Desktop, DotsThreeOutline, FacebookLogo, House, InstagramLogo, LinkedinLogo, Student, User } from "phosphor-react";
import portfolioImage from "./portfolioImage.jpg";
import { Link } from "react-router-dom";

interface SidebarProps {
  onAboutMeClick: () => void;
  onEducation: () => void;
  onExperience: () => void;
  onSkills: () => void;
  onHeader: () => void;
}


interface TabProps {
  icon: React.ReactElement;
  label: string;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ icon, label, onClick }) => (
  <li className="">
    <div className="flex item-center space-x-5" onClick={onClick}>
      <div>{icon}</div>
      <div>{label}</div>
    </div>
  </li>
);

const socialIcons = [
  <InstagramLogo size={32} />,
  <FacebookLogo size={32} />,
  <LinkedinLogo size={32} />,
];

const Sidebar: React.FC<SidebarProps> = ({ onExperience, onAboutMeClick, onEducation, onSkills, onHeader }) => {
  const [showTabs, setShowTabs] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowTabs(window.innerWidth >= 1033);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <div className="space-y-6 text-2xl lg:my-5">
        <div className="flex items-center justify-center">
          <img src={portfolioImage} alt="Portfolio" className="lg:w-5/12 lg:block hidden rounded-full" />
        </div>
        <div className="flex items-center justify-center lg:flex lg:items-center lg:justify-center md:flex md:items-center md:justify-center">
          <div className="font-bold text-white text-3xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-2xl">Arnaud Cologan</div>
        </div>
        <div className="flex items-center justify-center">
          <button type="button" className="lg:hidden text-white" onClick={() => setShowTabs(!showTabs)}>
            <DotsThreeOutline size={32} />
          </button>
        </div>

        {showTabs && (
          <div className="lg:flex-1">
            <div className="flex items-center justify-center space-x-5 text-white">
              {socialIcons.map((icon, index) => (
                <div key={index}>{icon}</div>
              ))}
            </div>
            <ul className="pt-2 pb-4 space-y-1 text-sm lg:text-xl lg:space-y-8 text-white my-1 mx-1 lg:my-5 lg:mx-5">
              <Tab icon={<House size={32} />} label="Header" onClick={onHeader} />
              <Tab icon={<User size={32} />} label="AboutMe" onClick={onAboutMeClick} />
              <Tab icon={<Student size={32} />} label="Student" onClick={onEducation} />
              <Tab icon={<Buildings size={32} />} label="Experience" onClick={onExperience} />
              <Tab icon={<Desktop size={32} />} label="Skills" onClick={onSkills} />
              <Tab icon={<AddressBook size={32} />} label="Contact" onClick={() => {}} />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
