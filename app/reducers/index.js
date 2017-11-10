import { combineReducers } from 'redux';

import theme from './theme';
import athletes from './athletes';
import nav from './nav';
import device from './device';

export default combineReducers({
  athletes,
  device,
  theme,
  nav,
});
