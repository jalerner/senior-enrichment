
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import Footer from './Footer';
import Navbar from './Navbar';
import { fetchCampuses } from '../reducers/campuses.jsx';
import { fetchStudents } from '../reducers/students.jsx';

/* -----------------    COMPONENT     ------------------ */

class Root extends Component {

  componentDidMount () {
    this.props.fetchInitialData();
  }

  render () {

    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/students" component={AllStudents} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            <Route path="/students/:studentId" component={SingleStudent} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// /* -----------------    CONTAINER     ------------------ */

// const mapProps = null;
const mapProps = ({ campuses }) => ({ campuses });

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCampuses());
    dispatch(fetchStudents());
  }
});

export default connect(mapProps, mapDispatch)(Root);
