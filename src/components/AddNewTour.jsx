import {React,useState} from "react";
import "./AddNewTour.css";
import RightSide from './AdminComponents/RightSide';
import LeftSide from './AdminComponents/LeftSide';
function AddNewTour() {
  const [currentScene, setCurrentScene] = useState(null);
  return (
    <div className="container">
     <RightSide currentScene={currentScene} setCurrentScene={setCurrentScene} />
<LeftSide currentScene={currentScene} setCurrentScene={setCurrentScene} />
    </div>
  );
}

export default AddNewTour;
