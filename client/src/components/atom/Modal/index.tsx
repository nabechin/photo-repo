import React, { useEffect } from 'react';
import ReactDom from 'react-dom';

const modalRoot = document.getElementById('modal') as HTMLElement;

interface Props {
  children: React.ReactNode;
}

export const Modal = (props: Props): React.ReactPortal => {
  const el = document.createElement('div');
  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  });

  return ReactDom.createPortal(props.children, el);
};
