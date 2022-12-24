import {useState} from 'react'
import styled from 'styled-components'

import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'

import { AppContextProvider } from './appContext'

function App() {
  const [user, setUser] = useState()
  
  return (
    <AppContextProvider>
      <AppContainer>
        <Header />
        {user ?
        <Main user={user} />
        :
        <Login setUser={setUser}/>
        }
        <Footer />
      </AppContainer>
    </AppContextProvider>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  display: grid; 
  grid-template-columns: 0.8fr 1.4fr 0.8fr; 
  grid-template-rows: 80px 1fr 50px; 
  gap: 20px 0px; 
  grid-template-areas: 
    "Header Header Header"
    ". Main ."
    "Footer Footer Footer"; 

    @media screen and (max-width: 768px) {
      grid-template-columns: 0.05fr 1fr 0.05fr; 
    }
`