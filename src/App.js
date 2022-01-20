import './App.scss';
import StartScreen from "./components/StartScreen/StartScreen";
import MainMenu from "./pages/MainMenu/MainMenu";
import happyBackgroundMusic from './assets/sounds/happyBackgroundMusic.mp3'

import {useState} from "react";
import {useSpring} from "react-spring";

function App() {
    const [bgMusicVolume, setBgMusicVolume] = useState(1);
    const bgMusic = new Audio(happyBackgroundMusic);
    bgMusic.loop = true;
    bgMusic.volume = bgMusicVolume;

    const [mainMenuStyles, setMainMenuStyles] = useSpring(()=> ({ marginTop: "-70%"}));
    const [startScreenOpacity, setOpacity] = useState(1);
    const [startScreenDisplay, setDisplay] = useState("flex");

    togglestartscreen-methode hier zetten en doorgeven aan mainmenu

  return (
      <div>
          <div className="quizScreen screen">
              <StartScreen bgMusic={bgMusic} setStyles={setMainMenuStyles}/>
              <MainMenu styles={mainMenuStyles} setStyles={setMainMenuStyles}/>
          </div>
          <div className="dragonScreen screen">

          </div>
      </div>


  );
}

export default App;
