export const REGISTER_DEVICE = 'REGISTER_DEVICE';
export const REGISTER_DEVICE_ERROR = 'REGISTER_DEVICE_ERROR';
export const REGISTER_DEVICE_RESULT = 'REGISTER_DEVICE_RESULT';
export const GET_DEVICE = 'GET_DEVICE';
export const GET_DEVICE_ERROR = 'GET_DEVICE_ERROR';
export const GET_DEVICE_RESULT = 'GET_DEVICE_RESULT';

export const registerDevice = (deviceId, deviceName) => ({
  type: REGISTER_DEVICE,
  device: {
    deviceId,
    deviceName,
  },
});

export const getDevice = deviceId => ({
  type: GET_DEVICE,
  deviceId,
});
