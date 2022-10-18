import Details from "./Details";
import Items from "./Items";
import Locations from "./Locations";
import NewItem from "./NewItem";
import NPCs from "./NPCs";
import Quests from "./Quests";

const MainGrid = () => {
  return (
    <>
      <div className="grid mt-3 mx-1 h-auto">
        <div className="col"><Quests/></div>
        <div className="col"><Locations/></div>
        <div className="col"><NPCs/></div>
        <div className="col"><Items /></div>
        <div className="col border-solid"><Details/></div>
      </div>
    </>
  );
};

export default MainGrid;
