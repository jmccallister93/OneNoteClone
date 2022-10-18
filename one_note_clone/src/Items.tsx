import { PanelMenu } from "primereact/panelmenu";

const Items = () => {
  const items: object[] = [
    {
      label: "Items",
      icon: "pi pi-fw pi-key",
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

export default Items;
