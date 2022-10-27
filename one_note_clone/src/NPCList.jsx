import React, { useState } from "react";
import { ListBox } from "primereact/listbox";
import useFetch from "./useFetch";

const NPCList = ({onSelected}) => {
  const [selectedNpc, setSelectedNpc] = useState(null);

  const {data: npcs} = useFetch('http://localhost:8000/npcs')

  const passSelected = (value)=> onSelected(value)

  const selectorHandle = (e) => {
    setSelectedNpc(e.value)
    passSelected(e.value)
   
  }

  return (
    <div className="card">
      <h3>NPC's</h3>
      <ListBox
        value={selectedNpc}
        options={npcs}
        onChange={selectorHandle}
        optionLabel="name"
        style={{ width: "15rem" }}
      />
    </div>
  );
};

export default NPCList;
