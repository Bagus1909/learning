import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskApp = () => {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TaskApp;
