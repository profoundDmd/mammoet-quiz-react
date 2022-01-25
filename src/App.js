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
    const startScreenProps = useSpring({
        opacity: startScreenOnScreen ? 1 : 0,
    });

    const [shakeAnimation, setShakeAnimation] = useState("");
    const [mainMenuOnScreen, setMainMenuOnScreen] = useState(false);
    const mainMenuProps = useSpring({
        marginTop: mainMenuOnScreen ? "-270px" : "-1200px",
        config: {
            duration: 2100,
            easing: easings.easeInOutQuart,
        },
        onRest: () => {
            if(mainMenuOnScreen){
                new Audio(stoneFall).play();
                setShakeAnimation("shake");
            }
        },
    });

    const [microscopeOnScreen, setMicroscopeOnScreen] = useState(false);
    const microscopeProps = useSpring({
        opacity: microscopeOnScreen ? 1 : 0,
        visibility: microscopeOnScreen ? "visible" : "hidden",
    });

    const [quizOnScreen, setQuizOnScreen] = useState(false);
    const quizProps = useSpring({
        opacity: quizOnScreen ? 1 : 0,
        visibility: quizOnScreen ? "visible" : "hidden",
    });

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
              <MainMenu mainMenuProps={mainMenuProps} shakeAnimation={shakeAnimation} setStartScreenOnScreen={setStartScreenOnScreen} setMainMenuOnScreen={setMainMenuOnScreen} setMicroscopeOnScreen={setMicroscopeOnScreen} setQuizOnScreen={setQuizOnScreen}/>
              <Microscope microscopeProps={microscopeProps} setMicroscopeOnScreen={setMicroscopeOnScreen} setMainMenuOnScreen={setMainMenuOnScreen}/>
              <Quiz quizProps={quizProps} setQuizOnScreen={setQuizOnScreen} setMainMenuOnScreen={setMainMenuOnScreen}/>

          </div>
          <div className="dragonScreen screen">
          </div>
      </div>
  );
}

export default App;
