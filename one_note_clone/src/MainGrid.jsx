import { useState } from "react";
import Details from "./Details";
import ItemList from "./ItemList";
import Items from "./Items";
import LocationList from "./LocationList";
import Locations from "./Locations";
import NewItem from "./NewQuest";
import NPCList from "./NPCList";
import NPCs from "./NPCs";
import QuestList from "./QuestList";
import Quests from "./Quests";
import RemoveItem from "./RemoveQuest";

const MainGrid = () => {
  const [activeQuest, setActiveQuest] = useState();
  const [activeLocation, setActiveLocation] = useState();
  const [activeNPC, setActiveNPC] = useState();
  const [activeItem, setActiveItem] = useState();
  

  return (
    <>
    <div className="grid">
      <div className="grid mt-3 mx-1 h-auto col-12">
        <div className="col"><Quests quest = {activeQuest}/></div>
        <div className="col"><Locations location = {activeLocation}/></div>
        <div className="col"><NPCs NPC={activeNPC}/></div>
        <div className="col"><Items item={activeItem}/></div>
      </div>
      <div className="grid mt-3 mx-1 h-auto col-8">
        <div className="col"><QuestList onSelected={(value) => setActiveQuest(value)}/></div>
        <div className="col"><LocationList onSelected={(value) => setActiveLocation(value)}/></div>
        <div className="col"><NPCList onSelected={(value) => setActiveNPC(value)}/></div>
        <div className="col"><ItemList onSelected={(value) => setActiveItem(value)}/></div>
      </div>
      <div className="col max-h-full w-3" id="details"><Details quest={activeQuest}/></div>
      </div>
      
      
    </>
  );
};

export default MainGrid;
