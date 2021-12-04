/*import React from 'react'

function Footer() {
    return (
        <div>
            Test
        </div>
    )
}

export default Footer
*/

import React from 'react'
import styled from "styled-components";
import Advert from './Advert';

function Footer() {
    return (
        <AppFooter>
Footer
<Advert/>

        </AppFooter>
    )
}

export default Footer

const AppFooter = styled.div`
border: 2px solid #012340;
height: 5rem;
width: 100%;
position: absolute;
bottom: 0;
`