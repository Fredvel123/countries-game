import React, { Fragment, useContext } from 'react'
import { DataContext } from '../context/DataContext';
import icon from './icon.png';
import '../styles/lastCard.css'

function LastCard() {
  const {page, count} = useContext(DataContext)
    return (
      <Fragment>
        {page === 4 ? (
          <div className="last-card">
            <img src={icon} alt="" width="100px" />
            <div className="card-body">
              <p>You got {count} correct answers</p>
            </div>
          </div>
        ) : null}
      </Fragment>
    );
}

export default LastCard;
