import { PanelMenu } from "primereact/panelmenu";

const Quests = () => {
  const items: object[] = [
    {
      label: "Quests",
      icon: "pi pi-fw pi-book",
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
      <PanelMenu model={items} />
    </>
  );
};

export default Quests;
