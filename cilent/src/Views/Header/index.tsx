import React from 'react'
import { LOGO } from '../../Images'

import "./style.scss"

export default function Header() {
  return (
    <header className="App-header">
      <div className="head-left">
        <img src={LOGO} alt="logo" ></img>
      </div>
      <div className="head-mid">
        <ul >
          <li ><a >da</a></li>
          <li ><a >da</a></li>
          <li ><a >da</a></li>
          <li ><a >da</a></li>
        </ul>
      </div>
      <div className="head-right">
        dasda
      </div>
    </header>
  )
}