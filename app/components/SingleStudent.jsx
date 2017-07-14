
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStudent, removeStudent } from '../reducers/students';

/* -----------------    COMPONENT     ------------------ */

class Singlestudent extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {

    const thisStudent = this.props.thisStudent
    const name = thisStudent ? thisStudent.name : '';
    const email = thisStudent ? thisStudent.email : '';
    const studentCampus = thisStudent
      ? this.props.campuses.find(campus => (
        campus.id === Number(thisStudent.CampusId)
      ))
      : '';

    return (

      <div className="container">
        <div className="page-header">
          <h1>{name}</h1>
        </div>
        <h1>{email}</h1>
          <NavLink to={`/campuses/${studentCampus.id}`}>
            <h1>{studentCampus.name}</h1>
          </NavLink>
          <img className="nearBottom" src={studentCampus.imageUrl} height="30%vh" width="30%vw" />
        <div className="nearBottom">
          <h1>Edit Student Info:</h1>
          {this.renderEditStudent()}
        </div>
        <div className="bottom d-inline" >
          <button
            className="btn btn-default btn-s pull-left"
            onClick={ () => {
              this.props.removeStudent(thisStudent.id)
              this.props.history.push('/students')
              }}>
            Remove Student
          </button>
        </div>
      </div>
    );
  }

  renderEditStudent() {
    return (
      <form onSubmit={this.onSubmit} className="list-group-item inline">
        <ul className="list-inline">
          <li>
            <input
              name="name"
              type="text"
              className="form-like large-font"
              placeholder="Student Name"
            />
            <input
              name="email"
              type="text"
              className="form-like large-font"
              placeholder="Student Email"
            />
            <select name="CampusId">
              { this.props.campuses.map(campus => (
                <option key={campus.id} value={campus.id}>{campus.name}</option>
              ))}
            </select>
          </li>
            <button
                type="submit"
                className="btn btn-warning btn-s pull-right">
                <span className="glyphicon glyphicon-plus" />
            </button>
        </ul>
      </form>
    );
  }

  onSubmit(event) {
    event.preventDefault();
    const thisStudent = this.props.thisStudent
    const student = {
      name: event.target.name.value !== ''
        ? event.target.name.value
        : thisStudent.name,
      email: event.target.email.value !== ''
        ? event.target.email.value
        : thisStudent.email,
      CampusId: event.target.CampusId.value !== ''
        ? event.target.CampusId.value
        : thisStudent.CampusId
    }
    event.target.name.value = '';
    event.target.email.value = '';
    this.props.updateStudent(thisStudent.id, student)
  }


}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state, componentProps) => (
  {
    campuses: state.campuses,
    thisStudent: state.students.find(student => (
      student.id === Number(componentProps.match.params.studentId)
    ))
  }
);

const mapDispatch = ({ updateStudent, removeStudent });

export default connect(mapState, mapDispatch)(Singlestudent);
