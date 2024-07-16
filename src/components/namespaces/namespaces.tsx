import React from "react";
import classes from "./namespaces.module.css";

interface NameSpacesProps {
  // Add any props you need for the component here
}

const NameSpaces: React.FC<NameSpacesProps> = () => {
  return (
    <div
      className={`
        ${classes.namespaces}
        bg-gray-900
        min-h-screen
        text-gray-400
        text-center
        w-20
      `}
    >
      Namespaces go her
    </div>
  );
};

export default NameSpaces;
