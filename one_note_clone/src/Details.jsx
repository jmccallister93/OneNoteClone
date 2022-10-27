import { Card } from "primereact/card";
import { useEffect, useRef, useState } from "react";

const Details = (props) => {

  const objParams =
    props.activeObj === undefined ||
    props.activeObj === null ||
    props === undefined ||
    props === null 
  const objName = objParams
    ? (props = "No Selection")
    : props.activeObj.name;
  const objDetail = objParams
    ? (props = "")
    : props.activeObj.detail;

  return (
    <>
      <h1>Details</h1>
      <Card
        title={objName}
        style={{ width: "25rem", marginBottom: "2em" }}
      >
        <p className="m-0" style={{ lineHeight: "1.5" }}>
          {objDetail}
        </p>
      </Card>
    </>
  );
};

export default Details;
