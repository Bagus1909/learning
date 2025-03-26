import { Button, Checkbox, Input } from "antd";
import React, { useState } from "react";

const Task = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);

  let component;

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  if (isEditing) {
    component = (
      <>
        <Input value={note.task} />
        <Button onClick={handleIsEditing}>Save</Button>
      </>
    );
  } else {
    component = (
      <>
        {note.task}
        <Button onClick={handleIsEditing}>Edit</Button>
      </>
    );
  }

  return (
    <>
      <Checkbox>{component}</Checkbox>
      <Button>Delete</Button>
    </>
  );
};

export default Task;
