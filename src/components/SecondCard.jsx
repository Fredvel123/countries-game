import React, { Fragment, useContext } from 'react'
import { DataContext } from '../context/DataContext';

function SecondCard() {
  const { countries, page, setPage } = useContext(DataContext);
  return (
    <Fragment>
      <div>
        {
          page === 2 && countries ? countries.map(item => <h4>{item.capital}</h4>) : null
        }
      </div>
      <div>
        {
          page === 2  ? <button>next page 2</button> : null
        }
      </div>
    </Fragment>
  );
}

export default SecondCard;
