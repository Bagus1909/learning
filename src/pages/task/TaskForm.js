import { Button, Input } from "antd";
import React from "react";

const TaskForm = () => {
  return (
    <div>
      <Input placeholder='Masukan tugas baru...'></Input>
      <Button
        className='w-full mt-3'
        type='primary'
      >
        Tambah
      </Button>
    </div>
  );
};

export default TaskForm;
