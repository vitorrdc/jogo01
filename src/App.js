import InitialScreen from "./components/initialScreen";
import DificultyMode from "./components/dificultyMode";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Game from "./components/game";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<InitialScreen/>}/>
        <Route path="/dificultymode" exact element={<DificultyMode/>}/>
        <Route path="/game/:id" exact element={<Game/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
