import React from 'react'
import styled from 'styled-components'

function Post({post}) {

    return (
        <PostContainer>
            <PostInfos>
                {post.author}
            </PostInfos>
            <PostText>
                {post.text}
            </PostText>
        </PostContainer>
    )
}

export default Post

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 15px;
    border-radius: 5px;
    margin-top: 10px;
    width: 70%;
`

const PostInfos = styled.div`
    font-size: 0.8rem;
    font-weight: bold;
`

const PostText = styled.div`
    font-size: 0.8rem;
`