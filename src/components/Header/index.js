import React, { useState, useEffect } from "react";
import {
  faGithub,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import Menu from "../Menu";
import Avatar from "../Avatar";
import HeaderItem from "../HeaderItem";
import ContactList from "../ContactList";

const avatar = require("../../assets/img_avatar.png");

const PERSONAL_DATA = [
  {
    id: 1,
    key: "Age",
    value: 37
  },
  {
    id: 2,
    key: "E-mail",
    value: (
      <a href="mailto:danylo.santoro@gmail.com">danylo.santoro@gmail.com</a>
    )
  },
  {
    id: 3,
    key: "Phone",
    value: "+351 910 272 254"
  },
  {
    id: 4,
    key: "Address",
    value: "Bartolomeu Dias, 5, 2 direito, Amadora"
  }
];

const CONTACT_DATA = [
  {
    id: 1,
    icon: faGithub,
    title: "GitHub",
    url: "https://www.github.com"
  },
  {
    id: 2,
    icon: faFacebook,
    title: "Facebook",
    url: "https://www.github.com"
  },
  {
    id: 3,
    icon: faLinkedin,
    title: "linkedin",
    url: "https://www.github.com"
  }
];

const Header = ({ menu }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setShow(document.body.getBoundingClientRect().top < 0 ? true : false);
  };

  return (
    <>
      <Menu show={show} items={menu} />

      <div className="relative avatar-bg bg-cover pb-6 sm:pb-0">
        <div className="container mx-auto px-6 sm:px-4 pt-6 sm:pt-24 grid grid-cols-1 sm:grid-cols-1/3 gap-4 items-center">
          <div>
            <Avatar avatar={avatar} alternative="Danylo Santoro" />
          </div>
          <div className="relative top-40 white sm:pl-8">
            <h2 className="text-5xl white mb-2">Danylo Santoro_</h2>
            <p className="text-1xl white mb-4">
              frontend developer, React specialist
            </p>

            <dl>
              {PERSONAL_DATA?.map(item => (
                <HeaderItem key={item.id} label={item.key} value={item.value} />
              ))}
            </dl>

            <ContactList data={CONTACT_DATA} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
