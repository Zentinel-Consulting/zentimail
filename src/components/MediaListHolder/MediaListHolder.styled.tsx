import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
`;

export const InnerContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 20px 0;
  gap: 20px;
  
  /* Prevent shrinking */
  & > * {
    flex-shrink: 0;
  }
`;

export const GradientOverlay = styled.div<{ side: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  ${props => props.side}: 0;
  width: 50px;
  height: 100%;
  pointer-events: none;
  background: ${props => 
    props.side === 'left' 
      ? 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))'
      : 'linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))'
  };
`;
