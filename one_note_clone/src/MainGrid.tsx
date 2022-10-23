import Details from "./Details";
import Items from "./Items";
import Locations from "./Locations";
import NewItem from "./NewItem";
import NPCs from "./NPCs";
import QuestList from "./QuestList";
import Quests from "./Quests";
import RemoveItem from "./RemoveItem";

const MainGrid = () => {
  return (
    <>
      <div className="grid mt-3 mx-1 h-auto">
        <div className="col"><Quests/></div>
        <div className="col"><Locations/></div>
        <div className="col"><NPCs/></div>
        <div className="col"><Items /></div>
        
      </div>
      <div className="grid mt-3 mx-1 h-auto">
        <div className="col"><QuestList /></div>
        <div className="col">Location List</div>
        <div className="col">NPC List</div>
        <div className="col">Item List</div>
        
      </div>
     
    </>
  );
};

export default MainGrid;
