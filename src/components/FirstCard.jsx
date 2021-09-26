import React, { Fragment, useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Page1() {
  const { countries, page, setPage} = useContext(DataContext);
  const nextPage = () => {
    setPage(2)
  }
  return (
    <Fragment>
      <div>
        {
          page === 1 && countries? 
          countries.map(item => <h4>{item.name}</h4> ) : null
        }
      </div>
      <div>
        {
          page === 1 ? <button onClick={nextPage} >next page 1</button> : null
        }
      </div>
    </Fragment>
  );
}

export default Page1;
