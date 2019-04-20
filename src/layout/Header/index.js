import React, { Component } from 'react'

// Components
import SelectBox from '../../components/SelectBox'
import CountryDropBox from '../../components/CountryDropBox'

// Resources
import logoImage from '../../resources/images/logo.png'

// Styling
import style from './style.module.scss'

class Header extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.logo}>
            <div className={style.logoImage}>
              <img src={logoImage} alt="logo"/>
            </div>
            <div className={style.logoLabel}>
              <span className={style.xScreen}>My Test Hero</span>
              <span className={style.sScreen}>Checkout</span>
            </div>
          </div>
          <div className={style.lang}>
            <CountryDropBox/>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
