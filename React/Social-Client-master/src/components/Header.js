import React from 'react'
import styled from 'styled-components'

function Header() {
    
    return (
        <HeaderContainer>
            <TitleContainer>Header</TitleContainer>
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