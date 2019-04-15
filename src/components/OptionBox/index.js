import React, { Component } from 'react'

import style from './style.module.scss'

class OptionBox extends Component {
  render() {
    return (
      <div>
        <label className={style.container}>
          <label className={style.textLabel}>{this.props.textLabel}</label>
          <input
            type="radio"
            name={this.props.name}
            value={this.props.value}
            checked={this.props.checked}
            onChange={this.props.onChange}
          />
          <span className={style.checkmark}></span>
        </label>
      </div>
    )
  }
}

export default OptionBox
