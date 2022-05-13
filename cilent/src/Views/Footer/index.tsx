import React from 'react'

import "./style.scss"

export default function Footer() {
  return (
    <div className="div-footer">
      <div >
        <h4 >
          我是客户
        </h4>
        <ul >
            <li >
            交易规则
            </li>
            <li >
              平台服务协议
            </li>
            <li >
              会员权益
            </li>
          </ul>
      </div>
      <div >
        <h4>
          我是设计师
        </h4>
          <ul >
            <li >
              成为设计师
            </li>
            <li >
              开通工作室
            </li>
            <li >
              联系厂家
            </li>
          </ul>
      </div>
      <div >
        <h4>
          内容发布
        </h4>
          <ul >
            <li >
              规则修改
            </li>
            <li >
              免责声明
            </li>
          </ul>
      </div>
      <div >
        <h4 >
          联系我们
        </h4>
          <ul >
            <li >
              456-895-156
            </li>
            <li >
              关于我们...
            </li>
          </ul>
      </div>
    </div>
  )
}