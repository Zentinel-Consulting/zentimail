import styled from "styled-components";

interface MainContainerProps {
  width: string;
  height: string;
}

export const MainContainer = styled.div<MainContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.1px solid;
  border-radius: 5px;
  background-color: transparent;
  width: ${props => props.width};
  height: ${props => props.height};
  transition: height 0.3s ease-in-out;
`;


export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px; // Fixed pixel height
  min-height: 30px; // Ensure it doesn't shrink below this height
  background-color: transparent;
`;
export const UCChilds = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50px;
  background-color: transparent;
`;

interface MiddleContainerProps {
  isExpanded: boolean;
}

export const MiddleContainer = styled.div<MiddleContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: calc(100% - 60px);
  background-color: transparent;
  overflow-y: ${props => props.isExpanded ? 'auto' : 'hidden'};
  cursor: ${props => props.isExpanded ? 'default' : 'pointer'};
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px; // Fixed pixel height
  min-height: 30px; // Ensure it doesn't shrink below this height
  background-color: #F8F9FD;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
