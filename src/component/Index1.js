import React from 'react'
//import {increaseValue,decreaseValue} from './redux/action-creator';
import { useSelector, useDispatch } from "react-redux";
import { increaseValue } from '../redux/action-creater';
import { decreaseValue } from '../redux/action-creater';
function Index1() {

  const mystate = useSelector(state => state.ourState.count)
  const disPatch = useDispatch()
  console.log("mystate", mystate)

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1>Hello World</h1>
      <button style={{
        backgroundColor: "blue",
        padding: "10px 30px",
        fontSize: "10px"
      }} onClick={() => disPatch(increaseValue())}>
        increment
      </button>
      <p>{mystate}</p>

      <button style={{
        backgroundColor: "pink",
        padding: "10px 30px",
        fontSize: "10px"
      }} onClick={() =>disPatch(decreaseValue())}>
        decrement
      </button>
    </div>

  )
}

export default Index1;