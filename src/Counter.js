import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    const handleIncrement = ()=> {
        setCount(count+1)
    }
    const handleDecrement = ()=> {
        setCount(count-1)
    }
    const resetHandler = ()=> {
        setCount(0)
    }

  return (
    <div className='container'>
      <h1 className='counter'>Counter App</h1>
      
      <div className='innerDiv'>
      <h3>Counter : {count}</h3>
      <button className='btn' onClick={handleIncrement} disabled={count===5? true : false}> + </button>
      <button className='btn' onClick={handleDecrement} disabled={count===-5? true : false}> - </button>
      <button className='btn' onClick={resetHandler}> 0 </button>
      </div>
      
      
    </div>
  )
}
