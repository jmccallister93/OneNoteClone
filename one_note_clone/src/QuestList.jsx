import React, { useState } from "react";
import { ListBox } from "primereact/listbox";
import useFetch from "./useFetch";

const QuestList = ({onSelected}) => {
  const [selectedQuest, setSelectedQuest] = useState(null);

  const {data: quests} = useFetch('http://localhost:8000/quests')

  const passSelected = (e)=> onSelected(selectedQuest)

  const selectorHandle = (e) => {
    setSelectedQuest(e.value)
    passSelected()
   
  }

  

  // console.log(selectedQuest)

  return (
    <div className="card">
      <h3>Quests</h3>
      <ListBox
        value={selectedQuest}
        options={quests}
        onChange={selectorHandle}
        optionLabel="name"
        style={{ width: "15rem" }}
        
      />
      {/* <input type="text" onChange={test} /> */}
    </div>
  );
};

export default QuestList;
