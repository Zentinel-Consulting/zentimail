'use client';
import React from 'react';
import {
  MainContainer,
  ButtonsContainer,
} from './Toolbar.styled.tsx';

interface ToolbarProps {
  children: React.ReactNode;
}
export const Toolbar: React.FC<ToolbarProps> = ({
  children,
}) => {
  return(
    <MainContainer>
      <ButtonsContainer>
        {children}
      </ButtonsContainer>
    </MainContainer>
  );
}
