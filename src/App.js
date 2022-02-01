import './App.scss';
import StartScreen from "./components/StartScreen/StartScreen";
import MainMenu from "./pages/MainMenu/MainMenu";
import happyBackgroundMusic from './assets/sounds/happyBackgroundMusic.mp3'
import stoneFall from './assets/sounds/stoneFall.mp3'

import {useEffect, useState} from "react";
import {useSpring, easings, animated, useTransition} from "react-spring";
import Microscope from "./components/Microscope/Microscope";
import Quiz from "./components/Quiz/Quiz";
import MainTitle from "./components/MainTitle/MainTitle";
import Button from "./components/Button/Button";

function App() {

    const [bgMusicVolume, setBgMusicVolume] = useState(1);
    const bgMusic = new Audio(happyBackgroundMusic);
    bgMusic.loop = true;
    bgMusic.volume = bgMusicVolume;

    useEffect(() => {
        console.log("render");
    });

    /* state */
    const [isStartScreenOnScreen, setStartScreenOnScreen] = useState(true);
    const [isMicroscopeOnScreen, setMicroscopeOnScreen] = useState(false);
    const [isMainMenuOnScreen, setMainMenuOnScreen] = useState(false);


    /* startscreen */
    const transitionStartScreen = useTransition(isStartScreenOnScreen, {
        from: { opacity: 0},
        enter: { opacity: 1},
        leave: { opacity: 0},
        config: {
            duration: 1200
        },
        onRest: () => {
            if(!isStartScreenOnScreen){
                setMainMenuOnScreen( true);
            }
        }
    });
    const startScreen = transitionStartScreen((style, item) => item
        ? <StartScreen style={style} clickEvent={() => setStartScreenOnScreen(!isStartScreenOnScreen)} />
        : ""
    );


    /* microscope */
    const transitionMicroscope = useTransition(isMicroscopeOnScreen, {
        from: { opacity: 0},
        enter: { opacity: 1},
        leave: { opacity: 0},
        config: {
            duration: 1200
        },
    });
    const microscope = transitionMicroscope((style, item) => item
        ? <Microscope style={style} setMicroscopeOnScreen={setMicroscopeOnScreen} setMainMenuOnScreen={setMainMenuOnScreen}/>
        : ""
    );

    /* mainmenu */
    const transitionMainMenu = useTransition(isMainMenuOnScreen, {
        from: { marginTop: "-60%" },
        enter: { marginTop: "-15%" },
        leave: { marginTop: "-60%" },
        config: {
            duration: 1600,
            easing: easings.easeInOutQuart
        },
    });
    const mainMenu = transitionMainMenu((style, item) => item
        ? <MainMenu style={style} setStartScreenOnScreen={setStartScreenOnScreen} setMainMenuOnScreen={setMainMenuOnScreen} setMicroscopeOnScreen={setMicroscopeOnScreen}/>
        : ""
    );

    return (
      <>
          <div className="quizScreen screen">
              {startScreen}
              {mainMenu}
              {microscope}
          </div>
          <div className="dragonScreen screen">
          </div>
      </>
    );
}

export default App;
