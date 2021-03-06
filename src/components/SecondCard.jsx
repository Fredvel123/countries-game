import React, { Fragment, useContext, useState } from 'react'
import { DataContext } from '../context/DataContext';
import '../styles/card.css'


function SecondCard() {
  const { countries, page, setPage, count, setCount, open, setOpen } = useContext(DataContext);
  const [correct, setCorrect] = useState(true);
  const nextPage = () => {
    setPage(3)
    console.log(count);
    console.log(countries[0]);
  }
//   console.log(countries ? countries[1].flags[1] : "nda");
  return (
      <Fragment>
      {page === 2 ? (
        <div className="card">
          <div className="header">
              <img src={countries[2].flags[1]} alt="" width="75px"/>
            <p> is flag of:</p>
          </div>

          <div className="body">
            {page === 2 && countries
              ? countries.map((item, index) => (
                  <div
                    className={
                        item.flags[1] === countries[2].flags[1] && !open
                        ? "options-true"
                        : "options"
                    }
                    
                    key={index}
                    onClick={() =>
                      item.flags[1] === countries[2].flags[1] && correct && count!==(3)
                        ? setCount(count + 1) & setOpen(false)
                        : setCorrect(false)
                    }
                  >
                    <p
                      className={
                        !correct && item.flags[1] !== countries[2].flags[1] 
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
            {countries  ? (
              <p onClick={nextPage}>next page </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default SecondCard;
