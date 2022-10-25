import React, { useState } from "react";
import { ListBox } from "primereact/listbox";
import useFetch from "./useFetch";

const QuestList = () => {
  const [selectedQuest, setSelectedQuest] = useState(null);

  const {data: quests} = useFetch('http://localhost:8000/quests')

  return (
    <div className="card">
      <h3>Quests</h3>
      <ListBox
        value={selectedQuest}
        options={quests}
        onChange={(e) => setSelectedQuest(e.value)}
        optionLabel="name"
        style={{ width: "15rem" }}
      />
    </div>
  );
};

export default QuestList;
