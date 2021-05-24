import React, { useState } from 'react';

export const useFile = <T extends File>(): {
  files: T[];
  setFiles: React.Dispatch<React.SetStateAction<T[]>>;
} => {
  const [files, setFiles] = useState<T[]>([]);
  return { files, setFiles };
};
