import React, {Component} from 'react';
import data from './data.js'
import Button1 from './button1.js';
import UserInfo from './userInfo.js';

class BeegBoi extends Component {
  constructor () {
    super ()

    this.state = {
      tonsOfInfo: data,
      place: 5,
    }
  }


  onPlaceChangeBack () {
    if (this.state.place !== 1) {
      this.setState ({place: (this.state.place--)});
    } else {
      this.setState ({place: 25});
    }
  }

  render () {
    return (
      <section>
      <div className ='topBox'>
        <div className='homeBox'>Home</div>
      </div>
      <section className='bigBox'>
        <div className='userBox'>
          <UserInfo 
          place = {this.state.place}

          />
        </div>
        <div className='underUserBox'>
          <div className='previousBox'>
            <Button1 
            place = {this.state.place}
            change = {this.onPlaceChangeBack}
            />
          </div>
          <div className='buttonsBox'>
            <div className='editBox'></div>
            <div className='deleteBox'></div>
            <div className='newBox'></div>
          </div>
          <div className='nextBox'>
            {/* Add a new component here */}
          </div>
        </div>
      </section>
    </section>
    )
  }
}

export default BeegBoi;