import React, { Component } from 'react'

// Components
import Header from '../../layout/Header'
import OptionBox from '../../components/OptionBox'

// Style
import style from './style.module.scss'

let PACKAGE_ONE = 0;
let PACKAGE_TWO = 1;
let ONE_SESSION = 2;

class Payment extends Component {
  state = {
    selectedOption: 0,
  };

  handleOptionChange = (value) => {
    this.setState({
      selectedOption: value
    });
    console.log(value);
  };

  render() {
    return (
      <div className={style.container}>
        <Header />
        <div className={style.content}>
          <div className={style.title}>
            <h1>Choose payment</h1>
            <h2>You choose the <span>IELTS</span> sessions on <span>Tuesday 5:30 pm.</span></h2>
          </div>
          <div className={style.desc}>
            <p>Save money and get the best results by booking a package of IELTS sessions</p>
            <span>I already have package credits</span>
          </div>
          <div className={style.packageWrapper}>
            <div className={style.package1}>
              <div
                className={style.packHead}
                style={this.state.selectedOption !== PACKAGE_ONE && {
                  backgroundColor: "#E6E3E6" } || {}
                }
                onClick={() => this.handleOptionChange(PACKAGE_ONE)}
              >
                <div className={style.packHeadTop}>
                  <label
                    style={this.state.selectedOption !== PACKAGE_ONE && {
                      color: "#262626" } || {}
                    }
                  >
                    Package1
                  </label>
                  <div
                    className={style.percentage}
                    style={this.state.selectedOption !== PACKAGE_ONE && {
                      color: "#5FB868" } || {}
                    }
                  >
                    -30%
                  </div>
                </div>
                <div className={style.packHeadBottom}>
                  <span>£120</span>
                </div>
              </div>
              <div className={style.packBody}>
                <div className={style.list}>
                  <span></span>
                  <label>3 IELTS sessions</label>
                </div>
                <div className={style.list}>
                  <span></span>
                  <label>5 x AA</label>
                </div>
                <div className={style.list}>
                  <span></span>
                  <label>Bonus ebook</label>
                </div>
              </div>
            </div>
            <div className={style.package2}>
              <div
                className={style.packHead}
                style={this.state.selectedOption !== PACKAGE_TWO && {
                  backgroundColor: "#E6E3E6" } || {}
                }
                onClick={() => this.handleOptionChange(PACKAGE_TWO)}
              >
                <div className={style.packHeadTop}>
                  <label
                    style={this.state.selectedOption !== PACKAGE_TWO && {
                      color: "#262626" } || {}
                    }
                  >
                    Package2
                  </label>
                  <div
                    className={style.percentage}
                    style={this.state.selectedOption !== PACKAGE_TWO && {
                      color: "#5FB868" } || {}
                    }
                  >
                    -35%
                  </div>
                </div>
                <div className={style.packHeadBottom}>
                  <span>£930</span>
                </div>
              </div>
              <div className={style.packBody}>
                <div className={style.list}>
                  <span></span>
                  <label>10 IELTS sessions, including one premium</label>
                </div>
                <div className={style.list}>
                  <span></span>
                  <label>50 x AA</label>
                </div>
                <div className={style.list}>
                  <span></span>
                  <label>Whole ebook library</label>
                </div>
              </div>
            </div>
            <div className={style.oneSession}>
              <div
                className={style.packHead}
                style={this.state.selectedOption !== ONE_SESSION && {
                  backgroundColor: "#E6E3E6" } || null
                }
                onClick={() => this.handleOptionChange(ONE_SESSION)}
              >
                <div className={style.packHeadTop}>
                  <label
                    style={this.state.selectedOption !== ONE_SESSION && {
                      color: "#262626" } || {}
                    }
                  >
                    One Session
                  </label>
                  <div className={style.sessionMount}>£70</div>
                </div>
              </div>
              <div className={style.packBody}>
                <div className={style.list}>
                  <label>No thanks, I want to pay the full price and only book this session.</label>
                </div>
              </div>
            </div>
          </div>
          <button>BOOK PACKAGE 1 FOR £120 </button>
        </div>
      </div>
    )
  }
}

export default Payment;
