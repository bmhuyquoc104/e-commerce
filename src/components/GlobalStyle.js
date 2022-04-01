import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    /* Primary color */
    --clr_orange:hsl(26, 100%, 55%);
    --clr_paleOrange:hsl(25, 100%, 94%);

    /* Neural color */
    --clr_vark_blue : hsl(220, 13%, 13%);
    --clr_dark_graishBlue:hsl(219, 9%, 45%);
    --clr_gb:hsl(220, 14%, 75%);
    --clr_w:hsl(0, 0%, 100%);
    --clr_b:hsl(0, 0%, 0%);

    /* Font */
    --font_size:1rem;
    --fw_400:400;
    --fw_700:700;

    /* Font size */
    --step--2: clamp(0.44rem, calc(0.76rem + -0.35vw), 0.69rem);
    --step--1: clamp(0.67rem, calc(0.81rem + -0.16vw), 0.78rem);
    --step-0: clamp(0.88rem, calc(0.84rem + 0.18vw), 1.00rem);
    --step-1: clamp(0.98rem, calc(0.84rem + 0.74vw), 1.50rem);
    --step-2: clamp(1.11rem, calc(0.78rem + 1.63vw), 2.25rem);
    --step-3: clamp(1.25rem, calc(0.64rem + 3.04vw), 3.38rem);
    --step-4: clamp(1.40rem, calc(0.36rem + 5.23vw), 5.06rem);
    --step-5: clamp(1.58rem, calc(-0.14rem + 8.60vw), 7.59rem);

}

*,*::after,*::before{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Kumbh Sans', sans-serif;
    
}





#root{
    display: flex;
    justify-content:center;
    align-items:center;
    background-color:var(--clr_w);
    width:max(100%,600px);
}

`;
