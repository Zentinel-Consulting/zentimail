"use client";
import React, { useRef, useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import token_theme from "@/themes/theme.json";
import { MediaPreview } from "@/components";
import { 
  MainContainer,
  InnerContainer,
  ScrollContainer,
  GradientOverlay
} from "./MediaListHolder.styled.tsx";

interface ImageObject {
  src: string;
  fileName: string;
}

interface MediaListHolderProps {
  images: ImageObject[];
  cardWidth?: number;
}


export const MediaListHolder: React.FC<MediaListHolderProps> = ({ images, cardWidth = 250 }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftGradient(scrollLeft > 0);
      setShowRightGradient(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return(
    <ConfigProvider theme={token_theme}>
      <MainContainer>
        <InnerContainer>
          <ScrollContainer ref={scrollContainerRef}>
            {images.map((image, index) => (
              <MediaPreview 
                key={index}
                src={image.src} 
                fileName={image.fileName} 
                cardWidth={cardWidth}
              />
            ))}
          </ScrollContainer>
          {showLeftGradient && <GradientOverlay side="left" />}
          {showRightGradient && <GradientOverlay side="right" />}
        </InnerContainer>
      </MainContainer>
    </ConfigProvider>
  );
}
