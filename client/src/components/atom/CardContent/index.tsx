import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export const CardContent = (props: Props): JSX.Element => {
  return (
    <div className="px-6 py-4">
      <div className="font-bold text-xl">{props.children}</div>
    </div>
  );
};
