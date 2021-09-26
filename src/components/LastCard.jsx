import React, { Fragment, useContext } from 'react'
import { DataContext } from '../context/DataContext';
import icon from './icon.png';
import '../styles/lastCard.css'

function LastCard() {
  const { page, count } = useContext(DataContext);
  const startAgain = () => {
    window.location.reload()
  };
    return (
      <Fragment>
        {page === 4 ? (
          <div className="last-card">
            <img src={icon} alt="" width="100px" />
            <div className="card-body">
              <h3>Results</h3>
              <p>You got <span>{count}</span>  correct answers</p>
            <h2 onClick={startAgain}>Try Again</h2>
            </div>
          </div>
        ) : null}
      </Fragment>
    );
}

export default LastCard;
