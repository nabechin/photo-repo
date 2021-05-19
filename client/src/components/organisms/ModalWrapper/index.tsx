import React from 'react';
import styled from 'styled-components';

import { Modal } from '../../atom/Modal';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
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
              {props.children}
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
