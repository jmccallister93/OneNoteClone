import { useState } from "react";
import Details from "./Details";
import Items from "./Items";
import Locations from "./Locations";
import NewItem from "./NewItem";
import NPCs from "./NPCs";
import QuestList from "./QuestList";
import Quests from "./Quests";
import RemoveItem from "./RemoveItem";

const MainGrid = () => {
  const [activeQuest, setActiveQuest] = useState();
  console.log(activeQuest)

  return (
    <>
      <div className="grid mt-3 mx-1 h-auto">
        <div className="col"><Quests quest = {activeQuest}/></div>
        <div className="col"><Locations/></div>
        <div className="col"><NPCs/></div>
        <div className="col"><Items /></div>
        
      </div>
      <div className="grid mt-3 mx-1 h-auto">
        <div className="col"><QuestList onSelected={(value) => setActiveQuest(value)}/></div>
        <div className="col">Location List</div>
        <div className="col">NPC List</div>
        <div className="col">Item List</div>
        
      </div>
     
    </>
  );
};

export default MainGrid;
