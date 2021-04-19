import React from "react";

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button = (props: Props): JSX.Element => {
  return (
    <button
      onClick={props.onClick}
      className="bg-white hover:bg-gray-100 text-gray-500 font-semibold py-2 px-4 border border-gray-300 rounded shadow"
    >
      {props.children}
    </button>
  );
};
