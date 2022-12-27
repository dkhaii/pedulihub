import React from "react";

const HeaderTitle = ({ content }) => {
  return (
    <div className="flex justify-center items-center pt-10">
      <h1 className="text-4xl font-bold text-accent">
        {content.titlePrimary} <span className="text-secondary">{content.titleSecondary}</span>
      </h1>
    </div>
  );
};

export default HeaderTitle;
