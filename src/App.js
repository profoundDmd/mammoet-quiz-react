import './App.scss';
import StartScreen from "./components/StartScreen/StartScreen";
import MainMenu from "./pages/MainMenu/MainMenu";
import happyBackgroundMusic from './assets/sounds/happyBackgroundMusic.mp3'
import stoneFall from './assets/sounds/stoneFall.mp3'

import {useState} from "react";
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

    const [isStartScreenOnScreen, setStartScreenOnScreen] = useState(true);

    const transition = useTransition(isStartScreenOnScreen, {
        from: { opacity: 0},
        enter: { opacity: 1},
        leave: { opacity: 0},
        config: {
            duration: 1000
        },
        onRest: () => {
            if(!isStartScreenOnScreen){
                console.log("slide in main menu");
            }
        }
    });

    const startScreen = transition((style, item) => item?
        <animated.div style={style}>
            <MainTitle />
            <Button type="stone" text="Welkom!!" clickEvent={() => setStartScreenOnScreen(!isStartScreenOnScreen)} />
        </animated.div>
        : ""
    );

    return (
      <div>
          <div className="quizScreen screen">
              {startScreen}
          </div>
          <div className="dragonScreen screen">
          </div>
      </div>
    );
}

export default App;
