import React from "react";
import styled from "styled-components";
import { Button } from "../../components/atom/Button";

export const Header = (): JSX.Element => {
  return (
    <>
      <Wrapper>
        <ContentsRow>
          <Logo>Photo Repo</Logo>
          <Contents>
            <Button>Photo</Button>
            <Button>Draw</Button>
          </Contents>
        </ContentsRow>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 3em;
`;

const ContentsRow = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  box-shadow: 0 3px 2px -2px #4d4d4d;
  margin: 5px 20px 0 20px;
  padding: 20px;
`;

const Logo = styled.div`
  flex-grow: 1;
  color: #4d4d4d;
  font-size: 1.5em;
`;

const Contents = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  padding: 10px;
  > * {
    margin: 10px;
  }
`;
