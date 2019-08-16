import React from 'react'
import './HomeScreen.scss'
import { Link } from 'react-router-dom'

const HomeScreen = () => (
  <div className='home-screen'>
    <div className='left-container'>
      <h1>Hello from the GSG robotics club</h1>
      <p>
        We meet every Thursday night to build cool stuff. Lorem ipsum, lorem ipsum.
        Please always treat a robot in the same way that you would like a robot to treat you.
        <br/><br/>
        From wikipedia - <br/>
        "A robot is a machine—especially one programmable by a computer— capable of carrying out a complex series of actions automatically. Robots can be guided by an external control device or the control may be embedded within. Robots may be constructed on the lines of human form, but most robots are machines designed to perform a task with no regard to their aesthetics."
      </p>
      <Link className='join-button' to='/join'>Join our club!</Link>
    </div>
    
    <div className='right-container'>
      <img src='/robot_arm_lg_1.svg' alt='' />
      <img src='/robot_arm_lg_2.svg' alt='' />
      <img src='/robot_arm_lg_3.svg' alt='' />
      <img src='/robot_arm_lg_4.svg' alt='' />
    </div>
  </div>
)

export default HomeScreen