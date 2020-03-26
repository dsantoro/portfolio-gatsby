import React from "react";

const SkillMeter = ({ label, percent }) => {
  return (
    <div>
      <div className="flex justify-between">
        <span className="uppercase text-gray-600 text-sm font-light">
          {label}
        </span>
        <span className="uppercase text-gray-600 text-sm font-light">
          {percent}%
        </span>
      </div>
      <div className="relative w-full h-2 bg-gray-400 mt-4">
        <div
          className="absolute inset-y-0 left-0 bg-indigo-700"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillMeter;
