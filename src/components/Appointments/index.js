import {Component} from 'react'

import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentList: []}

  onChangeTitleInput = event => {
    this.setState({date: event.target.value})
  }

  onChangeDateInput = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {title, date, appointmentList} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="app-heading">Add Appointment</h1>
          <div className="comments-inputs">
            <form className="form" onSubmit={this.onAddComment}>
              <label htmlFor="text">TITLE</label>
              <input
                type="text"
                id="text"
                className="name-input"
                placeholder="Your Name"
                value={title}
                onChange={this.onChangeTitleInput}
              />
              <label htmlFor="date">DATE</label>
              <input
                placeholder="Your Comment"
                className="comment-input"
                value={date}
                onChange={this.onChangeDateInput}
                type="date"
                id="date"
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="comments"
            />
          </div>
          <hr className="line" />
          <p className="heading">Appointment</p>
        </div>
      </div>
    )
  }
}
export default Appointments
