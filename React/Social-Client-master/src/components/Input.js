import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import App from "../App"

import {useAppContext} from '../appContext'

// Controlled Components

function Input({user}) {
    const {addPost} = useAppContext()
    const [postText, setPostText] = useState()
    //const [user] = useState()

    // useEffect(() => {
    //     async function writePosts() {
    //         // Abfrage der API (HTTP)
    //         const owmURL = "http://127.0.0.1:8000/api2/posts"
    //         const result = await fetch(owmURL, {
    //             method: 'POST',
    //             body: JSON.stringify({customer: "Kane"})
    //         });
    //         // Parsen der JSON Informationen (Erzeugt ein Promise Objekt)
    //         const data = await result.json()
    //         //console.log(data)
    //         setPostText(data)
    //     }
    //     writePosts();
    // }, [])

    function savePost() {
//        addPost({author: "Demo", text: postText})
        fetch("http://127.0.0.1:8000/api2/posts", {
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify({author: user, text: postText})
        });
        setPostText("")
    }

    return (
        <InputContainer>
            <StyledTextarea maxlength="255" rows="4" placeholder={"Hallo " + user + ", was passiert heute?"} 
            value={postText} onChange={(e) => setPostText(e.target.value)} />
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