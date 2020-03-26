import React from "react";

const Menu = ({ items: menu, show }) => {
  return (
    <nav
      className={`fixed w-full transition-all duration-500 z-10 ${
        show ? "bg-white py-6 shadow-lg" : "transparent py-10"
      }`}
    >
      <div className="hidden sm:block px-4 container  mx-auto">
        <ul className="flex">
          {menu?.map(item => (
            <li className="uppercase mr-16 text-sm" key={item.id}>
              <a
                className={`menu-hover transition-color duration-500 ${
                  show ? "text-gray-700" : "text-white"
                }`}
                href={`#${item.title}`}
              >
                {item.title}
                <span className="opacity-0">_</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
