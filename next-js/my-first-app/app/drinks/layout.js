import React from "react";

const layout = ({ children }) => {
  return (
    <div className="max-w-full">
      <pre data-prefix="$" className=" mb-8 ">
        <h1 className="text-7xl">DrinksPage</h1>
      </pre>
      {children}
    </div>
  );
};

export default layout;
