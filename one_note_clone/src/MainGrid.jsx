import { useState } from "react";
import Details from "./Details";
import ItemList from "./ItemList";
import Items from "./Items";
import LocationList from "./LocationList";
import Locations from "./Locations";
import NPCList from "./NPCList";
import NPCs from "./NPCs";
import QuestList from "./QuestList";
import Quests from "./Quests";

const MainGrid = () => {
  const [activeObj, setActiveObj] = useState();
  const [arrayObjs, setArrayObjs] = useState([]);

  const onSelectHandler = (value) => {
    setActiveObj(value);
    if (value === null || value === undefined) {
      //pass
    } else if( arrayObjs.includes(value) ){
      setArrayObjs((prevArray) => prevArray.filter((value) => console.log('value')))
    }
    else {
      setArrayObjs((prevArray) => [...prevArray, value]);
    }
  };

  // console.log(arrayObjs)

  return (
    <>
      <div className="grid">
        <div className="grid mt-3 mx-1 h-auto col-12">
          <div className="col">
            <Quests quest={activeObj} />
          </div>
          <div className="col">
            <Locations location={activeObj} />
          </div>
          <div className="col">
            <NPCs npc={activeObj} />
          </div>
          <div className="col">
            <Items item={activeObj} />
          </div>
        </div>
        <div className="grid mt-3 mx-1 h-auto col-8">
          <div className="col">
            <QuestList onSelected={onSelectHandler} />
          </div>
          <div className="col">
            <LocationList onSelected={onSelectHandler} />
          </div>
          <div className="col">
            <NPCList onSelected={onSelectHandler} />
          </div>
          <div className="col">
            <ItemList onSelected={onSelectHandler} />
          </div>
        </div>
        <div className="col max-h-full w-3" id="details">
          <Details activeObj={activeObj} />
        </div>
      </div>
    </>
  );
};

export default MainGrid;
