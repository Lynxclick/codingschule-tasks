import React from 'react';
import styled from 'styled-components';
import NewsWidget from './NewsWidget';
import AddNews from './AddNews';
import ShowNews from './ShowNews';
import Advert from './Advert';


function Main() {
    return (
        <AppMain>
            <Column1>
                <NewsWidget />
            </Column1>

            <Column2>
                <AddNews />
                <ShowNews />
            </Column2>

            <Column3>
                <Advert />
            </Column3>
        </AppMain>
    )
}

export default Main

const AppMain = styled.div`
background-color: #9BB1BF;
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 3rem;
margin-bottom: 5rem;
width: 100%;
`

const Column1 =styled.div`
border: 2px solid #012340;
min-width: 33%;
height: 100%;
`

const Column2 =styled.div`
/* border: 2px solid #012340; */
min-width: 33%;
height: 100%;
`

const Column3 =styled.div`
border: 2px solid #012340;
min-width: 33%;
height: 100%;
`