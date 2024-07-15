"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  MainContainer, 
  ContentContainer,
  UpperContainer,
  MiddleContainer,
  BottomContainer,
  UCChilds,
} from './BaseCard.styled.tsx';
import { Button } from "../Button/Button.tsx";
import { ArrowsAltOutlined, ShrinkOutlined } from '@ant-design/icons';

interface BaseCardProps {
  width?: string;
  minHeight?: string;
  maxHeight?: string;
  children?: React.ReactNode;
}
export const BaseCard: React.FC<BaseCardProps> = ({
  width = '300px',
  minHeight = '400px',
  maxHeight = '600px',
  children
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentOverflows, setContentOverflows] = useState(false);
  const middleContainerRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMiddleContainerClick = () => {
    if (contentOverflows && !isExpanded) {
      setIsExpanded(true);
    }
  };

  const checkOverflow = () => {
    if (middleContainerRef.current) {
      setContentOverflows(
        middleContainerRef.current.scrollHeight > middleContainerRef.current.clientHeight
      );
    }
  };

  useEffect(() => {
    checkOverflow();
    // Add a small delay to ensure the transition has completed
    const timeoutId = setTimeout(checkOverflow, 300);
    return () => clearTimeout(timeoutId);
  }, [isExpanded, children]);

  return(
    <MainContainer width={width} height={isExpanded ? maxHeight : minHeight}>
      <ContentContainer>
        <UpperContainer>
          <UCChilds></UCChilds>
          <UCChilds>
            <Button icon={isExpanded ? <ShrinkOutlined /> : <ArrowsAltOutlined />} type="Icon" onClick={toggleExpand} />
          </UCChilds>
        </UpperContainer>
        <MiddleContainer 
          onClick={handleMiddleContainerClick}
          isExpanded={isExpanded}
          ref={middleContainerRef}
        >
          {children}
        </MiddleContainer>
        <BottomContainer>
        </BottomContainer>
      </ContentContainer>
    </MainContainer>
  );
}
