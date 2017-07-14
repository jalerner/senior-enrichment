
import axios from 'axios';
import { REMOVE as REMOVE_STUDENT } from './students';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_CAMPUSES';
const CREATE     = 'CREATE_CAMPUS';
const UPDATE     = 'UPDATE_CAMPUS';
const REMOVE     = 'REMOVE_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

const init   = campuses => ({ type: INITIALIZE, campuses });
const create = campus   => ({ type: CREATE, campus });
const remove = id       => ({ type: REMOVE, id });
const update = campus   => ({ type: UPDATE, campus });

/* ------------       REDUCERS     ------------------ */
/*
 * returns a modified state based off of one given to it beforehand (ie campuses=[])
 * doesnt actually modify the state on its own, but it can be called with a state as
 * a parameter, which will then return the correctly modified state
 */
export default function reducer (campuses = [], action) {
  
  switch (action.type) {

    case INITIALIZE:
      return action.campuses;

    case CREATE:
      // const newCampuses = campuses.concat(action.campus);
      // return newCampuses;
      return [...campuses, action.campus];

    case REMOVE:
      return campuses.filter(campus => campus.id !== action.id);

    // case REMOVE_STUDENT:
    //   retstudentcampuses.filter(campus => campus.author_id !== action.id);

    case UPDATE:
      return campuses.map(campus => (
        action.campus.id === campus.id ? action.campus : campus
      ));

    default:
      return campuses;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
       .then(res => dispatch(init(res.data)))
       .catch(err => console.error('Fetching campuses unsuccessful', err));
};

// optimistic
export const removeCampus = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/campuses/${id}`)
       .catch(err => console.error(`Removing campus: ${id} unsuccessful`, err));
};

export const addCampus = campus => dispatch => {
  axios.post('/api/campuses', campus)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating campus: ${campus} unsuccessful`, err));
};

export const updateCampus = (id, campus) => dispatch => {
  axios.put(`/api/campuses/${id}`, campus)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Updating campus: ${campus} unsuccessful`, err));
};
