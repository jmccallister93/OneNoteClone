import React, { useState } from "react";
import { Editor } from "primereact/editor";
import { InputText } from 'primereact/inputtext';

const EditItem = (props) => {
  const [text, setText] = useState(
    "<div></div>"
  );
  const [title, setTitle] = useState('');
 

  return (
    <div>
      <div className="card">
        <h5>Quest Item: Title</h5>
        <InputText value={title} onChange={(e) => setTitle(e.target.value)} />
        <h5>Quest Item: Description</h5>
        <Editor
          style={{ height: "320px" }}
          value={text}
          onTextChange={(e) => setText(e.htmlValue)}
        />
      </div>
    </div>
  );
};

export default EditItem;
