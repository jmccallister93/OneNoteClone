import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";
import { useRef, useState } from "react";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const RemoveItem = (quest) => {
  const [activeQuest, setActiveQuest] = useState();
  const toast = useRef(null);
  const { id } = useParams();
  const { data } = useFetch("http://localhost:8000/quests/");

  

  // if (quest["quest"]['quest'] === undefined) {
  //   console.log('quest is null')
  // } else {
  //   console.log(quest)
  //   // console.log(quest["quest"]["quest"]["id"])
  // }
  
  

  

  

  const handleClick = () => {
    fetch("http://localhost:8000/quests/" + quest["quest"]["quest"]["id"], {
      method: "DELETE",
    }).then(
      window.location.reload()
    );
  };

  const accept = () => {
    toast.current.show({
      severity: "info",
      summary: "Confirmed",
      detail: `You have deleted ${quest["quest"]["quest"]['name']}`,
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
    if(quest['quest'] !== "undefined"){
    confirmDialog({
      message: `Do you want to delete ${quest["quest"]["quest"]['name']} ?`,
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept,
      reject,
    });
  } else {
    confirmDialog({
      message: `No item selected`
    })
  }

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
