import React, {useState} from 'react';

export function App(props) {
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Parent/>
    </div>
  );
}

// Create a react counter application with two components. 
// The parent component has a counter variable that increments on a button click from the child component.

export function Parent() {
  const [counter, setCounter] = useState(0)

  return <div>
  <div className={'parent'}>{counter}</div>
    <Child updateCount={setCounter}/>
  </div>
}

export function Child ({updateCount}) {
  return <button className={'button'} onClick={()=> updateCount(prev => prev + 1)}>Increment + </button>
}
