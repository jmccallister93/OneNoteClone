import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
// import  { NodeService } from './NodeService';
import { NodeService } from './NodeService';
import useFetch from "./useFetch";
import axios from 'axios'


const ListItems = (props, {onSelected}) => {
    const [selectedObj, setSelectedObj] = useState(null);
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        axios 
        .get("http://localhost:8000/db")
        .then((res) => setNodes(res.data) )

    }, [])
  
    // const passSelected = (value)=> onSelected(value)
  
    // const selectorHandle = (e) => {
    //   setSelectedObj(e.value)
    //   passSelected(e.value)
    // }

  
    return (
      <TreeTable value={nodes.root}>
             <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    );
}
 
export default ListItems;