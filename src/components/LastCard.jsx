import React, { Fragment, useContext } from 'react'
import { DataContext } from '../context/DataContext';
import icon from './icon.png';
import '../styles/lastCard.css'

function LastCard() {
  const {page, count, setPage, setCountries, randomCountries} = useContext(DataContext);
  const startAgain = () => {
    setCountries(randomCountries);
    setPage(0)
  }
    return (
      <Fragment>
        {page === 4 ? (
          <div className="last-card">
            <img src={icon} alt="" width="100px" />
            <div className="card-body">
              <h3>Results</h3>
              <p>You got {count} correct answers</p>
            </div>
            <button onClick={startAgain}>Try Again</button>
          </div>
        ) : null}
      </Fragment>
    );
}

export default LastCard;
