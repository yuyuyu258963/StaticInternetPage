import { Carousel, Col, Divider, Row } from 'antd'
import React from 'react'
import { CarouselImgs, InfoImg } from '../../constants';

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
      <section className="sec-1" >
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
        {/* 轮播图右侧的图标 */}
        <div className="sec-1-info" >
          <div className="row">
              {
                InfoImg.map(item => {
                  return (
                    <div>
                      <img src={item.url} >
                      </img>
                      <span >
                        {
                          item.name
                        }
                      </span>
                    </div>
                  )
                })
              }
          </div>
          {/* <Divider /> */}
          <div className="row-info-bottom" >
            
          </div>
          
        </div>
      </section>
      
    </div>
  )
}