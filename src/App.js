import { Route, Routes } from "react-router-dom";
import {useState,useEffect} from 'react';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Create from "./components/Create";
import Home from "./components/Home";
import  Appbar  from "./components/Appbar";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
function App() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  });
  if(!currentUser){
    return(
      <Signup />
    )
  }
  else{
 
  return (
   <>
   <Appbar />
   <Routes>
     <Route exact path="/" element={<Home />} />
     <Route exact path="/create" element={<Create />} />
     <Route exact path="/signup" element={<Signup />} />
     {/* <Route exact path="/login" element={<Login />} /> */}
   </Routes>
   </>
  );
  }
}

export default App;
