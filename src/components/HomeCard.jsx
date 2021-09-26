import React, { Fragment, useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';


function HomeCard() {
  const {setCountries, randomCountries, countries, count, setCount, next, setNext} = useContext(DataContext);
  const [open, setopen] = useState(true);
  // state to go to the next page
  const start = () => {
    setCountries(randomCountries);
    setNext(true)
    console.log(next);
    setopen(false)
  }
  return (
    <Fragment>
      <h1>this is the first card.</h1>
      <div>
        {
           open? 
          <button onClick={start}>Click me</button>
          : null
        }
      </div>
    </Fragment>
  );
}

export default HomeCard;
