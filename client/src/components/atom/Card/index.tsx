import React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Card = (props: Props): JSX.Element => {
  return (
    <div className="w-64 rounded overflow-hidden shadow-lg my-2">
      {props.children}
    </div>
  );
};
