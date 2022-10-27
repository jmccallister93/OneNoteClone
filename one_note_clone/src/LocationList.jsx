import React, { useState } from "react";
import { ListBox } from "primereact/listbox";
import useFetch from "./useFetch";

const LocationList = ({onSelected}) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const {data: locations} = useFetch('http://localhost:8000/locations')

  const passSelected = (value)=> onSelected(value)

  const selectorHandle = (e) => {
    setSelectedLocation(e.value)
    passSelected(e.value)
   
  }

  return (
    <div className="card">
      <h3>Locations</h3>
      <ListBox
        value={selectedLocation}
        options={locations}
        onChange={selectorHandle}
        optionLabel="name"
        style={{ width: "15rem" }}
      />
    </div>
  );
};

export default LocationList;
