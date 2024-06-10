import Chat from "./pages/chat";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/chat" element={<Chat/>} />
        <Route exact path="/" element={<SignUp/>} /> 
      </Routes>
    </Router>
 
    
   

    
   
    
  );
}

export default App;
