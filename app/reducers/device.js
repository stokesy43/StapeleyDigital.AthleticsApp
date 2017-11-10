import {
  REGISTER_DEVICE,
  REGISTER_DEVICE_ERROR,
  REGISTER_DEVICE_RESULT,
  GET_DEVICE,
  GET_DEVICE_ERROR,
  GET_DEVICE_RESULT,
} from '../actions/device';

const initialState = {
  deviceId: 0,
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_DEVICE:
      return {
        ...state,
        isFetching: true,
      };
    case REGISTER_DEVICE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case REGISTER_DEVICE_RESULT:
      return {
        ...state,
        isFetching: false,
      };
    case GET_DEVICE:
      return {
        ...state,
        isFetching: true,
      };
    case GET_DEVICE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case GET_DEVICE_RESULT:
      return {
        ...state,
        isFetching: false,
        deviceId: action.result.id,
      };
    default:
      return state;
  }
};
