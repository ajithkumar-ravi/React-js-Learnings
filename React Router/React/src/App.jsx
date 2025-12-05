import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Users from "./Pages/Users";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import User from "./Pages/User"
import Error from "./Pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about/:username" element={<About/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/user/:username" element={<User/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
