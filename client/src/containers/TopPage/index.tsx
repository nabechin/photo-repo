import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Card } from "../../components/atom/Card";
import { CardMedia } from "../../components/atom/CardMedia";
import { CardContent } from "../../components/atom/CardContent";
import styled from "styled-components";
import camera from "../../assets/picture/IMG_2122.JPG";

export const TopPage = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Header></Header>
      <ContentWrapper>
        <Card>
          <CardMedia src={camera} />
          <CardContent>The Coldest Sunset</CardContent>
        </Card>
      </ContentWrapper>
    </>
  );
};

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 33%);
  grid-row-gap: 10px;
  grid-column-gap: 15px;
  margin: 0 auto;
  padding-top: 20px;
  width: 900px;
`;
