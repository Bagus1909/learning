import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUserData } from "../../redux/slices/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUserData({ value: false, code: false }));
    navigate("/login");
  };
  return (
    <div className='flex justify-between items-center'>
      <Link to='/main'>
        <h1>Practice App</h1>
      </Link>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Navbar;
