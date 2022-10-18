import React, { useState } from "react";
import { Editor } from "primereact/editor";

const EditItem = () => {
  const [text1, setText1] = useState(
    "<div></div>"
  );

  return (
    <div>
      <div className="card">
        <h5>Quest Item</h5>
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
