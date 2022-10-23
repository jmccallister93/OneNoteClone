import React, { useState } from "react";
import { ListBox } from "primereact/listbox";

const QuestList = () => {
  const [selectedQuest, setSelectedQuest] = useState(null);
  const quests = [
    { name: "Quest One", code: "q1" },
  ];

    // const items = Array.from({ length: 100000 }).map((_, i) => ({
    //   label: `Item #${i}`,
    //   value: i,
    // }));

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
