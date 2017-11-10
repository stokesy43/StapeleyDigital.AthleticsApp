import { takeEvery, call, put } from 'redux-saga/effects';

import { GET_INITIAL_ATHLETES, GET_ATHLETE_RESULT, GET_ATHLETE_ERROR } from '../actions/athletes';
import {
  REGISTER_DEVICE,
  REGISTER_DEVICE_ERROR,
  REGISTER_DEVICE_RESULT,
  GET_DEVICE,
  GET_DEVICE_ERROR,
  GET_DEVICE_RESULT,
} from '../actions/device';

export const getAthletes = () =>
  fetch('http://stapeleydigitalathleticsdataapi.azurewebsites.net/api/athletes');

export const postDevice = (deviceId, deviceName) =>
  fetch('http://stapeleydigitalathleticsdataapi.azurewebsites.net/api/devices', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      deviceId,
      deviceName,
    }),
  });

export const getDevice = deviceId =>
  fetch(
    `http://stapeleydigitalathleticsdataapi.azurewebsites.net/api/devices?uniqueId=${deviceId}`,
  );

const fetchAthletes = function* fetchAthletes() {
  try {
    const response = yield call(getAthletes);
    const result = yield response.json();
    if (result.error) {
      yield put({ type: 'GET_ATHLETE_ERROR', error: result.error });
    } else {
      yield put({ type: 'GET_ATHLETE_RESULT', result });
    }
  } catch (e) {
    yield put({ type: GET_ATHLETE_ERROR, error: e.message });
  }
};

const registerDevice = function* registerDevice(action) {
  try {
    const response = yield call(postDevice, action.device.deviceId, action.device.deviceName);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: 'REGISTER_DEVICE_ERROR', error: result.error });
    } else {
      yield put({ type: 'REGISTER_DEVICE_RESULT', result });
    }
  } catch (e) {
    yield put({ type: 'REGISTER_DEVICE_ERROR', error: e.message });
  }
};

const fetchDevice = function* fetchDevice(action) {
  try {
    const response = yield call(getDevice, action.deviceId);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: 'GET_DEVICE_ERROR', error: result.error });
    } else {
      yield put({ type: 'GET_DEVICE_RESULT', result });
    }
  } catch (e) {
    yield put({ type: 'GET_DEVICE_ERROR', error: e.message });
  }
};

// const fetchPerformanceData = function* fetchPerformanceData(action) {
//   console.log('TODO: load performance data', action);
//   yield;
// };

const rootSaga = function* rootSaga() {
  yield takeEvery(GET_INITIAL_ATHLETES, fetchAthletes);
  yield takeEvery(REGISTER_DEVICE, registerDevice);
  yield takeEvery(GET_DEVICE, fetchDevice);
};

export default rootSaga;
