import React from "react";

export default function Content({ mode, textColor }) {
  return (
    <div
       className=
       {`p-4 text-${textColor}`
       }
      style={{
    backgroundColor: mode === "light" ? "white" : "#042743"
    

      }}
      
    >
      <h2>Page Content</h2>
      <p>This conntent follows dark / light mode</p>
    </div>
  );
}
