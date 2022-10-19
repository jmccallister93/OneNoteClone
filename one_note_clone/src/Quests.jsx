import { PanelMenu } from "primereact/panelmenu";
import { useState } from "react";
import { Button } from "primereact/button";
import NewItem from "./NewItem";
import RemoveItem from "./RemoveItem";

const Quests = () => {
  const [active, setActive] = useState();

  const items = [
    {
      label: "Quests",
      icon: "pi pi-fw pi-book",
      items: [
        {
          label: <NewItem />,
        },
        {
          label: <RemoveItem />,
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
