import { PanelMenu } from "primereact/panelmenu";
import NewLocation from "./NewLocation";
import RemoveLocation from "./RemoveLocation";

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
          label: <RemoveLocation location={location}/>,
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
