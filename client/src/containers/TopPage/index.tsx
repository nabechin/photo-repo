import React, { FC } from "react";
import { Header } from "../../components/Header";
import styled from "styled-components";

export const TopPage = (): JSX.Element => {
  return (
    <>
      <Header>
        <Button>aaa</Button>
        <button className="bg-white hover:bg-gray-100 text-gray-500 font-semibold py-2 px-4 border border-gray-300 rounded shadow">
          Draw
        </button>
      </Header>
    </>
  );
};

const Button = styled.button`
  background: white;
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
  font: semibold;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  &:hover{
    background: #F3F4F6
  }
/`;
