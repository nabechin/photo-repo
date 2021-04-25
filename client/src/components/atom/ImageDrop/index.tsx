import React, { useState } from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";

export const ImageDrop = (): JSX.Element => {
  const [files, setFiles] = useState<File[]>([]);
  const onHandleDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    }
  };

  return (
    <Dropzone onDrop={onHandleDrop}>
      {({ getRootProps, getInputProps }) => (
        <Wrapper>
          <DragAndDropBox {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag drop some files here, or click to select files</p>
          </DragAndDropBox>
          <div style={{ flexGrow: 1 }}>aaa</div>
        </Wrapper>
      )}
    </Dropzone>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const DragAndDropBox = styled.div`
  border: solid 2px grey;
  border-radius: 5px;
  text-align: center;
  flex-grow: 2;
`;
