import React, { useState } from "react";
import { ListBox } from "primereact/listbox";
import useFetch from "./useFetch";

const NPCList = ({onSelected}) => {
  const [selectedNPC, setSelectedNPC] = useState(null);

  const {data: NPCs} = useFetch('http://localhost:8000/NPCs')

  const passSelected = (value)=> onSelected(value)

  const selectorHandle = (e) => {
    setSelectedNPC(e.value)
    passSelected(e.value)
   
  }

  return (
    <div className="card">
      <h3>NPC's</h3>
      <ListBox
        value={selectedNPC}
        options={NPCs}
        onChange={selectorHandle}
        optionLabel="name"
        style={{ width: "15rem" }}
      />
    </div>
  );
};

export default NPCList;
