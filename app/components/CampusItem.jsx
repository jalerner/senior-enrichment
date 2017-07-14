
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCampus } from '../reducers/campuses';

/* -----------------    COMPONENT     ------------------ */

class CampusItem extends Component {

  render() {
    const campus = this.props.campus
    return (
      <div className="col-md-12">
        <Link to={`/campuses/${campus.id}`}>
          <h2>{campus.name}</h2>
        </Link>
        <div>
          <img src={campus.imageUrl} width="75%" height="75%" />
        </div>
      </div>
    )
  }

}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campuses }) => ({ campuses });

const mapDispatch = ({ removeCampus });

export default connect(mapState, mapDispatch)(CampusItem);
