import InitialScreen from "./components/initialScreen";
import DificultyMode from "./components/dificultyMode";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WaitingPage from "./components/waitingPage";
import GameEasy from "./components/gameEasy";
import GameMedium from './components/gameMedium'
import GameHard from "./components/gameHard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<InitialScreen/>}/>
        <Route path="/dificultymode" exact element={<DificultyMode/>}/>
        <Route path="/waitingpage" exact element={<WaitingPage/>}/>
        <Route path="/gameeasy" exact element={<GameEasy/>}/>
        <Route path="/gamemedium" exact element={<GameMedium/>}/>
        <Route path="/gamehard" exact element={<GameHard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
