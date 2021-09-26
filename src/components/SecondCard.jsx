import React, { Fragment, useContext, useState } from 'react'
import { DataContext } from '../context/DataContext';

function SecondCard() {
  const { countries, count, setCount, next, setNext } = useContext(DataContext);
  const [open, setOpen] = useState(true);
  return (
    <Fragment>
      <div>
        {
          countries && open && !next ? countries.map(item => <h4>{item.capital}</h4>) : null
        }
      </div>
      <div>
        {
          !next && open  ? <button>next page 2</button> : null
        }
      </div>
    </Fragment>
  );
}

export default SecondCard;
