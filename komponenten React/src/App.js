import './App.css';

// Eine "Functional" Komponente in React besteht aus einer Funktion mit einem Return-Statement, die als Ergebnis eine HTML-Struktur auf Basis von JSX zurückgibt.
// In der Regel werden Komponenten in einzelne Dateien unterteilt, der Funktionsname entspricht dem Dateinamen.
// Durch einen Import der Komponente bzw. der Funktion kann diese in einen anderen JSX Code integriert werden. Bei Aufruf des Elements im JSX Code wird die Funktion aufgerufen und liefert einen HTML-Code zurück.

function App() {
  // Hier können vorbereitende Dinge passieren

  return (
    <div className="App">
      <h1>Headline</h1>
      <p>Navbar</p>
      <p style={{height: "250px"}}>
        <h2>Seite 1</h2>
        <img alt="cat1" style={{height: "200px"}} src="https://thatcopy.github.io/catAPI/imgs/jpg/96aff96.jpg"/>
      </p>
      <p style={{height: "250px"}}>
        <h2>Seite 2</h2>
        <img alt="cat2" style={{height: "200px"}} src="https://thatcopy.github.io/catAPI/imgs/jpg/6554b20.jpg"/>
      </p>
      <p>Footer</p>
    </div>
  );
}

export default App;

// Überführung in Komponenten
// mit Parameter (Props)
// React Router URL

