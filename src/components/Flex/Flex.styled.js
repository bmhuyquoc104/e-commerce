import styled from "styled-components";

export const AbsoluteFlexContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({theme}) => theme.flex.backgroundColor};
  min-height: 100vh;
  z-index: 1;

  @media (min-width:768px){
      display: none;
  }
`;
