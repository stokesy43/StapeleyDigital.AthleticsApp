import {
  CHANGE_ATHLETE,
  GET_INITIAL_ATHLETES,
  GET_ATHLETE_ERROR,
  GET_ATHLETE_RESULT,
} from '../actions/athletes';

const initialState = {
  athletes: {},
  isFetching: false,
  error: null,
};

// const setPerformanceData = (state, action) => {
//   let performanceData = {
//     isFetching: true,
//     performances: {},
//   };

//   if (state.performanceData[action.athlete]) {
//     performanceData = state.performanceData[action.athlete];
//   }

//   return {
//     ...state.performanceData,
//     [action.athlete]: performanceData,
//   };
// };

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ATHLETE:
      return {
        ...state,
      };
    case GET_INITIAL_ATHLETES:
      return {
        ...state,
        isFetching: true,
      };
    case GET_ATHLETE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case GET_ATHLETE_RESULT:
      return {
        ...state,
        isFetching: false,
        athletes: action.result,
      };
    default:
      return state;
  }
};
