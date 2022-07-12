import './App.scss';
import StartScreen from "./components/StartScreen/StartScreen";
import MainMenu from "./components/MainMenu/MainMenu";
import happyBackgroundMusic from './assets/sounds/happyBackgroundMusic.mp3'

import {useState} from "react";
import Microscope from "./pages/Microscope/Microscope";
import Quiz from "./pages/Quiz/Quiz";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Clouds from "./components/Clouds/Clouds";

function App() {

    /* Sounds */
    const [bgMusic] = useState(new Audio(happyBackgroundMusic));
    bgMusic.loop = true;

    const location = useLocation();

    return (
      <>
          <div className="quizScreen screen">
              <Clouds/>
              <AnimatePresence exitBeforeEnter>
                  <Routes location={location} key={location.pathname}>
                      <Route exact path="/" element={<StartScreen />} />
                      <Route path="/mainmenu" element={<MainMenu bgMusic={bgMusic}/>} />
                      <Route path="/microscope" element={<Microscope bgMusic={bgMusic}/>} />
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
