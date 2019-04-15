import React, { Component } from 'react'

// Components
import Header from '../../layout/Header'
import PayMethod from '../../layout/PayMethod'
import LabeledInputBox from '../../components/LabeledInputBox'
import InputBox from '../../components/InputBox'
import CheckBox from '../../components/CheckBox'
import ButtonApply from '../../components/ButtonApply'

// Resource
import imgBookMark from '../../resources/images/bookmark.svg'

// Style
import style from './style.module.scss'

class OrderSummary extends Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
        <div className={style.content}>          
          <div className={style.package}>
            <div className={style.packWrapper}>
              <div className={style.packHead}>
                Package1
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
                <div className={style.date}>
                  First session: <span>IELTS</span>, on <span>Tuesday 5:30 pm</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.forms}>
            <div className={style.formwrapper}>
              <h1>Order Summary</h1>
              <div className={style.details}>
                <h2>Your Details</h2>
                <LabeledInputBox
                  labelText="Full Name"
                  warningState={false}
                />
                <LabeledInputBox
                  labelText="Email"
                  warningState={true}
                />
                <InputBox
                  hintText="Your Phone"
                />
                <div className={style.checkBox}>
                  <CheckBox
                    checked={true}
                  >
                    <label>Agree to the <a href="#">Terms of Service</a></label>
                  </CheckBox>
                </div>
                <div className={style.checkBox}>
                  <CheckBox>
                    <label>I want to be informed about news and special offers</label>
                  </CheckBox>
                </div>
              </div>
              <div className={style.payment}>
                <h2>Payment</h2>
                <div className={style.price}>
                  <div className={style.nonPack}>
                    <label>Non-Package Price:</label>
                    <span>£160</span>
                  </div>
                  <div className={style.pack}>
                    <label>Package Savings:</label>
                    <span>30%</span>
                  </div>
                  <div className={style.dashed}>
                  </div>
                  <div className={style.total}>
                    <label>Your Price:</label>
                    <span>£120</span>
                  </div>
                </div>
                <div className={style.haveCoupon}>
                  <img src={imgBookMark} />
                  <span>I have package coupon code</span>
                </div>
                <ButtonApply />                
                <PayMethod />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderSummary;
