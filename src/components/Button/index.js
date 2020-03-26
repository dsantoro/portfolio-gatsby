import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ label, blank, link, icon, right, ghost }) => {
  return (
    <a
      className={`transition-all duration-500 text-base items-center px-6 py-3 roboto uppercase rounded-full flex-initial hover:bg-indigo-700 border-transparent border ${
        ghost
          ? "border-indigo-400 bg-transparent text-indigo-400 hover:text-white"
          : "bg-indigo-400 text-white"
      }`}
      rel={blank && "noopener noreferrer"}
      target={blank && "_blank"}
      href={link}
    >
      {icon && !right && (
        <span className="mr-2">
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      {label}
      {icon && right && (
        <span className="ml-2">
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
    </a>
  );
};

export default Button;
