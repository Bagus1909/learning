import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.userData.value);
  return (
    <div>
      <h1>{count}</h1>
      <h3>{user?.username}</h3>
    </div>
  );
};

export default Header;
