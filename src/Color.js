import React,{useState} from "react";
import "./color.css";
export default function Color() {
  const [picColor, setColor] = useState("");
  const [btnclas,setClass]=useState("box1");
  const color = [
    "red",
    "white",
    "purple",
    "blue",
    "green",
    "orange",
    "black",
    "yellow",
    "azure",
    "aqua",
  ];
  function myFucn(data) {
    setColor(data);
  }
  function setClassFun(){
if(btnclas=="box1"){
    setClass('box')
}else{
    setClass('box1')
}
  }
  return (
    <>
      <div className={btnclas}>
        {color.map((data, i) => {
          return (
            <div
              onClick={() => myFucn(data)}
              className={data}
              style={{ backgroundColor: data }}
            ></div>
          );
        })}
      </div>

      <button onClick={setClassFun} style={{ backgroundColor: picColor }}>Pick a color</button>
    </>
  );
}
