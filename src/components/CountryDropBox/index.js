import React, { Component } from 'react'

// Resources
import imgUKFlag from '../../resources/images/en.png'
import imgCNFlag from '../../resources/images/cn.png'

// Style
import style from './style.module.scss'

let countryOptions = [{
  key: 0,
  value: imgUKFlag
}, {
  key: 1,
  value: imgCNFlag
}];

class CountryDropBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      selectValue: countryOptions[0].key
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this._handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this._handleClickOutside);
  }

  _onActive = (active) => {
    this.setState({
      active
    });

    console.log("#####", active);
  }

  _onChange = (key) => {
    this.setState({
      selectValue: key,
      active: false
    });
  }

  _handleClickOutside = (event) => {
    console.log("here");
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this._onActive(false);
    }
  }

  _setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  render() {
    let { selectValue } = this.state;
    
    var options = countryOptions.map(item => {
      return (
        <div
          className={style.listItem}
          style={selectValue === item.key && {
            backgroundColor: "#aad9b3",
          } || {}}
          key={item.key}
          onClick={() => this._onChange(item.key)}
        >
          <img src={item.value} alt="lang" />
        </div>
      );
    })

    return (
      <div className={style.container}>
        <div
          className={style.content}
          ref={this._setWrapperRef}
        >
          <div
            className={style.selected}
            onClick={() => this._onActive(! this.state.active)}
          >
            <img src={countryOptions[this.state.selectValue].value} alt="lang" />
          </div>
          {this.state.active && options}
        </div>
      </div>
    )
  }
}

export default CountryDropBox;
