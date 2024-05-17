import "./RightSide.css";
import { useState, useEffect } from "react";
import Download from "../Icons/Download.svg";
import Info from "../Icons/Info.svg";
import Save from "../Icons/Save.svg";
import Type from "../Icons/Type.svg";
import camera from "../Icons/camera-360.svg";
import img from "../Icons/img.png";
import trash from "../Icons/trach.svg";
import reload from "../Icons/reload.svg";
import edit from "../Icons/edit.svg";
import upload from "../Icons/upload.svg";
import { TbWashDryP } from "react-icons/tb";
import { useParams } from "react-router-dom";
import axios from "axios";

function Rightside({ currentScene, setCurrentScene }) {
  const handleSceneClick = (scene) => {
    console.log("fuck");
    setCurrentScene(scene);
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/tours/${tourID}/scenes/${id}`,
        { withCredentials: true }
      );
      getScenes();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id, newName) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/v1/tours/${tourID}/scenes/${id}`,
        { name: newName },
        { withCredentials: true }
      );
      getScenes(); // Refresh the scenes after update
    } catch (err) {
      console.log(err);
    }
  };
  const { tourID } = useParams();
  const [openTitleOrInput, setOpenTitleOrInput] = useState({});
  const [isHovered, setIsHovered] = useState({});
  const [isOpen, setIsOpen] = useState({});
  const [value, setValue] = useState({});
  const [sureMassege, setSureMassege] = useState({});
  const [txtEdit, ssetTxtEdit] = useState(false);

  const openTxtEdit = () => {
    ssetTxtEdit(!txtEdit);
  };

  const openSureMassege = (id) => {
    setSureMassege((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const openTheTitleOrTheInput = (id) => {
    setOpenTitleOrInput((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleMouseEnter = (id) => {
    setIsHovered((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setIsHovered((prevState) => ({ ...prevState, [id]: false }));
  };

  const hoverMouseEnter = (id) => {
    setIsOpen((prevState) => ({ ...prevState, [id]: true }));
  };

  const hoverMouseLeave = (id) => {
    setIsOpen((prevState) => ({ ...prevState, [id]: false }));
  };

  const handleChange = (id, event) => {
    setValue((prevState) => ({ ...prevState, [id]: event.target.value }));
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/tours/${tourID}`,
        formData,
        { withCredentials: true }
      );
      console.log(response.data.status);
      getScenes()
    } catch (err) {
      console.log(err);
    }
  };

  const [scenes, setScenes] = useState([]);
  const getScenes = async () => {
    try {
      console.log("Getting scenes");
      console.log(document.cookie);
      const response = await axios.get(
        `http://localhost:5000/api/v1/tours/${tourID}`,
        { withCredentials: true }
      );
      console.log(response.data.data.tour.scenesList);
      setScenes(response.data.data.tour.scenesList);
    } catch (error) {
      console.error("Getting scenes error:", error);
    }
  };

  useEffect(() => {
    getScenes();
  }, []);

  return (
    <div className="right-side">
      <div className="img-list-right-side">
        {scenes.map((scene) => (
          <div className="right-side-img" key={scene._id}  onClick={() => handleSceneClick(scene)}
          >
            <img
              src={`http://localhost:5000/${scene.imageLink}`}
              className="reload-img-rigthside"
              alt="Image"
              />
            <div className="right-side-button">
              <button
                className="img-list-right-side-button-delete"
                onClick={() => openSureMassege(scene._id)}
              >
                <img src={trash} className="deleteimg" alt="trash-icon" />
              </button>
              <button
                onMouseEnter={() => hoverMouseEnter(scene._id)}
                onMouseLeave={() => hoverMouseLeave(scene._id)}
                className="img-list-right-side-button-reload"
                onClick={() => handleUpdate(scene._id, value[scene._id])}
              >
                <img src={reload} className="reloadimg" />
              </button>
            </div>
            <h3
              onMouseEnter={() => handleMouseEnter(scene._id)}
              onMouseLeave={() => handleMouseLeave(scene._id)}
              onClick={() => openTheTitleOrTheInput(scene._id)}
              className={`right-side-img-title ${
                !openTitleOrInput[scene._id] ? "" : "close"
              }`}
            >
              {scene.name || value[scene._id] || "Name"}
            </h3>
            <div
              className={`sure-massege-right-side ${
                sureMassege[scene._id] ? "" : "close"
              }`}
              onClick={() => handleDelete(scene._id)}
            >
              <span className="sure-massege-right-side-span">Sure ?</span>
            </div>
            <div
              className={`edit-massege-right-side ${
                isHovered[scene._id] ? "" : "close"
              }`}
            >
              <div className="img-edit-right-side">
                <img src={edit} alt="edit-icon" className="icon-right-side" />
              </div>
              <span className="edit-massege-right-side-span">Edit</span>
            </div>
            <div
              className={`reload-massege-right-side ${
                isOpen[scene._id] ? "" : "close"
              }`}
            >
              <div className="img-reload-right-side">
                <img
                  src={upload}
                  alt="upload-icon"
                  className="icon-right-side"
                />
              </div>
              <span className="reload-massege-right-side-span">Update</span>
            </div>
            <div
              className={`change-name-right-side ${
                openTitleOrInput[scene._id] ? "" : "close"
              }`}
            >
              <input
                type="text"
                className={`change-right-side`}
                value={value[scene._id] || ""}
                onChange={(event) => handleChange(scene._id, event)}
              />
              <img
                src={Save}
                alt="Save-icon"
                onClick={() => openTheTitleOrTheInput(scene._id)}
                className="save-icon-right-side"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="upload-button-right-side">
        <input
          type="file"
          onChange={handleImageUpload}
          id="upload-input-right-side"
          className="upload-input-right-side"
        />
        <label className="upload-right-side" htmlFor="upload-input-right-side">
          <img
            src={Download}
            alt="download-icon"
            className="download-icon-rigth-side"
          />
        </label>
      </div>
    </div>
  );
}

export default Rightside;
