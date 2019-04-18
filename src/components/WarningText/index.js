import React, { Component } from 'react'

// Resource
import imgWarning from '../../resources/images/warning.svg'

// Style
import style from './style.module.scss'

class WarningText extends Component {
  render() {
    return (
      <div className={style.container}>
         { this.props.children }
         <img src={imgWarning} alt="warning" />
      </div>
    )
  }
}

export default WarningText
