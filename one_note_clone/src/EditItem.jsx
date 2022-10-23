import React, { useState } from "react";
import { Editor } from "primereact/editor";
import { InputText } from 'primereact/inputtext';

const EditItem = () => {
  const [text1, setText1] = useState(
    "<div></div>"
  );
  const [value1, setValue1] = useState('');


  return (
    <div>
      <div className="card">
        <h5>Quest Item: Title</h5>
        <InputText value={value1} onChange={(e) => setValue1(e.target.value)} />
        <h5>Quest Item: Description</h5>
        <Editor
          style={{ height: "320px" }}
          value={text1}
          onTextChange={(e) => setText1(e.htmlValue)}
        />
      </div>
    </div>
  );
};

export default EditItem;
