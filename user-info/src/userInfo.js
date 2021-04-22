import React, {Component} from 'react';
import data from './data.js'
import Button1 from './button1.js'

class UserInfo extends Component {
  constructor (props) {
    super (props)

    this.state = {
      tonsOfInfo: data,
    }
  }

  

  render () {
    return (
      <section className='innerUserBox'>
        <div className='indexBox'>{this.props.place}/25</div>
          <div className='nameBox'></div>
          <div className='infoBox'></div>
          <div className='movieBox'></div>
      </section>
    )
  }
}

export default UserInfo