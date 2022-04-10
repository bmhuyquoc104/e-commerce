import styled from "styled-components";
import { motion } from "framer-motion";

import { MoonStarsFill } from "@styled-icons/bootstrap/MoonStarsFill";
import { SunFill } from "@styled-icons/bootstrap/SunFill";

const GreyBlueMoon = styled(MoonStarsFill)`
  color: var(--clr_gb);
  width: 100%;
  height: 35px;
`;
const OrangeSunFill = styled(SunFill)`
  color: var(--clr_orange);
  width: 100%;
  height: 35px;
`;

export { GreyBlueMoon, OrangeSunFill };

export const StyledHeader = styled(motion.header)`
  display: flex;
  position: relative;
  gap: 3em;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  background-color: ${({ theme }) => theme.header.backgroundColor};

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
    /* color: var(--clr_gb); */
    color: ${({ theme }) => theme.header.li.color};
    font-size: var(--step-0);
    border: 2px solid transparent;
    padding: 0.5em 0 2em 0;
    :hover {
      cursor: pointer;
      border-bottom: 2px solid var(--clr_orange);
      color: ${({ theme }) => theme.header.li.hv_color};
    }
  }
  .push-right {
    position: relative;
    margin-left: auto;
    :hover {
      border: 2px solid transparent;
    }
  }

  .push-right .item-quantities {
    position: absolute;
    top: 3px;
    font-size: 0.7rem;
    left: 8px;
    color: var(--clr_w);
    padding: 0 0.8em;
    border-radius: 40px;
    background-color: var(--clr_orange);
  }

  .card-content-empty h4 {
    padding: 4em 0 3.5em 0;
    text-align: center;
    color: var(--clr_dark_graishBlue);
    font-size: clamp(0.8rem, 2.5vw, 0.9rem);
    border-top: 1px solid #ebebee;
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

  .cartContainer {
    position: fixed;
    right: 5vw;
    top: 9vh;
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: 42vh;
    background-color: #fefefe;
    background-color: ${({ theme }) =>
      theme.header.cartContainer.backgroundColor};
    border-radius: 10px;
    padding: 0 0 1.75em 0;
    box-shadow: 0 6px 25px 0 ${({ theme }) => theme.header.cartContainer.border};
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cart-title > h2 {
    padding: 1.5em;
    font-size: var(--step-0);
    color: ${({ theme }) => theme.header.cartTitle.color};
  }
  .card-content-top {
    display: flex;
    align-items: center;
    padding: 1.5em 1em;
    border-top: 1px solid #ebebee;
    gap: 1em;
  }

  .card-content-top img {
    height: 40px;
    border-radius: 3px;
  }
  .card-icon img {
    height: 15px;
  }

  .card-info {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4em;
  }

  .card-info > :first-child {
    width: 100%;
    font-size: clamp(0.8em, 2.5vw, 0.9rem);
    color: var(--clr_gb);
    font-weight: var(--fw_400);
  }

  .card-info > :nth-child(2) {
    display: flex;
    font-size: clamp(0.6em, 2.5vw, 0.75rem);
    gap: 0.5em;
    color: var(--clr_gb);
    font-weight: var(--fw_400);
  }

  button {
    padding: 1em 1.5em;
    width: 90%;
    border-radius: 5px;
    background-color: var(--clr_orange);
    color: #ffffff;
    text-align: center;
    border: none;
  }

  .menu-icon,
  .logo-mobile,
  .mobile-ul,
  .push-right.mobile {
    display: none;
  }

  @media (max-width: 1026px) {
    width: 90%;
    gap: 0.5em;
    & > :nth-child(2) {
      gap: 1em;
    }
    .push-right.desktop {
      display: none;
    }
    .push-right.mobile {
      display: block;
    }
  }

  @media (max-width: 768px) {
    justify-content: revert;
    align-items: center;
    padding: 0.5em 2em;
    gap: 0.5em;
    width: max(100%, 300px);

    & > :first-child {
      display: none;
    }
    .decorative,
    .push-right.desktop,
    .desktop-ul {
      display: none;
    }
    .menu-icon,
    .mobile-ul,
    .push-right.mobile,
    .logo-mobile {
      display: block;
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
      height: 35px;
    }
    .push-right img {
      height: 22px;
    }
    .push-right .item-quantities {
      top: -2px;
      left: 10px;
    }
  }

  @media (max-width: 660px) {
    .cartContainer {
      right: 0;
      left: 50%;
      transform: translate(-50%, 0%);
      top: 9vh;
      z-index: 2;
      width: 95%;
    }
  }
`;
export const StyledActiveNavbar = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  width: 60%;
  background-color: ${({ theme }) => theme.activeHeader.backgroundColor};
  gap: 3em;
  flex-direction: column;
  padding: 1.5em 2em;

  img {
    object-fit: cover;
    aspect-ratio: 1/1;
    width: 10%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  li {
    list-style-type: none;
    color: ${({ theme }) => theme.activeHeader.li.color};
    font-weight: var(--fw_700);
    border: none;
    :hover {
      border: none;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
