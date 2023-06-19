import React, { useState } from "react";

export default function () {
  const [dateValue, setDateValue] = useState(null);
  function handleDateUpdate(e) {
    const dateValue = e.target.value;
    // console.log("dateValue", dateValue);
    const xmas = new Date();
    const year = xmas.getYear();
    // console.log(year);
    var x=new Date(dateValue);
    setDateValue((x.getYear()-year)*-1)
  }
  return (
    <div>
      <input onChange={(e) => handleDateUpdate(e)} type="date" name="" id="" />
      
      <p> You are {dateValue} years old</p>
    </div>
  );
}
