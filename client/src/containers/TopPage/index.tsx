import React, { useEffect, useState } from 'react';
import { Header } from '../../components/organisms/Header';
import { Card } from '../../components/atom/Card';
import { CardMedia } from '../../components/atom/CardMedia';
import { CardContent } from '../../components/atom/CardContent';
import styled from 'styled-components';
import { url, api_key } from '../../api';

interface Image {
  id: number;
  imageUrl: string;
}

export const TopPage = (): JSX.Element => {
  const [images, setImages] = useState<Image[]>([]);
  useEffect(() => {
    fetch('test', {
      method: 'GET',
      headers: {
        'x-api-key': api_key,
      },
    })
      .then((response) => {
        return response.json().then((data) => {
          if (response.ok) {
            return data.Items as Image[];
          } else {
            return Promise.reject({ status: response.status, data });
          }
        });
      })
      .then((result) => setImages(result))
      .catch((error) => console.log(error));
  });
  const renderImage = (): JSX.Element[] =>
    images.map((image) => (
      <Card key={image.id}>
        <CardMedia src={process.env.REACT_APP_S3_URL + image.imageUrl} />
        <CardContent>The Coldest Sunset</CardContent>
      </Card>
    ));
  return (
    <>
      <Header></Header>
      <ContentWrapper>{renderImage()}</ContentWrapper>
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
