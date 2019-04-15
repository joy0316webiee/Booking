import React, { Component } from 'react'

// Components
import OptionBox from '../../components/OptionBox'
import SelectBox from '../../components/SelectBox'
import WarningText from '../../components/WarningText'

// Resource
import imgAlipay from '../../resources/images/alipay_logo.png'
import imgCard from '../../resources/images/card.png'
import imgVisa from '../../resources/images/visa.png'
import imgExpress from '../../resources/images/express.png'

// Style
import style from './style.module.scss'

let countryArray = [{
  label: 'Your country',
  value: 'country'
}, {
  label: 'German',
  value: 'grn'
}, {
  label: 'Russia',
  value: 'rus'
}];

let PAYMENT_ALIPAY  = 0;
let PAYMENT_CREDIT = 1;

class PayMethod extends Component {
  state = {
    selectedOption: 1,
    warning: true
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    console.log(changeEvent.target.value);
  };

  render() {
    return (
      <div className={style.container}>
        <div className={style.alipay}>
          <OptionBox
            name={"payType"}
            value={PAYMENT_ALIPAY}
            textLabel={"Alipay"}
            checked={this.state.selectedOption == PAYMENT_ALIPAY}
            onChange={this.handleOptionChange}
          />
          {this.state.selectedOption == PAYMENT_ALIPAY && <div className={style.alipayContent}>
            <p>Pay easily and securely with Alipay</p>
            <div className={style.alipayFoot}>
              <img src={imgAlipay}/>
              <div className={style.payNow}>
                <button>Pay Now</button>
              </div>
            </div>
          </div>}
        </div>
        <div className={style.credit}>
          <div className={style.creditHead}>
            <div className={style.creditOption}>
              <OptionBox
                name={"payType"}
                value={PAYMENT_CREDIT}
                textLabel={"Credit Card"}
                checked={this.state.selectedOption == PAYMENT_CREDIT}
                onChange={this.handleOptionChange}
              />
            </div>
            <div className={style.imgGroup}>
              <img src={imgCard} />
              <img src={imgVisa} />
              <img src={imgExpress} />
            </div>
          </div>
          {this.state.selectedOption == PAYMENT_CREDIT && <div className={style.creditContent}>
            <div className={style.creditBody}>
              <div className={style.cardNumber}>
                <label>Card Number</label>
                <input type="text" placeholder={"1234 1234 1234 1234"}/>
              </div>
              <div className={style.expirationDate}>
                <label>Expiration date</label>
                <input type="text" placeholder={"MM/YY"}/>
              </div>
              <div className={style.cvc}>
                <label>CVC</label>
                <input type="text" placeholder={"CVC"}/>
              </div>
              <div className={style.postal}>
                <label>Postal Code</label>
                <input type="text" placeholder={"0000000"}/>
              </div>
              <div className={style.country}>
                <SelectBox
                  defaultValue="country"
                  options={countryArray}
                />
              </div>
            </div>
            <div className={style.creditFoot}>
              <button style={style.buttonPay}>
                Pay Now by Credit Card
              </button>
              <div className={style.warningPay}>
              {this.state.warning && <WarningText>
                <label>Please fill out every field of the form above as instructed.</label>
              </WarningText>}
              </div>
            </div>
          </div>}
        </div>
      </div>
    )
  }
}

export default PayMethod;
