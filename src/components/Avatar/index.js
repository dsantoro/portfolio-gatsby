import React from "react";

const Avatar = ({ avatar, alternative }) => {
  return (
    <img
      className="w-full h-380 object-cover relative top-40 rounded-md"
      src={avatar}
      alt={alternative}
    />
  );
};

export default Avatar;
