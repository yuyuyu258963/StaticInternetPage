import { Carousel } from 'antd'
import React from 'react'
import { CarouselImgs } from '../../constants';

import "./style.scss"

export default function Content() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  
  return (
    <div className="div-content">
      <div id="carousel-content">
        <ul >
          {
            CarouselImgs.map(item => {
              return (
                <li key={item} >
                  <img src={item} ></img>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}