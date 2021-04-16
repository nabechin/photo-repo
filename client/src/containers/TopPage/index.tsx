import React from "react";
import { Header } from "../../components/Header";
import styled from "styled-components";

export const TopPage = (): JSX.Element => {
  return (
    <>
      <Header></Header>
      <Wraper></Wraper>
    </>
  );
};

const Wraper = styled.div`
  display: flex;
  flex: auto 1 1;
  flex-flow: column nowrap;
  margin: 0 auto;
  padding: 0 20px;
  width: 600px;
  max-width: 100%;
`;
