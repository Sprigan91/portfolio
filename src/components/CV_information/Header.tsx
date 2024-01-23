import React from "react";
const Header = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className="" ref={ref}>
      <div className="text-white lg:text-5xl text-2xl ">
        Hello! I'm Arnaud Cologan
      </div>
    </div>
  );
});

export default Header;
