import { PanelMenu } from "primereact/panelmenu";
import RemoveItem from "./RemoveQuest";
import NewItem from "./NewItem";

const Items = (item) => {
  const items = [
    {
      label: "Items",
      icon: "pi pi-fw pi-book",
      items: [
        {
          label: <NewItem />,
        
        },
        {
          label: <RemoveItem item={item}/>,
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

export default Items;
