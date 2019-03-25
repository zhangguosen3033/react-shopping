import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './footer.scss'

class Footer extends Component {
  render() {
    return (
      <section className='footer-contain'>
        <NavLink to='/home'>
          <div></div>
          <span>首页</span>
        </NavLink>
        <NavLink to='/catory'>
          <div></div>
          <span>分类</span>
        </NavLink>
        <NavLink to='/shop'>
          <div></div>
          <span>商品</span>
        </NavLink>
        <NavLink to='/mine'>
          <div></div>
          <span>我的</span>
        </NavLink>
      </section>
    )
  }
}

export default Footer;