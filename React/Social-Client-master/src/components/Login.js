import React, {useState} from 'react'
import styled from 'styled-components'

function Login({setUser}) {
    const [username, setUsername] = useState("")

    function handleLogin(e) {
        console.log(username)
        setUser(username)
    }

    return (
        <LoginContainer>
            <input value={username} onChange={(e) => setUsername(e.target.value)}/>
            <button onClick={handleLogin}>Rein da!</button>
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