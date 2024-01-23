import React from "react";

const Education =React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref}>
      <div className="text-2xl underline decoration-sky-500 lg:text-5xl font-bold">
        Student
      </div>
      <ul className="list-disc mx-10 my-10 text-lg space-y-7">
        <li className="space-y-3">
          <div className=" font-bold">
            Professionnal licence mechatronics and robotics : Intelligent
            mechatronic systems for industry and space
          </div>
          <div className="">
          September 2020 to September 2021
          </div>
          <div className="font-light">
          IUT Paris Saclay in Mantes la Jolie
          </div>
        </li>
        <li className="space-y-3">
          <div className=" font-bold">
          BTS digital system option electronics and communication
          </div>
          <div className="">
          Septembre 2018 to Juillet 2020
          </div>
          <div className="font-light">
          Hight School Modeste Leroy, Evreux
          </div>
        </li>
        <li className="space-y-3">
          <div className=" font-bold">
          BAC Science and Technology of Industry and Sustainable Development
          </div>
          <div className="">
          Septembre 2016 to Juillet 2018
          </div>
          <div className="font-light">
          High School Les Fontenelles, Louviers
          </div>
        </li>
      </ul>
    </div>
  );
});

export default Education;
