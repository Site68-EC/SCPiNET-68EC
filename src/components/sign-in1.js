import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './sign-in1.css'

const SignIn1 = (props) => {
  return (
    <div
      className={`sign-in1-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="sign-in1-max-width thq-section-max-width">
        <div className="sign-in1-form-root">
          <div className="sign-in1-form">
            <div className="sign-in1-title-root">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="sign-in1-text3 thq-heading-2">
                      THE ETHICS COMMITTEE [SITE-68]
                    </h2>
                  </Fragment>
                )}
              </h2>
              <div className="sign-in1-have-an-account-login"></div>
            </div>
            <form className="sign-in1-form1">
              <div className="sign-in1-email">
                <input
                  type="email"
                  id="thq-sign-in-1-email"
                  required="true"
                  placeholder="USERNAME"
                  className="sign-in1-textinput thq-input thq-body-large"
                />
              </div>
              <div className="sign-in1-password">
                <div className="sign-in1-container1">
                  <div className="sign-in1-hide-password"></div>
                </div>
                <input
                  type="password"
                  id="thq-sign-in-1-password"
                  required="true"
                  placeholder="Password"
                  className="sign-in1-textinput1 thq-input thq-body-large"
                />
              </div>
            </form>
            <div className="sign-in1-container2">
              <div className="sign-in1-container3">
                <button
                  type="submit"
                  className="sign-in1-button thq-button-filled"
                >
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="sign-in1-text5 thq-body-small">
                          ENTER
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sign-in1-container4">
          <div className="sign-in1-divider">
            <div className="sign-in1-divider1"></div>
            <div className="sign-in1-divider2"></div>
          </div>
          <button type="button" className="sign-in1-button1 thq-button-outline">
            <span>
              {props.action2 ?? (
                <Fragment>
                  <span className="sign-in1-text4 thq-body-small">
                    REPORT A MISCONDUCT
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

SignIn1.defaultProps = {
  heading1: undefined,
  action2: undefined,
  action1: undefined,
  rootClassName: '',
}

SignIn1.propTypes = {
  heading1: PropTypes.element,
  action2: PropTypes.element,
  action1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default SignIn1
