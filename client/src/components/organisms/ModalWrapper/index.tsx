import React from "react";
import styled from "styled-components";
import { Button } from "../../atom/Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "../../atom/Modal";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalWrapper = (props: Props): JSX.Element => {
  return (
    <>
      {props.isOpen && (
        <Modal>
          <ModalOverLay onClick={() => props.setIsOpen(false)}>
            <ModalContent
              onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                e.stopPropagation()
              }
            >
              <ModalHeader>
                <CloseButton onClick={() => props.setIsOpen(false)}>
                  <FontAwesomeIcon icon={faTimes} size="lg"></FontAwesomeIcon>
                </CloseButton>
              </ModalHeader>
              <ModalBody>{props.children}</ModalBody>
              <ModalFooter>
                <Button>Upload</Button>
              </ModalFooter>
            </ModalContent>
          </ModalOverLay>
        </Modal>
      )}
    </>
  );
};

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
