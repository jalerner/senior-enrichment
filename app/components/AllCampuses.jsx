
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampusItem from './CampusItem';
import { addCampus } from '../reducers/campuses';

/* -----------------    COMPONENT     ------------------ */

class AllCampuses extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>CAMPUSES</h1>
        </div>
        <div className="row">
        {
          this.props.campuses.map(campus => (<CampusItem campus={campus} key={campus.id} />))
        }
        </div>
        <div className="bottom">
          <h1>ADD CAMPUS</h1>
          {this.renderNewCampus()}
        </div>
      </div>
    );
  }

  renderNewCampus() {
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
    const campus = {
      name: event.target.name.value,
      imageUrl: event.target.imageUrl.value
    }
    event.target.name.value = ''
    event.target.imageUrl.value = ''
    this.props.addCampus(campus)
  }

}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campuses }) => ({ campuses });

const mapDispatch = ({ addCampus });

export default connect(mapState, mapDispatch)(AllCampuses);
