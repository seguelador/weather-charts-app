import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Never do this, always use setState
      // return state.push([ action.payload.data ]);

      // return state.concat([action.payload.data]); OK ES5
      if (action.payload.data) {
        return [ action.payload.data, ...state ]; // OK ES6
      }
  }
  return state;
}