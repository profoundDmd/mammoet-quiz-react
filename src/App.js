import './App.scss';
import StartScreen from "./components/StartScreen/StartScreen";
import MainMenu from "./pages/MainMenu/MainMenu";
import happyBackgroundMusic from './assets/sounds/happyBackgroundMusic.mp3'

import {useState} from "react";

function App() {
    const [bgMusicVolume, setBgMusicVolume] = useState(1);
    const [mainMenuMarginTop, setMainMenuMarginTop] = useState("-70%");

    const bgMusic = new Audio(happyBackgroundMusic);
    bgMusic.loop = true;
    bgMusic.volume = bgMusicVolume;

  return (
      <div>
          <div className="quizScreen screen">
              <StartScreen bgMusic={bgMusic} setMainMenuMarginTop={setMainMenuMarginTop}/>
              <MainMenu mainMenuMarginTop={mainMenuMarginTop}/>
          </div>
          <div className="dragonScreen screen">

          </div>
      </div>


  );
}

export default App;
