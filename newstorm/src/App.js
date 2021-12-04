import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled from "styled-components";

function App() {

  //  Variante 1
  const user = undefined
  // if(!user) {
  //   return (
  //     <div>Nicht angemeldet</div>
  //   )
  // }
  
  return (
  
  
      <AppContainer>
    
        <Header/>
        <Main/>
        <Footer/>
  
      </AppContainer>
    
  
    );
  }
  
  export default App;
  
  const AppContainer = styled.div`
  /* border: 5px solid green;  */
  background-color: #5EB5BF;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  `
  
  
  
  
  // return
  /* <div>
  {user ? <div>Wahr</div> : <div>falsch</div> }
  </div> */