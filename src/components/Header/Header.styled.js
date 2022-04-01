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

  & > :nth-child(1) {
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
      color: var(--clr_b);
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
    :hover {
      border: 2px solid transparent;
    }
  }

  .avatar > :first-child {
    border: 2px solid transparent;
  }

  .avatar:hover > :first-child {
    border-radius: 50%;
    border: 2px solid var(--clr_orange);
  }

  .avatar img {
    width: 100%;
    height: 50px;
    object-fit: cover;
  }

  .decorative {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1.2em;
    border-bottom: 1px solid #ebebee;
  }

  .menu-icon,
  .logo-mobile,
  .mobile-ul {
    display: none;
  }

  @media (max-width: 940px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    justify-content: revert;
    align-items: center;
    padding: 0.5em 2em;
    gap: 1em;
    width: max(100%, 350px);
    & > :first-child {
      display: none;
    }
    .decorative,
    .desktop-ul {
      display: none;
    }
    .menu-icon,
    .mobile-ul,
    .logo-mobile {
      display: block;
      padding: 0.5em 0 2em 0;
    }
    .mobile-ul {
      display: flex;
      align-items: center;
      gap: 1em;
      flex-grow: 1;
    }
    li {
      padding: 0;
    }
    .avatar img {
      height: 25px;
    }
  }
`;
export const StyledActiveNavbar = styled.ul`
  background-color:var(--clr_w);
`;
