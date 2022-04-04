import styled from "styled-components";

export const StyledMain = styled.main`
  width: max(70%, 650px);
  display: flex;
  padding: 2em 1em;
  gap: 8em;
  justify-content: space-between;

  & > * {
    width: max(100%, 500px);
  }
  .product-image {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }
  .product-feature {
    aspect-ratio: 1/1;
  }
  .product-side-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .product-side-container img {
    width: 22%;
    aspect-ratio: 1/1;
    border-radius: 10px;
    object-fit: contain;
  }
  .product-feature img {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 10px;
    object-fit: contain;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2em;
    gap: 1.75em;
  }

  .product-header {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .product-info .product-header h1 {
    color: var(--clr_orange);
    font-size: var(--step--1);
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .product-info .product-header h2 {
    color: var(--clr_b);
    font-size: var(--step-2);
    line-height: 1;
  }
  .product-info p {
    color: var(--clr_dark_graishBlue);
    font-size: var(--step--1);
    font-weight: var(--fw_400);
    line-height: 1.75;
  }
  .product-price {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1em;
  }
  .original-price {
    width: 100%;
    text-decoration: line-through;
    color: var(--clr_gb);
    font-size: var(--step--1);
  }

  .discount-price {
    font-size: var(--step-1);
  }
  .discount {
    background-color: var(--clr_paleOrange);
    color: var(--clr_orange);
    border-radius: 4px;
    padding: 0.2em 0.5em;
    font-weight: var(--fw_700);
    font-size: var(--step--1);
  }
  .button-container {
    display: flex;
    gap: 0.5em;
  }
  .operator-container {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    background-color: #f4f4fc;
  }
  .operator-container .quantity {
    font-size: var(--step-0);
  }
  .operand {
    color: var(--clr_orange);
    font-size: var(--step-1);
  }
  .button-container button {
    background-color: var(--clr_orange);
    border: none;
    padding: 1em;
    border-radius: 10px;
    box-shadow: 0 10px 5px 4px var(--clr_paleOrange);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    flex: 1.6;
  }
  .button-container button img {
    height: 15px;
    object-fit: cover;
  }
  .button-container button > p {
    color: var(--clr_w);
  }

  @media (max-width: 1026px) {
    gap: 1em;
  }
  @media (max-width: 660px) {
    flex-direction: column;
    width: max(100%, 500px);
    .product-image {
      display: none;
    }
    .product-info {
    }
    .product-info .product-header h2 {
      width: 25ch;    
      font-size: var(--step-3);

    }
    .product-info p {
      width: 56ch;
    }
    .product-price {
      flex-wrap: nowrap;
    }
    .original-price {
      text-align: right;
    }
    .button-container {
      flex-direction: column;
      gap: 1em;
    }
    .button-container > * {
      width: 100%;
    }
    .discount-price{
      font-size: var(--step-2);
    }
    .operator-container {
      padding: 1em 0;
    }
    .button-container button > p {
      width: revert;
    }
  }
  @media (max-width: 520px) {
    padding: 2em 3em;
    .product-info {
      width: max(100%, 300px);
    }
    .product-info .product-header h2 {
      width: 20ch;
      font-size: var(--step-4);

    }
    .product-info p {
      width: 40ch;
    }
    .discount-price{
      font-size: var(--step-3);
    }
  }
  
`;
