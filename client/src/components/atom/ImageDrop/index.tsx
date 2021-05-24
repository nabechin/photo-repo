import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import { useFile } from '../../../hooks/useFile';

interface FileWithPreview extends File {
  preview?: string;
}

interface Props {
  files: FileWithPreview[];
  setFiles: React.Dispatch<React.SetStateAction<FileWithPreview[]>>;
}

export const ImageDrop = (props: Props): JSX.Element => {
  const onHandleDrop = (acceptedFiles: File[]): void => {
    if (acceptedFiles.length > 0) {
      props.setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    }
  };

  const makePreview = (): JSX.Element[] => {
    return props.files.map((file, i) => (
      <img key={i} src={file.preview} height="200" width="200"></img>
    ));
  };

  return (
    <Dropzone onDrop={onHandleDrop}>
      {({ getRootProps, getInputProps }) => (
        <Wrapper>
          <DragAndDropBox {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag drop some files here, or click to select files</p>
          </DragAndDropBox>
          <Preview>{makePreview()}</Preview>
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
  > div {
    margin: 10px;
  }
`;

const DragAndDropBox = styled.div`
  border: solid 2px grey;
  border-radius: 5px;
  text-align: center;
  height: 430px;
`;

const Preview = styled.div`
  height: 200px;
`;
