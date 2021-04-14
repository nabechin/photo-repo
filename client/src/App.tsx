import React from "react";
import "./App.css";
import styled from "styled-components";
import { TopPage } from "../src/containers/TopPage";
import camera from "./assets/picture/IMG_2122.JPG";

const Header = styled.div`
  flex: auto;
  background-color: gray;
`;

const Wrapper = styled.div`
  flex: auto 0 1;
  display: flex;
  flex-flow: nowrap column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const Footer = styled.div`
  height: 0;
  overflow: hidden;
`;

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Wrapper>
        <TopPage />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
