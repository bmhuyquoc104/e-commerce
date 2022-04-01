import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  position: relative;
  gap: 3em;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  background-color: #fefefe;

  & > :nth-child(2) {
    display: flex;
    align-items: center;
    gap: 2em;
    flex-grow: 1;
  }

  &>:first-child{
    padding: 0.5em 0 2em 0;
  }

  li {
    list-style-type: none;
    color: var(--clr_gb);
    font-size: var(--step-0);
    border: 2px solid transparent;
    padding: 0.5em 0 2em 0;
    :hover {
      cursor: pointer;
      border-bottom: 2px solid var(--clr_orange);
      color: var(--clr_b)
    }
  }
  .push-right {
    margin-left: auto;
    :hover {
      border: 2px solid transparent;
    }
  }
  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    :hover{
        border:2px solid transparent;
    }
  }

  .avatar>:first-child{
    border:2px solid transparent;
  }

  .avatar:hover>:first-child{
      border-radius:50%;
      border:2px solid var(--clr_orange);
  }

  .avatar img {
    width: 100%;
    height: 50px;
    object-fit: cover;
  }

  .decorative{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 1.2em;
      border-bottom:1px solid #ebebee;
  }
  @media (max-width: 940px) {
    width: 100%;
  }
`;
