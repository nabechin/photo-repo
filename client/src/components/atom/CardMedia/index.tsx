import React from 'react';

interface Props {
  src: string;
}

export const CardMedia = (props: Props): JSX.Element => {
  return (
    <>
      <img src={props.src} alt="Sunset in the mountains" />
    </>
  );
};
