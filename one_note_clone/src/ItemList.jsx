import React, { useState } from "react";
import { ListBox } from "primereact/listbox";
import useFetch from "./useFetch";

const ItemList = ({onSelected}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const {data: items} = useFetch('http://localhost:8000/items')

  const passSelected = (value)=> onSelected(value)

  const selectorHandle = (e) => {
    setSelectedItem(e.value)
    passSelected(e.value)
   
  }

  return (
    <div className="card">
      <h3>Items</h3>
      <ListBox
        value={selectedItem}
        options={items}
        onChange={selectorHandle}
        optionLabel="name"
        style={{ width: "15rem" }}
      />
    </div>
  );
};

export default ItemList;
