import { Route,  Routes } from "react-router-dom";
import "./App.css";


//COMPONENTS
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SignUp />} /> 
      <Route path="/signup" element={<SignUp />} /> 
      <Route path="/login" element={<Login />} /> 
    </Routes>
    </>
  );
}

export default App;
