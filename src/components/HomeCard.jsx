import React, { Fragment, useContext } from 'react';
import { DataContext } from '../context/DataContext';
// styles css
import '../styles/home.css'


function HomeCard() {
  const {setCountries, randomCountries, page, setPage} = useContext(DataContext);
  // state to go to the next page
  const start = () => {
    setCountries(randomCountries);
    setPage(1)
  }
  return (
    <Fragment>
      {page === 0 ? (
        <div className="home-card">
          <div>
            {page === 0 ? <h1>Do you want to play: "Country Quiz"? </h1> : null}
          </div>
          <div className="button">
            {page === 0 ? <p onClick={start}>Start</p> : null}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default HomeCard;
