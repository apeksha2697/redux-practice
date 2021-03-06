import { Component } from 'react';
import { useSelector, useDispatch, connect  } from 'react-redux';
import classes from './Counter.module.css';
import { counterAction } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };
  const show = useSelector(state => state.counter.showCounter);
  const counter = useSelector(state => state.counter.counter);
  
  const increamentHandler = () => {
    dispatch(counterAction.increament());
  };
  const increaseHandler = () => {
    dispatch(counterAction.increase(5));
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
// class Counter extends Component{
//   increamentHandler(){
//     this.props.increament();
//   }
//   decrementHandler(){
//     this.props.decrement();
//   }
//   toggleCounterHandler(){}
//   render() {
//     return(
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.increamentHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this )}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return{
//     counter: state.counter
//   };
// }
// const mapDIspatchToProp = dispatch => {
//   return{
//     increament: () => dispatch({type: 'increament'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// };
// export default connect(mapStateToProps, mapDIspatchToProp)(Counter);
