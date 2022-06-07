import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Add, Sub } from './store/action';


function App() {
  const dispatch=useDispatch()
  const state = useSelector((state)=>state.count)
  // console.log(state);
  return (
    <div className="App">
      <h1>Count:{state}</h1>
      <div>
        <button onClick={() => dispatch(Add())}>+</button>
        <button onClick={() => dispatch(Sub())}>-</button>
      </div>
      <div
        style={{
          display: "flex",
          width: "50%",
          margin: "auto",
          marginTop: "100px",
        }}
      >
        <div>
          <input type="text"  />
        </div>
        <div>
          <div>
            <button>ADD</button>
            <button>Multiply</button>
          </div>
          <div>
            <button>Subtract</button>
            <button>devide</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
