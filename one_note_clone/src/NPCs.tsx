import { PanelMenu } from "primereact/panelmenu";

const NPCs = () => {
  const items: object[] = [
    {
      label: "NPC's",
      icon: "pi pi-fw pi-user",
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

export default NPCs;