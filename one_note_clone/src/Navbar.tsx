import { TabMenu } from "primereact/tabmenu";
import { useState } from "react";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items: object[] = [
    { label: "Overview", icon: "pi pi-fw pi-home" },
    { label: "Quests", icon: "pi pi-fw pi-book" },
    { label: "Locations", icon: "pi pi-fw pi-globe" },
    { label: "NPC's", icon: "pi pi-fw pi-user" },
    { label: "Items", icon: "pi pi-fw pi-key" },
  ];

  return (
    <>
      <TabMenu
        model={items}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      />
    </>
  );
};

export default Navbar;
