import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./routes/Dashboard";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  const [ isLoggedIn , setIsLoggedIn ] = useState(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
