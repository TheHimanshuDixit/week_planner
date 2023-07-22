import React, { useState } from "react";
import Addweek from "./components/Addweek";
import Main from "./components/Main";
import data from './data/week.json';

function App() {

  const [Data, setData] = useState(data.weeks); // Data is an array of objects
  const [week, setWeek] = useState(false);

  const handleWeek = () => {
    setWeek(!week);
  }


  return (
    <div className="bg-gray-200 h-[100vh]">
      <Main Data={Data} setData={setData} handleWeek={handleWeek} week={week} setWeek={setWeek} />
      <Addweek Data={Data} setData={setData} handleWeek={handleWeek} week={week} setWeek={setWeek} />
    </div>
  );
}

export default App;
