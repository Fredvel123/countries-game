import React, { Fragment, useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Page1() {
  const { countries } = useContext(DataContext);
  return (
    <Fragment>
      <div>
        {
          countries ? 
          countries.map(item => <h4>{item.name}</h4> ) : null
        }
      </div>
    </Fragment>
  );
}

export default Page1;
