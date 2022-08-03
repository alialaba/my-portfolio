import { useState } from "react";
import Navbar from "./components/Navbar"

export default function App() {

  const [activeState, setActiveState] = useState("header-nav");

  const navToggle=()=>{
    console.log("toggle")
  }
  return (
    <div className="App">
    <Navbar onToggle={navToggle}/>
    
    </div>
  );
}


