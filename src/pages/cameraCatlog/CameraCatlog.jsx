import React from 'react';
import NavbarTop from '../../components/navbarTop/NavbarTop';
import "./cameracatlog.css"
import {camerarows, camerarows2} from "../../cameraCatlogDummyData.js"
import CardComponent from '../../components/cardcomponent/CardComponent.jsx';

export default function CameraCatlog() {
  return (
    <div className='cameraCatlog'>
      <NavbarTop/>
      <div className='shop'>
      <div className="products">
        {" "}
        {camerarows.map((product) => (
            <CardComponent data = {product} />
        ))}
      </div>
          <br/>
          <br/>
      <div className="products">
        {" "}
        {camerarows2.map((product) => (
            <CardComponent data = {product} />
        ))}
      </div>
      
    </div>
    </div>
  );
}
