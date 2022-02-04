import './App.scss';
import StartScreen from "./components/StartScreen/StartScreen";
import MainMenu from "./pages/MainMenu/MainMenu";
import happyBackgroundMusic from './assets/sounds/happyBackgroundMusic.mp3'
import stoneGrind from './assets/sounds/stoneGrind.mp3'
import stoneFall from './assets/sounds/stoneFall.mp3'

import {useState} from "react";
import {easings, useTransition} from "react-spring";
import Microscope from "./components/Microscope/Microscope";
import Quiz from "./components/Quiz/Quiz";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

function App() {


    /* state */
    const [isStartScreenOnScreen, setStartScreenOnScreen] = useState(true);
    const [isMicroscopeOnScreen, setMicroscopeOnScreen] = useState(false);
    const [isMainMenuOnScreen, setMainMenuOnScreen] = useState(false);
    const [isQuizOnScreen, setQuizOnScreen] = useState(false);

    /* Sounds */
    const [bgMusicVolume, setBgMusicVolume] = useState(1);
    const bgMusic = new Audio(happyBackgroundMusic);
    bgMusic.loop = true;

    const stoneGrindSE = new Audio(stoneGrind);
    const stoneFallSE = new Audio(stoneFall);


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
        ? <StartScreen style={style} setStartScreenOnScreen={setStartScreenOnScreen} bgMusic={bgMusic} />
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
        onRest: () => {
            stoneGrindSE.pause();
            if(isMainMenuOnScreen){
                setTimeout(() => {
                    stoneFallSE.play();
                }, 100);

            }
        },

        onStart: () => {
            stoneGrindSE.play();
        }
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

    const location = useLocation();

    return (
      <>
          <div className="quizScreen screen">
              <AnimatePresence exitBeforeEnter>
                  <Routes location={location} key={location.pathname}>
                      <Route exact path="/" element={<StartScreen bgMusic={bgMusic} />} />
                      <Route path="/mainmenu" element={<MainMenu  />} />
                      <Route path="/microscope" element={<Microscope  />} />
                      <Route path="/quiz" element={<Quiz  />} />
                  </Routes>
              </AnimatePresence>
          </div>
          <div className="dragonScreen screen">
          </div>
      </>
    );
}

export default App;
