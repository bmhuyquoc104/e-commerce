import styled from 'styled-components'

export const StyledNavBar = styled.nav`
    display: flex;
    width: max(80%,300px);

    ul {
        display: flex;
        gap:1.5em;
        align-items:center;
        flex-grow:1;
    }
    
    li {
        list-style-type:none;
        color:var(--clr_gb);
    }
    .bottom-nav{
        margin-left:auto;
    }
    .avatar img{
        width:50%;
        object-fit:cover;
        aspect-ratio:1/1;
    }
`