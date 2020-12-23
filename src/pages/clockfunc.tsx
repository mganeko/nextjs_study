//
// clock with Function component and Hooks
//  refer: https://productoptimist.com/start-using-react-hooks-a-clock-timer-example/
//

import { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());

  //Replaces componentDidMount and componentWillUnmount
  useEffect(() => {
    const timerID = setInterval( () => tick(), 1000 );

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </div>
  );
}

export default Clock;