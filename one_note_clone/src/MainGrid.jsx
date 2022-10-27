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
  const [activeQuest, setActiveQuest] = useState();
  const [activeLocation, setActiveLocation] = useState();
  const [activeNpc, setActiveNpc] = useState();
  const [activeItem, setActiveItem] = useState();
  const [activeObj, setActiveObj] = useState();

  // console.log(activeItem, activeLocation, activeNpc, activeQuest)

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
            <QuestList onSelected={(value) => setActiveObj(value)} />
          </div>
          <div className="col">
            <LocationList onSelected={(value) => setActiveObj(value)} />
          </div>
          <div className="col">
            <NPCList onSelected={(value) => setActiveObj(value)} />
          </div>
          <div className="col">
            <ItemList onSelected={(value) => setActiveObj(value)} />
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
