import React from "react";
import { Button, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

function Note({ title, content, id, delNote }) {
  function clickHandler() {
    delNote(id);
  }
  return (
    <Paper className="note">
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <Button onClick={clickHandler} style={{ marginLeft: "120px" }}>
        <DeleteIcon style={{ color: "red" }} />
      </Button>
    </Paper>
  );
}

export default Note;
