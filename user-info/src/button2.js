import React, {Component} from 'react';
import data from './data.js';

class Button2 extends Component {
  constructor (props) {
    super (props)

    this.state = {
      tonsOfInfo: data,
    }
  }

  
  render () {
    return (
      <button className='nextButtonClick' onClick={() => this.props.change()}>Next</button>
    )
  }
}

export default Button2;