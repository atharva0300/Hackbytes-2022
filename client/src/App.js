import './App.css';
import Home from "./Components/Landing/Home"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Sports from "./Components/Sports/Sports";
import Music from "./Components/Music/Music";
import Photography from "./Components/Photography/Photography";
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/NavBar';
function App() {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/music" element={<Music />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
