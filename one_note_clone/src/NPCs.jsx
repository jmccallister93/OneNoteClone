import { PanelMenu } from "primereact/panelmenu";
import NewNPC from "./NewNPC";
import RemoveNPC from "./RemoveNPC";

const NPCs = (npc) => {
  const items = [
    {
      label: "NPC's",
      icon: "pi pi-fw pi-book",
      items: [
        {
          label: <NewNPC />,
          
        },
        {
          label: <RemoveNPC npc={npc}/>,
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
