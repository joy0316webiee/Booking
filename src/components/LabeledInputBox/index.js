import React, { Component } from 'react'

import WarningText from '../WarningText'

import style from './style.module.scss'

class LabeledInputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      warning: this.props.warningState || false
    };
  }

  _onChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className={style.container}>
        <div className={this.state.warning ? style.inputWarning : style.inputNormal}>
          <div className={style.inputText}>
            <label>{this.props.labelText}</label>
            <input type="text" onChange={this._onChange} value={this.state.value}/>
          </div>
          {this.state.warning && <WarningText>
            {this.props.labelText} is incorrect
          </WarningText>}
        </div>
      </div>
    )
  }
}

export default LabeledInputBox;
