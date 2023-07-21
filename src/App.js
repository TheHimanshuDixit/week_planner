import React, { useState } from "react";
import Addweek from "./components/Addweek";
import Main from "./components/Main";

function App() {

  const [week, setWeek] = useState(false);

  const handleWeek = () => {
    setWeek(!week);
  }


  return (
    <div className="bg-gray-200 h-[100vh]">
      <Main handleWeek={handleWeek} week={week} setWeek={setWeek} />
      <Addweek handleWeek={handleWeek} week={week} setWeek={setWeek} />
    </div>
  );
}

export default App;
