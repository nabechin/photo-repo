import React from "react";
import Dropzone from "react-dropzone";

export const ImageDrop = (): JSX.Element => {
  const onHandleDrop = (acceptedFile: File[]) => {
    console.log(acceptedFile);
  };
  return (
    <Dropzone onDrop={onHandleDrop}>
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "50%",
            border: "solid 2px grey",
            borderRadius: "5px",
          }}
        >
          <input {...getInputProps()} />
          <p>Drag drop some files here, or click to select files</p>
        </div>
      )}
    </Dropzone>
  );
};
