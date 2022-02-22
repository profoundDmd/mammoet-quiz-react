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
import Clouds from "./components/Cloud/Clouds";

function App() {


    /* Sounds */
    const [bgMusicVolume, setBgMusicVolume] = useState(1);
    const bgMusic = new Audio(happyBackgroundMusic);
    bgMusic.loop = true;

    const location = useLocation();

    return (
      <>
          <div className="quizScreen screen">
              <Clouds/>
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
