import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Create from "./components/Create";
import Home from "./components/Home";

function App() {
  return (
   <>
   <Routes>
     <Route exact path="/" element={<Home />} />
     <Route exact path="/create" element={<Create />} />
     <Route exact path="/signup" element={<Signup />} />
     <Route exact path="/login" element={<Login />} />
   </Routes>
   </>
  );
}

export default App;
