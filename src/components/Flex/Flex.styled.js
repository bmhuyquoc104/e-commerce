import styled from 'styled-components'

export const AbsoluteFlexContainer = styled.div`
position: absolute;
top: 0;
left: 0;
width:100%;
background-color:rgba(211,211,211,0.6);
min-height:100vh;
z-index:1;

.wrapper{
    min-height:100vh;
    display: flex;
    width: 60%;
    background-color:var(--clr_w);
    gap:3.5em;
    flex-direction:column;
    padding: 1.5em 2em;
}

.wrapper img{
    object-fit:cover;
    aspect-ratio:1/1;
    width:10%;
}

ul{
    display: flex;
    flex-direction:column;
    gap:1.5em;
}

li{
    list-style-type: none;
    color:var(--cl_b);
    font-weight:var(--fw_700);
}
`