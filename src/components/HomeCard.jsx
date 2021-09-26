import React, { Fragment, useContext } from 'react';
import { DataContext } from '../context/DataContext';


function HomeCard() {
  const {setCountries, randomCountries, page, setPage} = useContext(DataContext);
  // state to go to the next page
  const start = () => {
    setCountries(randomCountries);
    setPage(1)
  }
  return (
    <Fragment>
      <h1>this is the first card.</h1>
      <div>
        {
          page === 0? 
          <button onClick={start}>Click me</button>
          : null
        }
      </div>
    </Fragment>
  );
}

export default HomeCard;
