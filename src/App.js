import { useState } from "react";
import Navbar from "./components/Navbar"

export default function App() {

  const [openState, setopenState] = useState("header-nav");
  const [toggledIcon, setToggledIcon] = useState("header-toggle");


  const navToggle=()=>{
    //conditional that open navigation menu on mobile/tab view
    if(openState === "header-nav"){
      setopenState("header-nav header-nav__open ")
    }else{
      setopenState("header-nav")
    }

      //conditional that change icon on toggled navigation menu hamburger on mobile/tab view
    if(toggledIcon === "header-toggle"){
      setToggledIcon("header-toggle header-nav__open")
    }else{
      setToggledIcon("header-toggle")
    }
    
  }
  return (
    <div className="App">
    <Navbar onToggle={navToggle} openState={openState} toggledIcon={toggledIcon}/>
    
    </div>
  );
}


