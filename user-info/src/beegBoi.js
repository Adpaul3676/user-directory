import React, {Component} from 'react';
import data from './data.js'
import Button1 from './button1.js';
import Button2 from './button2.js';
import UserInfo from './userInfo.js';

class BeegBoi extends Component {
  constructor () {
    super ()

    this.state = {
      tonsOfInfo: data,
      place: 1,
    }

    this.onPlaceChangeBack = this.onPlaceChangeBack.bind (this);
    this.onPlaceChangeForward = this.onPlaceChangeForward.bind (this);
  }

  onPlaceChangeBack () {
    if (this.state.place !== 1) {
      this.setState ({place: this.state.place - 1});
    } else {
      this.setState ({place: 25});
    }
  }
  
  onPlaceChangeForward () {
    if (this.state.place !== 25) {
      this.setState ({place: this.state.place + 1});
    } else {
      this.setState ({place: 1});
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
            change = {this.onPlaceChangeBack}
            />
          </div>
          <div className='buttonsBox'>
            <div className='editBox'>Edit</div>
            <div className='deleteBox'>Delete</div>
            <div className='newBox'>New</div>
          </div>
          <div className='nextBox'>
          <Button2
            change = {this.onPlaceChangeForward}
            />
          </div>
        </div>
      </section>
    </section>
    )
  }
}

export default BeegBoi;