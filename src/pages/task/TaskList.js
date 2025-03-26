import React, { useState } from "react";
import Task from "./Task";

const initialNotes = [
  {
    id: 1,
    task: "Learn source code",
    done: false,
  },
  {
    id: 2,
    task: "Practice from source code",
    done: false,
  },
  {
    id: 3,
    task: "Watch udemy course",
    done: false,
  },
];

const TaskList = () => {
  const [notes] = useState(initialNotes);

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Task note={note} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
