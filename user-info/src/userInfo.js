import React, {Component} from 'react';
import data from './data.js'

class UserInfo extends Component {
  constructor (props) {
    super (props)

    this.state = {
      tonsOfInfo: data,
      name: '',

    }
  }

  render () {
    return (
      <section className='innerUserBox'>
        <div className='indexBox'>{this.props.place}/25</div>
        <div className='nameBox'>{`${this.state.tonsOfInfo[this.props.place - 1].name.first} ${this.state.tonsOfInfo[this.props.place - 1].name.last}`}</div>
        <div className='infoBox'>
          <div className='locationBox'>{`From: ${this.state.tonsOfInfo[this.props.place - 1].city}, ${this.state.tonsOfInfo[this.props.place -1].country}`}</div>
          <div className='jobTitleBox'>{`Job Title: ${this.state.tonsOfInfo[this.props.place - 1].title}`}</div>
          <div className='employerBox'>{`Employer: ${this.state.tonsOfInfo[this.props.place - 1].employer}`}</div>
        </div>
        <div className='movieBox'>Favorite Movies:</div>
        <div className='actualMovieBox'>{`1. ${this.state.tonsOfInfo[this.props.place - 1].favoriteMovies[0]}`}</div>
        <div className='actualMovieBox1'>{`2. ${this.state.tonsOfInfo[this.props.place - 1].favoriteMovies[1]}`}</div>
        <div className='actualMovieBox2'>{`3. ${this.state.tonsOfInfo[this.props.place - 1].favoriteMovies[2]}`}</div>
        </section>
    )
  }
}

export default UserInfo