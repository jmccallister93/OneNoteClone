import { PanelMenu } from "primereact/panelmenu";
import NewQuest from "./NewQuest";
import RemoveQuest from "./RemoveQuest";

const Quests = (quest) => {
  const items = [
    {
      label: "Quests",
      icon: "pi pi-fw pi-book",
      items: [
        {
          label: <NewQuest />,
        },
        {
          label: <RemoveQuest quest={quest}/>,
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

export default Quests;
