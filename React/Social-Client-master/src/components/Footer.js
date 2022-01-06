import React, {useState, useEffect} from 'react'

import styled from 'styled-components'

// Laden der ENV Variable
const city = process.env.REACT_APP_CITY;
const owm_key = process.env.REACT_APP_OWM;

function Footer() {
    const [temp, setTemp] = useState();
    
    useEffect(() => {
        async function getWeather() {
            // Abfrage der API (HTTP)
            const owmURL = "https://api.openweathermap.org/data/2.5/weather?q=" + encodeURI(city) + "&appid=" + owm_key + "&units=metric"
            const result = await fetch(owmURL);
            // Parsen der JSON Informationen (Erzeugt ein Promise Objekt)
            const data = await result.json()
            setTemp((Math.round(data.main?.temp * 10) / 10).toFixed(1))
        }
        getWeather();
    }, [])

    return (
        <FooterContainer>
            Temperatur in {city} {temp}°C
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    grid-area: Footer;
    background-color: #FF5C5C;
`