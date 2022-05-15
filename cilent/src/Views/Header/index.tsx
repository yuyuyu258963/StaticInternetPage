import { Input } from 'antd';
import React from 'react'
import { aHead, selectMenu } from '../../constants'
import { LOGO } from '../../Images'

import "./style.scss"
 
const { Search } = Input;

export default function Header() {
  
  return (
    <header className="App-header">
      <div className="head-left">
        <img src={LOGO} alt="logo" ></img>
      </div>
      <div className="head-mid">
        <ul >
          {
            aHead.map(item => 
              <li key={item}>
                <a href={item}>{item}</a>
              </li>
            )
          }
        </ul>
      </div>
      <div id="m-span">
        <div style={{width:"13%"}}></div>
        <Search placeholder="" style={{ width: 800, float: 'right',marginTop:"14px", borderRadius:'5px'}} size='large' />
      </div>
      <div className="head-right">
        <ul id="head-right-ul">
          {
            selectMenu.map(menu =>
              <li >
                <a href={menu.name} >
                <img src={menu.link} alt={menu.name} ></img>
                </a>
              </li>
            )
          }
          
        </ul>
      </div>
    </header>
  )
}