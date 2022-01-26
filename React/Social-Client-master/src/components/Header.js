import React from 'react'
import styled from 'styled-components'

function Header() {

    function refreshPage(){
        window.location.reload();
    } 
    
    return (
        <HeaderContainer>
            <TitleContainer>Header</TitleContainer>
            <Button onClick={refreshPage}>Logout</Button>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    grid-area: Header;
    background-color: #113044;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TitleContainer = styled.h2`
    color: white;
`

const Button = styled.div`
    background-color: #FF5C5C;
    padding: 5px 15px;
    border-radius: 5px;
    color: white;
    font-size: 0.8em;
    font-weight: bold;
    cursor: pointer;

    &:hover {
    background-color: #113044;
    }
`