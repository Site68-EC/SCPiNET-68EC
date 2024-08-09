import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignIn1 from '../components/sign-in1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Steep Revolving Giraffe</title>
        <meta property="og:title" content="Steep Revolving Giraffe" />
      </Helmet>
      <SignIn1
        heading1={
          <Fragment>
            <h2 className="home-text thq-heading-2">
              THE ETHICS COMMITTEE [SITE-68]
            </h2>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text1 thq-body-small">
              REPORT A MISCONDUCT
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text2 thq-body-small">ENTER</span>
          </Fragment>
        }
        rootClassName="sign-in1-root-class-name"
      ></SignIn1>
    </div>
  )
}

export default Home
