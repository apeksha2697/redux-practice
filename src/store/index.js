import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState ,
  reducers: {
    increament(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const initialAuthState  = {
  isAuthenticated: false
};
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    }
  }
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer},
});
// const counterReducer = (state = initialState, action) => {
//   if(action.type === 'increament'){
//     return{
//       counter: state.counter+1, 
//       showCounter: state.showCounter
//     };
//   }
//   if(action.type === 'increase'){
//     return{
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//   }
//   if(action.type ===  'decrement'){
//     return{
//       counter: state.counter-1, 
//       showCounter: state.showCounter 
//     };
//   }
//   if(action.type === 'toggle'){
//     return{
//       showCounter: !state.showCounter,
//       counter: state.counter 
//     };
//   }
//   return state; 
// };
// const store = createStore(counterReducer);

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;

export default store;