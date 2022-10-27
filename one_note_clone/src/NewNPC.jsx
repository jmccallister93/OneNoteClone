import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Editor } from "primereact/editor";
import { InputText } from "primereact/inputtext";


const NewNPC = (props) => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [items, setItems] = useState([]);
  const [text, setText] = useState("<div></div>");
  const [title, setTitle] = useState("");

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);
  };

  const saveContent = (e) => {
    const newObj = {name:title, detail:text}
    fetch('http://localhost:8000/NPCs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newObj)
    }).then(() => {
        
    })
  }
  const clearForm = (e) => {
    setTitle("")
    setText("")
  }

  const reloadForm = (e) => {
    window.location.reload()
  }

  const renderFooter = (name) => {
    function handleClick() {
      onHide(name);
      saveContent();
      clearForm();
      reloadForm();
    }

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
          onClick={handleClick}
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
          header="Add New NPC Item"
          visible={displayBasic}
          style={{ width: "50vw" }}
          footer={renderFooter("displayBasic")}
          onHide={() => onHide("displayBasic")}
        >
          <div className="card">
            <h5>NPC: Title</h5>
            <InputText
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h5>NPC: Description</h5>
            <Editor
              style={{ height: "320px" }}
              value={text}
              onTextChange={(e) => setText(e.textValue)}
            />
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default NewNPC;
