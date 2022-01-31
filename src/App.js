import './App.scss';
import StartScreen from "./components/StartScreen/StartScreen";
import MainMenu from "./pages/MainMenu/MainMenu";
import happyBackgroundMusic from './assets/sounds/happyBackgroundMusic.mp3'
import stoneFall from './assets/sounds/stoneFall.mp3'

import {useState} from "react";
import {useSpring, easings} from "react-spring";
import Microscope from "./components/Microscope/Microscope";
import Quiz from "./components/Quiz/Quiz";

function App() {
    const [inProp, setInProp] = useState(false);


    const [bgMusicVolume, setBgMusicVolume] = useState(1);
    const bgMusic = new Audio(happyBackgroundMusic);
    bgMusic.loop = true;
    bgMusic.volume = bgMusicVolume;

    const [startScreenOnScreen, setStartScreenOnScreen] = useState(true);

    const [mainMenuOnScreen, setMainMenuOnScreen] = useState(false);
    const [mainMenuSpringProps, setMainMenuSpringProps] = useSpring(() => ({
        marginTop: mainMenuOnScreen ? "-270px" : "-1200px",
    }));

    const [microscopeOnScreen, setMicroscopeOnScreen] = useState(false);
    const microscopeSpringProps = useSpring({
        opacity: microscopeOnScreen ? 1 : 0,
        visibility: microscopeOnScreen ? "visible" : "hidden",
    });

    const [quizOnScreen, setQuizOnScreen] = useState(false);
    const quizSpringProps = useSpring({
        opacity: quizOnScreen ? 1 : 0,
        visibility: quizOnScreen ? "visible" : "hidden",
    });
    const quizProps = {
        quizOnScreen,
        setQuizOnScreen,
        quizSpringProps
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
              <StartScreen
                  bgMusic={bgMusic}
                  startScreenOnScreen={startScreenOnScreen}
                  setStartScreenOnScreen={setStartScreenOnScreen}
                  setMainMenuOnScreen={setMainMenuOnScreen}
              />

              <MainMenu
                  mainMenuSpringProps={mainMenuSpringProps}
                  mainMenuOnScreen={mainMenuOnScreen}
                  setMainMenuSpringProps={setMainMenuSpringProps}
                  setStartScreenOnScreen={setStartScreenOnScreen}
                  setMainMenuOnScreen={setMainMenuOnScreen}
                  setMicroscopeOnScreen={setMicroscopeOnScreen}
                  setQuizOnScreen={setQuizOnScreen}
              />

              <Microscope
                  microscopeSpringProps={microscopeSpringProps}
                  setMicroscopeOnScreen={setMicroscopeOnScreen}
                  setMainMenuOnScreen={setMainMenuOnScreen}
              />

              <Quiz
                  quizSpringProps={quizSpringProps}
                  setQuizOnScreen={setQuizOnScreen}
                  setMainMenuOnScreen={setMainMenuOnScreen}
              />

          </div>
          <div className="dragonScreen screen">
          </div>
      </div>
  );
}

export default App;
