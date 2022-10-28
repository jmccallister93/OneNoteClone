import React, { useState, useEffect } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
// import  { NodeService } from './NodeService';
import { NodeService } from "./NodeService";
import useFetch from "./useFetch";
import axios from "axios";
import { InputText } from "primereact";

const ListItems = (props, { onSelected }) => {
  const [selectedObj, setSelectedObj] = useState(null);
  const [nodes, setNodes] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [selectedNodeKeys, setSelectedNodeKeys] = useState([]);

  const treeTableFuncMap = {
    globalFilter: setGlobalFilter,
  };

  useEffect(() => {
    axios.get("http://localhost:8000/db").then((res) => setNodes(res.data));
  }, []);

  const getHeader = (globalFilterKey) => {
    return (
      <div className="text-right">
        <div className="p-input-icon-left">
          <i className="pi pi-search"></i>
          <InputText
            type="search"
            onInput={(e) =>
              treeTableFuncMap[`${globalFilterKey}`](e.target.value)
            }
            placeholder="Global Search"
            size="50"
          />
        </div>
      </div>
    );
  };

  let header = getHeader("globalFilter");

  const onEditorValueChange = (options, value) => {
    let newNodes = JSON.parse(JSON.stringify(nodes));
    let editedNode = findNodeByKey(newNodes, options.node.key);
    editedNode.data[options.field] = value;

    setNodes(newNodes);
  };
  const findNodeByKey = (nodes, key) => {
    let path = key.split("-");
    let node;

    while (path.length) {
      let list = node ? node.children : nodes;
      node = list[parseInt(path[0], 10)];
      path.shift();
    }

    return node;
  };

  const inputTextEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.rowData[options.field]}
        onChange={(e) => onEditorValueChange(options, e.target.value)}
      />
    );
  };

  const sizeEditor = (options) => {
    return inputTextEditor(options);
  };

  const typeEditor = (options) => {
    return inputTextEditor(options);
  };

  const requiredValidator = (e) => {
    let props = e.columnProps;
    let value = props.node.data[props.field];

    return value && value.length > 0;
  };
  // const passSelected = (value)=> onSelected(value)

  // const selectorHandle = (e) => {
  //   setSelectedObj(e.value)
  //   passSelected(e.value)
  // }

  return (
    <TreeTable
      value={nodes.root}
      resizableColumns
      columnResizeMode="fit"
      showGridlines
      sortMode="multiple"
      globalFilter={globalFilter}
      header={header}
      selectionMode="multiple"
      selectionKeys={selectedNodeKeys}
      onSelectionChange={(e) => setSelectedNodeKeys(e.value)}
      metaKeySelection
    >
      <Column
        field="name"
        header="Name"
        expander
        sortable
        filter
        filterPlaceholder="Filter by name"
        style={{ height: '3.5em' }}
        resizableColumns 
        columnResizeMode="fit"
        reorderableColumns
      ></Column>
      <Column
        field="size"
        header="Size"
        sortable
        filter
        filterPlaceholder="Filter by size"
        editor={sizeEditor} 
        cellEditValidator={requiredValidator}
        style={{ height: '3.5em' }}
      ></Column>
      <Column
        field="type"
        header="Type"
        sortable
        filter
        filterPlaceholder="Filter by type"
        editor={typeEditor} 
        style={{ height: '3.5em' }}
      ></Column>
    </TreeTable>
  );
};

export default ListItems;
