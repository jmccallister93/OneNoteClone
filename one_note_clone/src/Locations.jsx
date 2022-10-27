import { PanelMenu } from "primereact/panelmenu";
import RemoveItem from "./RemoveQuest";
import NewLocation from "./NewLocation";

const Locations = (location) => {
  const items = [
    {
      label: "Locations",
      icon: "pi pi-fw pi-book",
      items: [
        {
          label: <NewLocation />,
        },
        {
          label: <RemoveItem location={location}/>,
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

export default Locations;
