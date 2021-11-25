import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);

  const addToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }} className={toggle ? "night" : "day"}>
      <button style={{ padding: "10px 20px", width: "70px", margin: "15% 48% 0% 48%", borderRadius: "15px", border: "none" }} onClick={addToggle}>{toggle ? 'ON' : 'OFF'}</button>
      {/* <h2 style={{width:"100px",margin:"4% 48.6%"}}>{!toggle?"ON":"OFF"}</h2> */}
    </div>
  )
}

export default Toggle