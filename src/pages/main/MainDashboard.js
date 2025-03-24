import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUserData } from "../../redux/slices/userSlice";

const MainDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUserData({ value: false, code: false }));
    navigate("/login");
  };
  return (
    <div>
      <h1>ini Adalah Dashboard </h1>
      <Link to='/counter'>Counter</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MainDashboard;
