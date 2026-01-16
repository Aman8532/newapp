// // import React, { useState } from 'react'
// // import PropTypes from "prop-types";

// // export default function Navbar({ navid = "Guest", homeid = "Home", Link="MYmLINK" }) {

// //   const [changeColor,updatedColor]= useState("Light mode")

// //   const [lightColor,darkColor]= useState({color:'red',
// //       backgroundColor:'blue'
     
// //   });


  
// //   let bgColorText=()=>{
// //   if (changeColor==='Light mode'){
// //     updatedColor("Dark mode")
// //     darkColor({
// //         color:'white',
// //     backgroundColor:'orange'
    
  

// //       })
// //   }
 

// //  else{
// //   updatedColor("Light mode")
// //   darkColor({
// //         color:'red',
// //     backgroundColor:'blue'
    
  

// //       })
  
// //  }
// //   }
// //   return (
// //     <div  style={lightColor}  >
// //       <nav className="navbar navbar-expand-lg navbar-light bg-light">
// //   <div className="container-fluid">
// //     <a className="navbar-brand" href="/">{navid}</a>
// //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //       <span className="navbar-toggler-icon"></span>
// //     </button>
// //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// //         <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="/">{homeid}</a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link" href="/">{Link}</a>
// //         </li>
// //         <li className="nav-item dropdown">
// //           <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
// //             Dropdown
// //           </a>
// //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
// //             <li><a className="dropdown-item" href="/">Action</a></li>
// //             <li><a className="dropdown-item" href="/">Another aAction</a></li>
// //             <li><hr className="dropdown-divider"/></li>
// //             <li><a className="dropdown-item" href="/">SomeHBKEFVthing else here</a></li>
// //           </ul>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
// //         </li>
// //       </ul>
// //       <form className="d-flex">
// //         <input
// //   type="checkbox"
// //   className="btn-check"
// //   id="btn-check-3"
// //   autoComplete="off"
// //   onChange={bgColorText}
// // />
// //  <label className="btn btn-primary" htmlFor="btn-check-3"   >{changeColor}</label> 
// //       </form>
// //     </div>
// //   </div>
// // </nav>
// //     </div>
// //   )
// // }
// // // Navbar.defaultProps = {
// // //   navid: 'Guest',
// // //   homeid:'hgii'
// // // };
// // Navbar.propTypes = {
// //   navid: PropTypes.string.isRequired,
// //   homeid: PropTypes.string
// // };
// // // function Navbar({ title = "Guest" }) {
// // //   return <h1>{title}</h1>;
// // // }

// import React, { useState } from "react";

// export default function Navbar({ navid = "Guest", homeid = "Home", link = "My Link" }) {
//   const [mode, setMode] = useState("light");

//   const toggleMode = () => {
//     setMode(mode === "light" ? "dark" : "light");
//   };

//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}
//     >
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">
//           {navid}
//         </a>

//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <a className="nav-link active" href="/">
//               {homeid}
//             </a>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link active" href="/">
//               {link}
//             </a>
//           </li>
//         </ul>

//         <div className="form-check form-switch">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             id="modeSwitch"
//             onChange={toggleMode}
//           />
//           <label
//   className={`form-check-label text-${mode === "light" ? "dark" : "light"}`}  
//   htmlFor="modeSwitch"
// >
//   {mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
// </label>

//         </div>
//       </div>
//     </nav>
//   );
// }
// import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand" to="/">
          MyApp
        </Link>

        {/* Toggle button (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/textform">
                TextForm
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/content">
                Content
              </Link>
            </li>

          </ul>

          {/* Dark mode switch */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={toggleMode}
            />
            <label
              className={`form-check-label text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              {mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
            </label>
          </div>
        </div>

      </div>
    </nav>
  );
}
