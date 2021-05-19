import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../atom/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ModalWrapper } from '../../organisms/ModalWrapper';
import { ImageDrop } from '../../atom/ImageDrop';

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Wrapper>
        <ContentsRow>
          <Logo>Photo Repo</Logo>
          <Contents>
            <Button onClick={() => setIsOpen(true)}>Photo</Button>
            <Button onClick={() => setIsOpen(true)}>Draw</Button>
            <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
              <ModalHeader>
                <CloseButton onClick={() => setIsOpen(false)}>
                  <FontAwesomeIcon icon={faTimes} size="lg"></FontAwesomeIcon>
                </CloseButton>
              </ModalHeader>
              <ModalBody>
                <ImageDrop />
              </ModalBody>
              <ModalFooter>
                <Button>Upload</Button>
              </ModalFooter>
            </ModalWrapper>
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

const CloseButton = styled.button`
  color: inherit;
`;

const ModalHeader = styled.div`
  height: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: start;
`;

const ModalBody = styled.div`
  height: 80%;
`;

const ModalFooter = styled.div`
  height: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
