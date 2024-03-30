import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import Forum from "./Pages/Forum";


function App() {
  return (
    <Routes>
      <Route element={<Login />} path="" />
      <Route element={<Home />} path="/home" />
      <Route element={<Forum />} path="/forum" />
    </Routes>
  );
}

export default App;
