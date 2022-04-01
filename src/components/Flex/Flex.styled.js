import styled from "styled-components";

export const AbsoluteFlexContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  min-height: 100vh;
  z-index: 1;

  @media (min-width:768px){
      display: none;
  }
`;
