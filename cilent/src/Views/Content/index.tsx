import { Carousel, Col, Divider, Row } from 'antd'
import React from 'react'
import { CarouselImgs, InfoImg, InfoImg2, InfoImg3 } from '../../constants';

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
          <div className="row row-top">
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
          <div className="row-info-bottom" >
            <div className="row row-mid">
                {
                  InfoImg2.map(item => {
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
            <Divider />
            <div className="row row-mid">
                {
                  InfoImg3.map(item => {
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
          </div>
          
        </div>
      </section>
      
    </div>
  )
}