import { PanelMenu } from "primereact/panelmenu";
import { useState } from "react";
import { Button } from "primereact/button";
import NewItem from "./NewItem";

const Quests = () => {
  const [active, setActive] = useState();

  const items = [
    {
      label: "Quests",
      icon: "pi pi-fw pi-book",
      items: [
        {
          label: <NewItem />
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
          command: (event) => {
            console.log("delete item");
          },
        },
      ],
    },
  ];

  return (
    <>
      <PanelMenu model={items} />
    </>
  );
};

export default Quests;
