import { PanelMenu } from "primereact/panelmenu";
import RemoveItem from "./RemoveQuest";
import NewNPC from "./NewNPC";

const NPCs = (NPC) => {
  const items = [
    {
      label: "NPC's",
      icon: "pi pi-fw pi-book",
      items: [
        {
          label: <NewNPC />,
          
        },
        {
          label: <RemoveItem NPC={NPC}/>,
        },
      ],
    },
  ];

  return (
    <>
      <PanelMenu 
      model={items} 
      />
    </>
  );
};

export default NPCs;
