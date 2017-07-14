
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCampus, removeCampus } from '../reducers/campuses';
import { removeStudent } from '../reducers/students';

/* -----------------    COMPONENT     ------------------ */

class SingleCampus extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {

    const thisCampus = this.props.thisCampus
    const name = thisCampus ? thisCampus.name : '';
    const imageUrl = thisCampus ? thisCampus.imageUrl : '';
    // go back and make dry
    const campusStudents = this.props.students.filter(
      student => student.CampusId === this.props.thisCampus.id
    )
    console.log("campusStudent:", campusStudents)

    return (

      <div className="container">
        <div className="page-header">
          <h1>{name}</h1>
        </div>
        <img src={imageUrl} height="50%vh" width="50%vh" />
        <div>
          <h1>Campus Students:</h1>
          {this.renderCampusStudents()}
        </div>
        <div className="nearBottom">
          <h1>Edit Campus:</h1>
          {this.renderEditCampus()}
        </div>
        <div className="bottom d-inline" >
          <button
            className="btn btn-default btn-s pull-left"
            onClick={ () => {
              this.props.removeCampus(thisCampus.id)
              campusStudents.map(student => {
                this.props.removeStudent(student.id)
              })
              this.props.history.push('/campuses')
              }}>
            Remove Campus
          </button>
        </div>
      </div>
    );
  }

  renderEditCampus() {
    return (
      <form onSubmit={this.onSubmit} className="list-group-item inline">
        <ul className="list-inline">
          <li>
            <input
              name="name"
              type="text"
              className="form-like large-font"
              placeholder="Campus Name"
            />
            <input
              name="imageUrl"
              type="text"
              className="form-like large-font"
              placeholder="Campus Image Url"
            />
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
    const thisCampus = this.props.thisCampus
    const campus = {
      name: event.target.name.value !== ''
        ? event.target.name.value
        : thisCampus.name,
      imageUrl: event.target.imageUrl.value !== ''
        ? event.target.imageUrl.value
        : thisCampus.imageUrl
    }
    event.target.name.value = '';
    event.target.imageUrl.value = '';
    this.props.updateCampus(thisCampus.id, campus)
  }

  renderCampusStudents() {
    const campusStudents = this.props.students.filter(
      student => student.CampusId === this.props.thisCampus.id
    )
    return (
      <div>
        { campusStudents.map(student => (
          <div key={student.id}>
            <NavLink to={`/students/${student.id}`}>
              <h4>{student.name}</h4>
            </NavLink>
          </div>
        ))}
      </div>
    )
  }

}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state, componentProps) => (
  {
    thisCampus: state.campuses.find(campus => (
      campus.id === Number(componentProps.match.params.campusId)
    )),
    students: state.students
  }
);

const mapDispatch = ({ updateCampus, removeCampus, removeStudent });

export default connect(mapState, mapDispatch)(SingleCampus);
