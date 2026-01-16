import React, { useState } from 'react'

export default function About() {

const [myStyle,setStyle] = useState({color:'red',
    backgroundColor:'blue',
    border: '15px solid white',
    paddingLeft: '25px'
});

const [initialValue,finalValue] = useState("");

function valueFunction(e){

finalValue(e.target.value)

            
}



const [btnText,setBtnText] = useState("change to white and orange and text to lowercase");

   const changeTo=()=>{
    

    if(myStyle.color === 'red'){
      setStyle({
        color:'white',
    backgroundColor:'orange',
    border: '15px solid white',
    paddingLeft: '25px'
  

      })
      setBtnText("change to red and blue and text to uppercase")
      finalValue(initialValue.toLowerCase())
    }
    else{
      setStyle({
        color:'red',
    backgroundColor:'blue',
    border: '15px solid white',
    paddingLeft: '25px'

      })
      setBtnText("change to white and orange and text to lowercase")
      finalValue(initialValue.toUpperCase())
    }

    
   } 

  return (
    <div >
      

     
      <input type="text" style={myStyle}  value={initialValue}  onChange={valueFunction}/>
      
      
     

      <button type="button" onClick={changeTo}>{btnText}</button>
      </div>
  )
}
