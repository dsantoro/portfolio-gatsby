import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactList = ({ data }) => {
  return (
    <ul className="flex mt-8 sm:mb-16">
      {data?.map(item => (
        <li className="mr-4" key={item.id}>
          <a
            className="opacity-50 duration-500 transition-opacity  hover:opacity-100"
            href={item.url}
            target="_blank"
            title={item.title}
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={item.icon} size="lg" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
