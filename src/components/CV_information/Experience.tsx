import { Asterisk } from "phosphor-react";

import React from "react";

const Experience =React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className="w-full">
      <div className="text-2xl underline decoration-sky-500 lg:text-5xl font-bold">
        Professionnal Experience
      </div>
      <div className="my-10 2xl:ml-10 space-y-14 2xl:w-full xl:w-10/12 lg:w-11/12 sm:w-12/12">
        <div className="my-5  shadow-md  "> 
        <div className="ml-3 space-y-5">
          <div className="flex font-bold 2xl:text-xl ">
            After Sales Service
            <div className="ml-auto mr-2 font-medium">VAISALA SAS Saclay</div>
          </div>
          <div className="font-light">September 2020 to present</div>
          <ul className="space-y-2">
            <li>
             - Repair and maintain Lidar systems
            </li>
            <li>
             - Train customers and distributors
            </li>
            <li>
             - Contribute to product and process improvement
            </li>
          </ul>
          </div>
        </div>
        <div className="my-5 space-y-5  shadow-md "> 
        <div className="ml-3 space-y-5">
          <div className="flex font-bold 2xl:text-xl ">
          Internship as a mechatronic technician at latmos
            <div className="ml-auto mr-2 font-medium">Latmos Montigny-le-Bretonneux</div>
          </div>
          <div className="font-light">January 2020 to June 2020 </div>
          <ul className="space-y-2">
            <li>
             - Study of a satellite and its sensors
            </li>
            <li>
             - Initiation to Python, mathlab, web
            </li>
            <li>
             - Development of the end of year project (Mini Mars Rover)
            </li>
          </ul>
          </div>
        </div>
        <div className="my-5 space-y-5 shadow-md "> 
        <div className="ml-3 space-y-5">
          <div className="flex font-bold 2xl:text-xl ">
          After-sales service technician apprenticeship at Vaisala
            <div className="ml-auto mr-2 font-medium">VAISALA SAS Saclay</div>
          </div>
          <div className="font-light">January 2020 to June 2020 </div>
          <ul className="space-y-2">
            <li>
             - Acquisition of knowledge about LIDAR and its applications
            </li>
            <li>
             - Repair and maintain Lidar systems
            </li>
            <li>
             - Windcube V2.0 process update
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Experience;
