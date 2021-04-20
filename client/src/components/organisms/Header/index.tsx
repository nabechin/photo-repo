import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../atom/Button";
import Dropzone from "react-dropzone";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "../../atom/Modal";
import { ImageDrop } from "../../atom/ImageDrop";

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
            {isOpen && (
              <Modal>
                <ModalOverLay>
                  <ModalContent>
                    <ModalHeader>
                      <CloseButton onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon
                          icon={faTimes}
                          size="lg"
                        ></FontAwesomeIcon>
                      </CloseButton>
                    </ModalHeader>
                    <ModalBody>
                      <ImageDrop></ImageDrop>
                    </ModalBody>
                    <ModalFooter>
                      <Button>Upload</Button>
                    </ModalFooter>
                  </ModalContent>
                </ModalOverLay>
              </Modal>
            )}
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

const ModalOverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 5%;
  left: 20%;
  right: 20%;
  bottom: 5%;
  border: 1px solid #ccc;
  background: #fff;
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
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

const CloseButton = styled.button`
  color: inherit;
`;