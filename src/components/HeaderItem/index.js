import React from "react";

const HeaderItem = ({ label: key, value }) => {
  return (
    <>
      <dt className="float-left opacity-50 uppercase">{key}</dt>
      <dd className="pl-24 mb-2">{value}</dd>
    </>
  );
};

export default HeaderItem;
