import { Carousel, Col, Divider, Row } from 'antd'
import React from 'react'
import { CarouselImgs, classification1Data, classification1Data2, flowerData, InfoImg, InfoImg2, InfoImg3 } from '../../constants';

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
      {
        classifiedSection()
      }
      <Divider />
      {
        classifiedSection2()
      }
    </div>
  )
}

// 下面的第二个分区的
const classifiedSection = () => {
  return (
    <section className="sec" >
      <header >
        <a href="da" >公共区</a>
        <span className="span-split" ></span>
        <a href="" >VIP</a>
        <span className="span-split" ></span>
        <a href="" >精选区</a>
        <span className="span-split" ></span>
        <a href="" >
          所有类型
          <span className="span-split-special" >
            &gt;
          </span>
        </a>
      </header>
      <div id="bottom-content">
        {
          classification1Data.map((item,index) => {
            return (
              <div className="bottom-content-item class-1" key={index} >
                <img src={item.url} ></img>
                <a href={item.url} >{`@ ${item.author}`}</a>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

// 下面第三个分区的
const classifiedSection2 = () => {
  return (
    <section className="sec" >
      <header >
        <a href="" >
          花纹推荐区
          <span className="span-split-special" >
            &gt;
          </span>
        </a>
        <div style={{flex: 1}}></div>
        <div style={{float: 'right',display:"inline-block"}} className="header-right-g" >
          {
            flowerData.map(item => 
              <a href={item} key={item} >
                {item}
              </a>
            )
          }

        </div>
        
      </header>
      <div id="bottom-content">
        {
          classification1Data2().map((item,index) => {
            return (
              <div className="bottom-content-item class-2" key={index} >
                <img src={item.url} ></img>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

