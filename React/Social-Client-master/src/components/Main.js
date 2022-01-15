import React from 'react'

import styled from 'styled-components'

import Input from './Input'
import Post from './Post'

import { useAppContext } from '../appContext'

function Main({user}) {
    const [posts] = useAppContext()
   
    return  (
        <MainContainer>
            <Input user={user} />
            {posts.map(post => <Post key={post.id} post={post} />)}
        </MainContainer>
    )
}

export default Main

const MainContainer = styled.div`
    grid-area: Main;
    /*box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`