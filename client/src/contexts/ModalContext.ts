import React, { createContext } from 'react';

export const ModalContext = createContext({
  isOpen: false,
  setIsOpen: () => undefined,
});
