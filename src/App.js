import './App.scss';
import Button from "./components/Button/Button";
import MainTitle from "./components/MainTitle/MainTitle";

function App() {
  return (
    <div className="start">
        <div className="startContent">
            <MainTitle/>
            <Button text="START" type="stone" clickEvent={() => {
                console.log("clicked");
            }}/>
        </div>
    </div>
  );
}

export default App;
