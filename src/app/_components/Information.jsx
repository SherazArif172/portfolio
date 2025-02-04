import React from "react";
import Experience from "./Experience";
import Education from "./Education";

const Information = () => {
  return (
    <div className="flex w-full gap-8 px-8">
      <Experience />
      <Education />
    </div>
  );
};

export default Information;
