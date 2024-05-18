import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { increment } from './rtk/Slic'

function Had() {
    const count = useSelector((state) => state.counter.value);
    console.log(count);
    const dis=useDispatch()
  return (
    <div>
<button onClick={()=>dis(increment("payload"))}>go useDispatch</button>
<Link to={'/navv'}>go to navv</Link>
        <h1>this is sahil indai </h1>
    </div>
  )
}

export default Had