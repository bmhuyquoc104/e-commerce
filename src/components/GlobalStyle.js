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


}

*,*::after,*::before{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Kumbh Sans', sans-serif;
    
}

img{
max-width:100%;
}

#root{
    min-height:100vh;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color:var(--clr_dark_gb);
    width: max(80%,300px);

}

`;
