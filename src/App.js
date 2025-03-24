import Counter from "./pages/counter/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import TaskApp from "./pages/task/TaskApp";
import PrivateRoute from "./components/PrivateRoute";
import MainDashboard from "./pages/main/MainDashboard";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<Dashboard />}>
            <Route
              path='main'
              element={<MainDashboard />}
            />
            <Route
              path='/counter'
              element={<Counter />}
            />
            <Route
              path='/task'
              element={<TaskApp />}
            />
          </Route>
          <Route
            path='/login'
            element={<Login />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
