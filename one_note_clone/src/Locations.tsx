import { PanelMenu } from "primereact/panelmenu";

const Locations = () => {
  const items: object[] = [
    {
      label: "Locations",
      icon: "pi pi-fw pi-globe",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
      ],
    },
  ];

  return (
    <>
      <PanelMenu model={items}/>
    </>
  );
};

export default Locations;
