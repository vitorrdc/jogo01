import GameOne from "./components/gameOne";
import InitialScreen from "./components/initialScreen";
import DificultyMode from "./components/dificultyMode";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WaitingPage from "./components/waitingPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<InitialScreen/>}/>
        <Route path="/dificultymode" exact element={<DificultyMode/>}/>
        <Route path="/waitingpage" exact element={<WaitingPage/>}/>
        <Route path="/game01" exact element={<GameOne/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
