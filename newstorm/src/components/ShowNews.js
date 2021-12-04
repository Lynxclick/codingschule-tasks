/*
import React from 'react'

function ShowNews() {
    return (
        <div>
            Test
        </div>
    )
}

export default ShowNews

*/

import React from 'react'
import styled from 'styled-components'

function ShowNews() {
    return (
    <NewsContainer>
       <News>
           Hier stehen die News
       </News>
        <News>
        Hier stehen die News
        </News>
        <News>
        Hier stehen die News
        </News>
    </NewsContainer>
    )
}

export default ShowNews

const NewsContainer = styled.div`
`

const News = styled.div`
border: 2px dashed #012340;
`