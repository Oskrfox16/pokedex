import React from "react";
import './Square.css'


const Square = ({ name, img, type , experience }) => (
  <div className="Square-box">
    <h4 className="Square-title">{name}</h4>
    <img className="Square-img" src={img} alt="" />
   <p className="Square-type">Type: {type}</p>
   <p className="Square-exp">EXP:  {experience}</p>
  </div>
)

export default Square;