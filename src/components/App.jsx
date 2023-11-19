import React, { useState } from "react";

function App() {
  const [Time, setTime] = useState("Time");
  function getTime() {
    let currentTime = new Date().toLocaleTimeString([], { hour12: false });
    setTime(currentTime);
  }
  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
