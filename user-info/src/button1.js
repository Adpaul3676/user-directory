import React, {Component} from 'react';
import data from './data.js';

class Button1 extends Component {
  constructor (props) {
    super (props)

    this.state = {
      tonsOfInfo: data,
    }
  }

  
  render () {
    return (
      <button className='previousButtonClick' onClick={() => this.props.change()}>Previous</button>
    )
  }
}

export default Button1;