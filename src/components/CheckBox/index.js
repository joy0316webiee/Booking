import React, { Component } from 'react';

import style from "./style.module.scss";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      checked: props.checked || false
    }
  }
  
  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked })
  };

  render() {
    return (
      <div className={style.container}>
        <label className={style.boxWrapper}>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
           <span className={style.checkmark}></span>
        </label>
        { this.props.children }
      </div>
    )
  }
}

export default CheckBox;
