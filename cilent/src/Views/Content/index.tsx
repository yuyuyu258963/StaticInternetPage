import { Carousel, Col, Divider, Row } from 'antd'
import React from 'react'
import { CarouselImgs, classification1Data, classification1Data2, diffKindClothes, diffKindClothesDateNew, factoryData, flowerData, InfoImg, InfoImg2, InfoImg3, kindData, timeData } from '../../constants';

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
                    <img src={item} id="car-img" ></img>
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
        classifiedSectionKins()
      }
      <Divider />
      {
        classifiedSectionDate()
      }
      <Divider />
      {
        classifiedSection2()
      }
      <Divider />
      {
        classifiedSection3()
      }
      <Divider />
      {

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


// 厂家推荐 第四个分区
const classifiedSection3 = () => {
  return (
    <section className="sec" >
      <header >
        <a href="" >
          厂家推荐
          <span className="span-split-special" >
            &gt;
          </span>
        </a>
        <div style={{flex: 1}}></div>
        
      </header>
      <div id="bottom-content">
        {
          factoryData.map((item,index) => {
            return (
              <div className="bottom-content-item class-3" key={index} >
                <img src={item.url} ></img>
                <p style={{fontSize:"18px",fontWeight:"bold",textAlign:"left"}} >
                  {item.title}
                </p>
                <p style={{textAlign:"left",fontSize:"12px"}} >
                  {item.comment}
                </p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

// 工艺推荐区
const classifiedSectionKins = () => {
  return (
    <section className="sec" >
      <header >
        <a href="" >
          工艺推荐
          <span className="span-split-special" >
            &gt;
          </span>
          &nbsp;
        </a>
        <div style={{flex: 1}}></div>
        <div style={{float: 'right',display:"inline-block"}} className="header-right-g" >
          {
            kindData.map((item:string) => 
              <a href={item} key={item} >
                {item}
              </a>
            )
          }

        </div>
        
      </header>
      <div id="bottom-content" >
        {
          diffKindClothes.map((item,index) => {
            return (
              <div className="bottom-content-item class-kind" key={index} >
                <img src={item.url} ></img>
                <p style={{textAlign: 'left',fontWeight: 'bold'}} >
                  {item.kind}
                </p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}


// 新品推荐区
const classifiedSectionDate = () => {
  return (
    <section className="sec" >
      <header >
        <a href="" >
          新品抢先看
          <span className="span-split-special" >
            &gt;
          </span>
          5月
        </a>
        <div style={{flex: 1}}></div>
        <div style={{float: 'right',display:"inline-block"}} className="header-right-g" >
          {
            timeData.map((item:string) => 
              <a href={item} key={item} >
                {item}
              </a>
            )
          }
        </div>
        
      </header>
      <div id="bottom-content" >
        {
          diffKindClothesDateNew.map((item,index) => {
            return (
              <div className="bottom-content-item class-kind" key={index} >
                <img src={item.url} ></img>
                <p style={{textAlign: 'left',fontWeight: 'bold'}} >
                  {/* {item.kind} */}
                </p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
