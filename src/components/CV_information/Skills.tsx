import React from "react";

const Skills = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref}>
      <div className="text-2xl underline decoration-sky-500 lg:text-5xl font-bold">
        Skills
      </div>
      <div className="my-10 space-y-10 text-sm 2xl:text-lg ">
        <div className="w-full rounded-full h-2.5 ">
          <div className="font-bold flex">Maintenance and repair</div>
          <div
            className="bg-blue-800 h-2.5 rounded-full"
            style={{ width: "100%" }}
          ></div>
        </div>
        <div className="w-full rounded-full h-2.5 ">
          <div className="font-bold">Physical measurement</div>
          <div
            className="bg-blue-800 h-2.5 rounded-full"
            style={{ width: "90%" }}
          ></div>
        </div>
        <div className="w-full rounded-full h-2.5 ">
          <div className="font-bold">Handling of laser optical equipment</div>
          <div
            className="bg-blue-800 h-2.5 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
        <div className="w-full rounded-full h-2.5 ">
          <div className="font-bold">CAO (Altium, 3D experience, SolidWorks)</div>
          <div
            className="bg-blue-800 h-2.5 rounded-full"
            style={{ width: "85%" }}
          ></div>
        </div>
        <div className="w-full rounded-full h-2.5 ">
          <div className="font-bold">Logiciel : Matlab, LabView, CES Edupack</div>
          <div
            className="bg-blue-800 h-2.5 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
        <div className="w-full rounded-full h-2.5 ">
          <div className="font-bold">English communication</div>
          <div
            className="bg-blue-800 h-2.5 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
        <div className="w-full rounded-full h-2.5 ">
          <div className="font-bold">Code (pythonn C++, C, React)</div>
          <div
            className="bg-blue-800 h-2.5 rounded-full"
            style={{ width: "85%" }}
          ></div>
        </div>
      </div>
    </div>
  );
});

export default Skills;
