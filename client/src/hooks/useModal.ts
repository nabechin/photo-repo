import React, { useState } from "react";

interface UseModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

export const useModal = (): UseModal => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return { isOpen, setIsOpen };
};
