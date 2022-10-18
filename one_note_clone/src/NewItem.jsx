import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import EditItem from "./EditItem";

const NewItem = () => {
  const [displayBasic, setDisplayBasic] = useState(false);

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);
  };

  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="Cancel"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
        <Button
          label="Save"
          icon="pi pi-check"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };

  return (
    <div className="dialog-demo">
      <div className="card">
        <Button
          label="New"
          icon="pi pi-plus"
          onClick={() => onClick("displayBasic")}
        />
        <Dialog
          header="Add New Quest Item"
          visible={displayBasic}
          style={{ width: "50vw" }}
          footer={renderFooter("displayBasic")}
          onHide={() => onHide("displayBasic")}
        >
          <EditItem />
        </Dialog>
      </div>
    </div>
  );
};

export default NewItem;
