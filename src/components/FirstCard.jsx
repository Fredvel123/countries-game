import React, { Fragment, useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
// styles css
import '../styles/card.css'

function Page1() {
  const { countries, page, setPage, count, setCount, setOpen} = useContext(DataContext);
  const [correct, setCorrect] = useState(true);
  const nextPage = () => {
    setPage(2)
    console.log(count);
  }
  return (
    <Fragment>
      {page === 1 ? (
        <div className="card">
          <div className="header">
            <p>{countries[0].capital} is capital of:</p>
          </div>

          <div className="body">
            {page === 1 && countries
              ? countries.map((item, index) => (
                  <div
                    className={
                      count !== 0 && correct && item.capital === countries[0].capital 
                        ? "options-true"
                        : "options"
                    }
                    
                    key={index}
                    onClick={() =>
                      item.capital === countries[0].capital && correct && count === 0
                        ? setCount(count + 1) & setOpen(true)
                        : setCorrect(false) & setOpen(true)
                    }
                  >
                    <p
                      className={
                        !correct && item.capital !== countries[0].capital
                          ? "rojo"
                          : ""
                      }
                    // className={item.capital !== countries[0].capital && !correct? "rojo": "verde"}
                    >
                      {item.name}
                    </p>
                  </div>
                ))
              : null}
          </div>

          <div className="footer">
            {count !== 0 || !correct ? (
              <p onClick={nextPage}>next page </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default Page1;
