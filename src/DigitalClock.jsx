import React, { useState } from "react";
import "./DigitalClock.css";

function DigitalClock() {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCTime] = useState(time);

  // we can write a function and then we call it as
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time);
  };
  setInterval(UpdateTime, 1000);

  // an other way of writing the setInterval by using the anonoymous function
  // setInterval(() => {
  //   time = new Date().toLocaleTimeString();
  //   setCTime(time);
  // }, 1000);

  return (
    <>
      <h1>{ctime}</h1>
    </>
  );
}

export default DigitalClock;
