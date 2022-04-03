import styled from "styled-components";

export const StyledMain = styled.main`
  width: 70%;
  display: flex;
  padding: 2em 1em;
  gap: 8em;
  justify-content: space-between;

  & > * {
    width: 100%;
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
    object-fit: cover;
  }
  .product-feature img {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 10px;
    object-fit: cover;
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
    letter-spacing:1.5px;
  }

  .product-info .product-header h2 {
    color: var(--clr_b);
    font-size: var(--step-2);
    line-height: 1;
  }
  .product-info p {
    color:var(--clr_dark_graishBlue);
    font-size: clamp(0.6rem,2.1vh,0.8rem);
    font-weight:var(--fw_400);
    line-height: 1.75;
  }
  .product-price{
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    gap:1em;
  }
  .original-price{
    width: 100%;
    text-decoration:line-through;
    color:var(--clr_gb);
    font-size: clamp(0.6rem,2.1vh,0.8rem);
  }
  
  .discount-price{
    font-size: clamp(1.5rem,2.1vh,2rem);
  }
  .discount{
    background-color: var(--clr_paleOrange);
    color:var(--clr_orange);
    border-radius:4px;
    padding:0.2em 0.5em;
    font-weight:var(--fw_700);
    font-size: clamp(0.6rem,2.1vh,0.8rem);
  }
  .button-container{
    display: flex;
    gap:0.5em;
  }
  .operator-container{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    border-radius:10px;
    background-color:#f4f4fc;
  }
  .operator-container .quantity{
    font-size: clamp(0.8rem,5vh,1rem);
  }
  .operand{
    color:var(--clr_orange);
    font-size: clamp(1.2rem,5vh,1.4rem);

  }
  .button-container button{
    background-color:var(--clr_orange);
    border:none;
    padding:1em;
    border-radius: 10px;
    box-shadow: 0 10px 5px 4px var(--clr_paleOrange);
    display: flex;
    justify-content:center;
    align-items:center;
    gap:1em;
    flex:1.6;
  }
  .button-container button img{
    height:15px;
    object-fit: cover;
  }
  .button-container button > p{
    color:var(--clr_w);
  }
`;
