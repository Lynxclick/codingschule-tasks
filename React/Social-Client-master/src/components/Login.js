import React, {useState, setState} from 'react'
import styled from 'styled-components'
import { useAppContext } from '../appContext'

function Login({setUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setToken} = useAppContext()

    async function handleLogin(e) {
        

        const result = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            username: username, password: password
            })
            
        })
       
        console.log(result)

        if (result.status === 401) {
            alert("Falscher Benutzername oder falsches Passwort")
        }
        else {
            const data = await result.json()
            //console.log(result)
            setToken(data)
            setUser(username)
    
            //postToken(data)
        }
    }

    return (
        <LoginContainer>
            <Input placeholder='Benutzername' value={username} onChange={(e) => setUsername(e.target.value)}></Input>
            <Input placeholder='Passwort' value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            <Button onClick={handleLogin}>Rein da!</Button>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    grid-area: Main;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const Input = styled.input`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 15px;
    border-radius: 5px;
    width: 70%;    
`