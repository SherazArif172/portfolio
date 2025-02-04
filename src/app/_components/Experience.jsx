import { Award } from "lucide-react";
import React from "react";

const Experience = () => {
  return (
    <div className="text-white w-full">
      <div className="flex items-center gap-3 text-5xl font-bold">
        <Award className="h-16 w-16 text-primary" />
        <p
          style={{
            background: "linear-gradient(to right, #8750f7 0%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Experience
        </p>
      </div>
      <div className="flex flex-col gap-8 mt-10">
        <div className="bg-[#140c1c] p-6 rounded-md group">
          <p className="text-2xl font-extrabold text-primary group-hover:text-white transition-all">
            2021-2022
          </p>
          <p className="text-3xl mt-2">CMS COURSE</p>
          <p className="font-normal text-xl mt-2">Parsona, The New School</p>
        </div>
        <div className="bg-[#140c1c] p-6 rounded-md">
          <p className="text-2xl font-extrabold">2021-2022</p>
          <p className="text-3xl mt-2">CMS COURSE</p>
          <p className="font-normal text-xl mt-2">Parsona, The New School</p>
        </div>
        <div className="bg-[#140c1c] p-6 rounded-md">
          <p className="text-2xl font-extrabold">2021-2022</p>
          <p className="text-3xl mt-2">CMS COURSE</p>
          <p className="font-normal text-xl mt-2">Parsona, The New School</p>
        </div>
        <div className="bg-[#140c1c] p-6 rounded-md">
          <p className="text-2xl font-extrabold">2021-2022</p>
          <p className="text-3xl mt-2">CMS COURSE</p>
          <p className="font-normal text-xl mt-2">Parsona, The New School</p>
        </div>
        <div className="bg-[#140c1c] p-6 rounded-md">
          <p className="text-2xl font-extrabold">2021-2022</p>
          <p className="text-3xl mt-2">CMS COURSE</p>
          <p className="font-normal text-xl mt-2">Parsona, The New School</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
