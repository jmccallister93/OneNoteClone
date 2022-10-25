import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";
import { useRef, useState } from "react";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom"

const RemoveItem = () => {
  const [visible, setVisible] = useState(false);
  const { id }= useParams();
  const {data: quests} = useFetch('http://localhost:8000/quests/' + id)
  
  
  const toast = useRef(null);

  const handleClick = () => {
    fetch('http://localhost:8000/quests/' + quests.id, {
      method: 'DELETE'
    })
  }
  
  const accept = () => {
    toast.current.show({
      severity: "info",
      summary: "Confirmed",
      detail: "You have deleted" + id,
      life: 3000,
    });
    handleClick();
  };

  const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 3000,
    });
  };

  const confirm2 = () => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept,
      reject,
    });
  };

  

  return (
    <div>
      <Toast ref={toast} />

      <div className="card">
        <ConfirmDialog />
        <Button
          onClick={confirm2}
          icon="pi pi-times"
          label="Delete"
          className="p-button-danger"
          
        ></Button>
      </div>
    </div>
  );
};

export default RemoveItem;

