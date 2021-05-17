import React, { useEffect } from 'react';
import { Header } from '../../components/organisms/Header';
import { Card } from '../../components/atom/Card';
import { CardMedia } from '../../components/atom/CardMedia';
import { CardContent } from '../../components/atom/CardContent';
import styled from 'styled-components';
import camera from '../../assets/picture/IMG_2122.JPG';

const url = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : '';

const api_key = process.env.REACT_APP_X_API_KEY
  ? process.env.REACT_APP_X_API_KEY
  : '';

export const TopPage = (): JSX.Element => {
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'x-api-key': api_key,
      },
    })
      .then((response) => {
        return response.json().then((data) => {
          if (response.ok) {
            return data.Items;
          } else {
            return Promise.reject({ status: response.status, data });
          }
        });
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  });
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
