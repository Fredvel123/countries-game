import React, { Fragment, useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
// styles css
import '../styles/card.css'

function ThirdCArd() {
  const { countries, page, setPage, count, setCount} = useContext(DataContext);
  const [correct, setCorrect] = useState(true);
  const [open, setOpen] = useState(false);
  const nextPage = () => {
    setPage(4)
    console.log(count);
  }
  return (
    <Fragment>
      {page === 3 ? (
        <div className="card">
          <div className="header">
            <p>Wich is the capital of: {countries[3].name}:</p>
          </div>

          <div className="body">
            {page === 3 && countries
              ? countries.map((item, index) => (
                  <div
                    className={
                        open && correct && item.capital === countries[3].capital 
                        ? "options-true"
                        : "options"
                    }
                    
                    key={index}
                    onClick={() =>
                      item.capital === countries[3].capital && correct && count!==(4)
                        ? setCount(count + 1) & setOpen(true)
                        : setCorrect(false)
                    }
                  >
                    <p
                      className={
                        !correct && item.capital !== countries[3].capital
                          ? "rojo"
                          : ""
                      }
                    // className={item.capital !== countries[0].capital && !correct? "rojo": "verde"}
                    >
                      {item.capital}
                    </p>
                  </div>
                ))
              : null}
          </div>

          <div className="footer">
            {countries ? (
              <p onClick={nextPage}>next page 1</p>
            ) : null}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default ThirdCArd;
