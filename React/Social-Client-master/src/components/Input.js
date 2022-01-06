import React, {useState} from 'react'
import styled from 'styled-components'

import {useAppContext} from '../appContext'

// Controlled Components

function Input() {
    const [, addPost] = useAppContext()
    const [postText, setPostText] = useState()

    function savePost() {
        addPost({author: "Demo", text: postText})
        setPostText("")
    }

    return (
        <InputContainer>
            <StyledTextarea maxlength="255" rows="4" placeholder="Was passiert heute?" value={postText} onChange={(e) => setPostText(e.target.value)} />
            <ButtonContainer>
                <Button onClick={savePost}>Post</Button>
            </ButtonContainer>
        </InputContainer>
    )
}

export default Input

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 15px;
    border-radius: 5px;
    width: 70%;    
`
const StyledTextarea = styled.textarea`
    width: 100%;
    border: none;
    resize: none;
    outline: none;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
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