import { Card } from "primereact/card";
import { useEffect, useRef, useState } from "react";

const Details = (activeObj) => {
  const activeObjName =
    activeObj["quest"] === undefined ||
    activeObj["quest"] === null ||
    activeObj === undefined ||
    activeObj === null
      ? console.log("empty")
      : activeObj["quest"]["name"];

const activeObjDetail = activeObj["quest"] === undefined ||
activeObj["quest"] === null ||
activeObj === undefined ||
activeObj === null
  ? console.log("empty")
  : activeObj["quest"]["detail"];

  return (
    <>
      <h1>Details</h1>
      <Card
        title={activeObjName}
        style={{ width: "25rem", marginBottom: "2em" }}
      >
        <p className="m-0" style={{ lineHeight: "1.5" }}>
          {activeObjDetail}
        </p>
      </Card>
    </>
  );
};

export default Details;
