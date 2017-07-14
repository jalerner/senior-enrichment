
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentItem from './studentItem';
import { addStudent } from '../reducers/students';
import { addCampus } from '../reducers/campuses';

/* -----------------    COMPONENT     ------------------ */

class AllStudents extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    const students = this.props.students;
    return (
      <div className="container">
        <div className="page-header">
          <h1>STUDENTS</h1>
        </div>
        <table className="table table-striped table-responsive">
          <thead className>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Campus</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (<StudentItem student={student} key={student.id} />))}
          </tbody>
        </table>
        <div className="bottom">
          <h1>ADD STUDENT</h1>
          {this.renderNewStudent()}
        </div>
      </div>
    );
  }

  renderNewStudent() {
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
    const student = {
      name: event.target.name.value
        ? event.target.name.value
        : 'no name given',
      email: event.target.email.value,
      CampusId: event.target.CampusId.value
    }
    event.target.name.value = ''
    event.target.email.value = ''
    this.props.addStudent(student)
  }

}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ students, campuses }) => ({ students, campuses });

const mapDispatch = ({ addStudent, addCampus });

export default connect(mapState, mapDispatch)(AllStudents);
