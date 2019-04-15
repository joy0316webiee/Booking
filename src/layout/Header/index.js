import React, { Component } from 'react'

import SelectBox from '../../components/SelectBox'
import logoImage from '../../resources/images/logo.png'

import style from './style.module.scss'

let langsArray = [{
  label: 'English',
  value: 'eng'
}, {
  label: 'Russia',
  value: 'rus'
}];


class Header extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.logo}>
            <div className={style.logoImage}>
              <img src={logoImage} />
            </div>
            <div className={style.logoLabel}>
              <span className={style.xScreen}>My Test Hero</span>
              <span className={style.sScreen}>Checkout</span>
            </div>
          </div>
          <div className={style.lang}>
            <SelectBox
              defaultValue="eng"
              options={langsArray}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
