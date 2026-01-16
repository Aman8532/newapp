import React,{useState} from 'react'

export default function TextForm(props) {
    
  
  const [textt,setText] = useState(""); //hooks
//  setText("changed value");
  
function onnChange(e) {
    setText(e.target.value);
  }
  function changeUpperCase(e) {
   console.log(textt);
   e.preventDefault();

    let targget = textt.toUpperCase();
   
    setText(targget);
  }

  


    return (
    <div>
      <form>
        <br/>
 <h2>{props.heading}</h2>
 
  <div className="form-group row" >

    

    <div className="row-sm-12" >
      <input type="text" className="form-control" id="inputText" value={textt}   onChange={onnChange}  />
    </div>
  <br/>

  </div>
  
</form>
<br/>
 <button className="btn btn-primary" onClick={changeUpperCase}>Change to upper case </button> 
     

    </div>
  )
}

