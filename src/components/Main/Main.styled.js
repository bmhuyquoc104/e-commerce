import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: yellow;
  width: 80%;
  display: flex;
  padding: 2em 1em;
  gap: 2em;
  & > * {
    width: 100%;
  }
`;
