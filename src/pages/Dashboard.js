import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/slices/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUserData({ value: false, code: false }));
    navigate("/login");
  };
  return (
    <div>
      <h1>ini Adalah Dashboard </h1>
      <Header />
      <Link to='/counter'>Counter</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
