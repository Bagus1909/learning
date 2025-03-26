import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

const LabelSidebar = ({ path, label }) => {
  return <NavLink to={path}>{label}</NavLink>;
};

const Sidebar = () => {
  const itemUser = [
    {
      key: "main",
      label: (
        <LabelSidebar
          path='/main'
          label='Dashboard'
        />
      ),
    },
    {
      key: "counter",
      label: (
        <LabelSidebar
          path='/counter'
          label='Counter'
        />
      ),
    },
    {
      key: "task",
      label: (
        <LabelSidebar
          path='/task'
          label='TaskList'
        />
      ),
    },
    {
      key: "pokemon",
      label: (
        <LabelSidebar
          path='/pokemon'
          label='Pokemon'
        />
      ),
    },
  ];

  return (
    <div>
      <h1>Sidebar</h1>
      <Menu items={itemUser} />
    </div>
  );
};

export default Sidebar;
