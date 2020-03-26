import React from "react";

const Card = ({ id, title, date, description, last }) => {
  console.log(last);
  return (
    <dl key={id} className={`linked relative sm:w-3/5 ${!last && "pb-6"}`}>
      <dt className="pl-8 text-indigo-400 uppercase text-sm font-light">
        {title}
      </dt>
      <dd>
        <span className="pl-8 text-sm text-gray-400 mb-2 block">{date}</span>
        <p className="pl-8 roboto text-base leading-relaxed text-gray-700">
          {description}
        </p>
      </dd>
    </dl>
  );
};

export default Card;
