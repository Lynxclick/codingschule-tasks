import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Navigation>
            <Flexbox>
            <ModeSwitch>
                <button>Switch Light/Dark Mode</button>
            </ModeSwitch>

           
           <SearchBar> 
        <SearchBarInput placeholder="News durchsuchen"></SearchBarInput>
            </SearchBar>

            <EmptyBox>
                Text
            </EmptyBox>
            </Flexbox>

        </Navigation>
    )
}

export default Header

const Navigation = styled.div`
    background-color: #49A69C;
    position: fixed;
    text-align: center;
    margin: 0;
    padding: 0;
    height: 3rem;
    width: 100%;
    top:0;
`

const Flexbox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ModeSwitch = styled.div`
    background color: grey;
    display: flex;
    justify-content: left;
`

const SearchBar = styled.div`
    background color: grey;
    display: flex;
    justify-content: center;
`

const SearchBarInput = styled.input`
    text-align: center;
`

const EmptyBox = styled.div`
    background-color: #49A69C;
    color: #49A69C;
    width: 20%;
    // border: 2px solid #012340;
`