import "./App.css";
import Counter from "./pages/Counter";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";
import Login from "./pages/Login";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.userData.value);
  console.log(user);

  return user ? children : <Navigate to='/login' />;
};

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/counter'
            element={<Counter />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
