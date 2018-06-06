import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { localeReducer } from 'react-localize-redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  router: routerReducer,
  locale: localeReducer,
  form: formReducer,
})
