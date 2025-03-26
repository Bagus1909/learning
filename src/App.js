import Counter from "./pages/counter/Counter";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import TaskApp from "./pages/task/TaskApp";
import PrivateRoute from "./components/PrivateRoute";
import MainDashboard from "./pages/main/MainDashboard";
import Pokemon from "./pages/pokemon/Pokemon";
import PokemonDetail from "./pages/pokemon/PokemonDetail";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Navigate
                to='/main'
                replace
              />
            }
          />
          <Route
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
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
            <Route
              path='/pokemon'
              element={<Pokemon />}
            />
            <Route
              path='/pokemon/:name'
              element={<PokemonDetail />}
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
