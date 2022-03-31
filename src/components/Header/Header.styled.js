import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  gap: 1em;
  align-items:center;
  width: max(80%,300px);
  &>:nth-child(2){
      flex-grow:1;
  }
`;
