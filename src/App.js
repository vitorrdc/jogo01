import InitialScreen from "./components/initialScreen";
import DificultyMode from "./components/dificultyMode";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Game from "./components/game";
import { ThemeProvider, useTheme } from "./components/themeContext";



function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<InitialScreen/>}/>
          <Route path="/dificultymode" exact element={<DificultyMode/>}/>
          <Route path="/game/:id" exact element={<Game/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
