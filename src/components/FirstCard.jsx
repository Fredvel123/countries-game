import React, { Fragment, useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';

function Page1() {
  const { countries, count, setCount, next, setNext } = useContext(DataContext);
  const [open, setOpen] = useState(true);
  const nextPage = () => {
    setOpen(false);
    setNext(!next)
  }
  return (
    <Fragment>
      <div>
        {
          countries && open? 
          countries.map(item => <h4>{item.name}</h4> ) : null
        }
      </div>
      <div>
        {
          open && next ? <button onClick={nextPage} >next page 1</button> : null
        }
      </div>
    </Fragment>
  );
}

export default Page1;
