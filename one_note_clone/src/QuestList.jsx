import React, { useEffect, useState } from "react";
import { ListBox } from "primereact/listbox";
import questsData from "./data/quest.json"
import { setSyntheticTrailingComments } from "typescript";

const QuestList = () => {
  const [selectedQuest, setSelectedQuest] = useState(null);
  const [items, setItems] = useState([])
  const quests = [
    { name: "Quest One", code: "q1" },
  ];

    // const items = Array.from({ length: 100000 }).map((_, i) => ({
    //   label: `Item #${i}`,
    //   value: i,
    // }));

    useEffect(() => {
        fetch(questsData)
        .then((res) => res.json())
        .then((resJson) => {
            const data = JSON.parse(resJson)
            setItems(data)
        })
    }, [])

    
    console.log(items)
    const dataParsed = items.map((item)=> item.title)
    
    // const data = JSON.parse(questsData)
   
    // const data = questsData

  return (
    <div className="card">
      <h3>Quests</h3>
      <ListBox
        value={selectedQuest}
        options={dataParsed}
        onChange={(e) => setSelectedQuest(e.value)}
        optionLabel="name"
        style={{ width: "15rem" }}
      />
    </div>
  );
};

export default QuestList;
