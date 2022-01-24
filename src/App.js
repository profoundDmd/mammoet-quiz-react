import './App.scss';
import StartScreen from "./components/StartScreen/StartScreen";
import MainMenu from "./pages/MainMenu/MainMenu";
import happyBackgroundMusic from './assets/sounds/happyBackgroundMusic.mp3'

import {useState} from "react";
import {useSpring} from "react-spring";
import {CSSTransition} from "react-transition-group";
import Microscope from "./components/Microscope/Microscope";

function App() {
    const [inProp, setInProp] = useState(false);


    const [bgMusicVolume, setBgMusicVolume] = useState(1);
    const bgMusic = new Audio(happyBackgroundMusic);
    bgMusic.loop = true;
    bgMusic.volume = bgMusicVolume;

    const [startScreenOnScreen, setStartScreenOnScreen] = useState(true);
    const startScreenProps = useSpring({
        opacity: startScreenOnScreen ? 1 : 0,
    });

    const [mainMenuOnScreen, setMainMenuOnScreen] = useState(false);
    const mainMenuProps = useSpring({
        marginTop: mainMenuOnScreen ? "-270px" : "-70%",
        onStart: () => {
            console.log("on start");
        },
        onRest: () => {
            console.log("on rest");
        }
    });

    const r = () => {

    }

/*
    const toggleStartScreen = () => {
      if(startScreenDisplay === "none"){
          setDisplay("flex");
          setTimeout(() => setOpacity(1), 10);
      }else{
          setOpacity(0);
          setTimeout(() => setDisplay("none"), 1500);
      }
    }
*/
  return (
      <div>
          <div className="quizScreen screen">
              <StartScreen bgMusic={bgMusic} startScreenProps={startScreenProps} setStartScreenOnScreen={setStartScreenOnScreen} setMainMenuOnScreen={setMainMenuOnScreen}/>
              <MainMenu mainMenuProps={mainMenuProps} setStartScreenOnScreen={setStartScreenOnScreen} setMainMenuOnScreen={setMainMenuOnScreen}/>
              <Microscope/>
          </div>
          <div className="dragonScreen screen">
          </div>
      </div>
  );
}

export default App;
