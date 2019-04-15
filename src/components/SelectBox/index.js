import React, { Component } from 'react'

import style from './style.module.scss'

class SelectBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValue: this.props.defaultValue || "Select Me"
    };
  }

  _onChange = (event) => {
    this.setState({
      selectValue: this.props.options[event.target.selectedIndex].label
    });
  }

  render() {
    let selectValue = this.state.selectValue;
    var options = this.props.options.map(function(item) {
      if (selectValue === item.value) {
        return (
          <option value="selected" value={item.value} key={item.value}>
            {item.label} 
          </option>
        );
      } else {
        return (
          <option value={item.value} key={item.value}>
            {item.label} 
          </option>
        );
      }

    })

    return (
      <div className={style.container}>
        <select onChange={this._onChange}>
          { options }
        </select>
      </div>
    )
  }
}

export default SelectBox;
