import { ArrowsIn } from "phosphor-react";
import Sidebar from "../NavBar/Menu";
import React from "react";

const AboutMe = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className="">
      <div className=" text-2xl underline decoration-sky-500 lg:text-5xl font-bold">
        About
      </div>
      <div className=" mx-10 my-10">
        Determined and dynamic, with the ability to work in a team and good
        experience in the field of maintenance and repairs, I would like to
        apply for the position of field service technician. My training and
        professional background will allow me to fulfill my missions efficiently
        and inventively.
      </div>
      <div className="my-10 text-xl mx-10 text-gray-800 font-bold">
        Technicien Service center / repairs and maintenance
      </div>
      <div className=" mx-1 lg:mx-10 text-sm 2xl:text-lg 2xl:grid 2xl:grid-cols-2 2xl:gap-2 xl:grid xl:grid-cols-1 xl:gap-3">
        <div className="flex items-center space-x-3">
          <ArrowsIn size={32} />
          <b>Birthday</b> : 20 febrary 2000
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <ArrowsIn size={32} />
            <b>Age</b> : 23 ans
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <ArrowsIn size={32} />
            <b>City</b> : Leuville sur Orge
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-3 ">
            <ArrowsIn size={32} />
            <b>Degree</b> : Professionnal Licence (Bac +3)
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <ArrowsIn size={32} />
            <b>Email</b> : arnaud.cologan@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
