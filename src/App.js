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

    /* state */
    const [isStartScreenOnScreen, setStartScreenOnScreen] = useState(true);
    const [isMicroscopeOnScreen, setMicroscopeOnScreen] = useState(false);
    const [isMainMenuOnScreen, setMainMenuOnScreen] = useState(false);
    const [isQuizOnScreen, setQuizOnScreen] = useState(false);


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
        ? <MainMenu style={style} setStartScreenOnScreen={setStartScreenOnScreen} setMainMenuOnScreen={setMainMenuOnScreen} setMicroscopeOnScreen={setMicroscopeOnScreen} setQuizOnScreen={setQuizOnScreen}/>
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

    /* quiz */
    const transitionQuiz = useTransition(isQuizOnScreen, {
        from: { opacity: 0},
        enter: { opacity: 1},
        leave: { opacity: 0},
        config: {
            duration: 1200
        },
    });
    const quiz = transitionQuiz((style, item) => item
        ? <Quiz style={style} setQuizOnScreen={setQuizOnScreen} setMainMenuOnScreen={setMainMenuOnScreen}/>
        : ""
    );

    return (
      <>
          <div className="quizScreen screen">
              {startScreen}
              {mainMenu}
              {microscope}
              {quiz}
          </div>
          <div className="dragonScreen screen">
          </div>
      </>
    );
}

export default App;
