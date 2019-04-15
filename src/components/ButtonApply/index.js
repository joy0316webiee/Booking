import React, { Component } from 'react'

import style from './style.module.scss'

class ButtonApply extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  _onChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className={style.container}>
        <input
          type="text"
          onChange={this._onChange}
          value={this.state.value}
          placeholder={"Coupon Code"}
        />
        <button>APPLY</button>
      </div>
    )
  }
}

export default ButtonApply;