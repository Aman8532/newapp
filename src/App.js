import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import React, { useState } from "react";
import Content from './components/Content';
import Alert from './components/Alert';
import { Routes, Route } from "react-router-dom";

// let aman = "pathak"
function App() {

  const [alert, setAlert] = useState(null);

  

  const [mode, setMode] = useState("light");
  const textColor = mode === "light" ? "dark" : "light";

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode enabled greattt", "success");
    } else {
      setMode("light");
      showAlert("Light mode enabled greattt", "success");
    }
  };


const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

  // setTimeout(() => {
  //     setAlert(null);
  //   }, 4000);
  // };
   setTimeout(()=>{
     setAlert(null)

   },2000)





  }
  return (  
    <>
   
     <Navbar  mode={mode} toggleMode={toggleMode} textColor={textColor}  />   
     
    <strong><Alert  alert={alert} /></strong>
    
    
    
     
     
     {/* <About/> 
   <TextForm     heading="Write your text below in the box"   />
   <Content mode={mode}  textColor={textColor} /> */}

    <Routes>
        
       
        <Route path="/about" element={<About />} />
       
         <Route path="/textform" element={<TextForm heading="Write your text below in the box" />} />
           <Route path="/content" element={<Content  mode={mode}  textColor={textColor}/>} />
           <Route path="/" element={<About />} />
        
      </Routes>

   

    </>
  );
}

export default App;