import Items from "./Items";
import Locations from "./Locations";
import NPCs from "./NPCs";
import Quests from "./Quests";

const MainGrid = () => {
  return (
    <>
      <div className="grid mt-3">
        <div className="col"><Quests/></div>
        <div className="col"><Locations/></div>
        <div className="col"><NPCs/></div>
        <div className="col"><Items /></div>
        <div className="col">Details</div>
        
      </div>
    </>
  );
};

export default MainGrid;
