import React, { Fragment, useContext } from 'react';
import { DataContext } from '../context/DataContext';


function HomeCard() {
  const {countries, setCountries, randomCountries} = useContext(DataContext);
  console.log(countries);
  return (
    <Fragment>
      <h1>this is the first card.</h1>
      <button onClick={() => setCountries(randomCountries) }>Click me</button>
    </Fragment>
  );
}

export default HomeCard;
