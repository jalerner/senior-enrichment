
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudent, removeStudent } from '../reducers/students';
import { campuses } from '../reducers/campuses';

/* -----------------    COMPONENT     ------------------ */

class StudentItem extends Component {

  render() {

    return (
      <tr>
        <td>
          <Link to={`/students/${this.props.student.id}`}>
            <div>{this.props.student.name}</div>
          </Link>
        </td>
        <td>{this.props.student.email}</td>
        <td>
          <Link to={`/campuses/${this.props.thisCampus.id}`}>
            {this.props.thisCampus.name}
          </Link>
        </td>
      </tr>

    )
  }

}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state, componentProps) => (
  {
    student: componentProps.student,
    campuses: state.campuses,
    thisCampus: state.campuses.find(campus => (
      campus.id === Number(componentProps.student.CampusId)
    ))
  }
);

const mapDispatch = ({ fetchStudent, removeStudent});

export default connect(mapState, mapDispatch)(StudentItem);
