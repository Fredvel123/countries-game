import React, { Fragment, useContext, useState } from 'react'
import { DataContext } from '../context/DataContext';
import '../styles/card.css'


function SecondCard() {
  const { countries, page, setPage, count, setCount} = useContext(DataContext);
  const [correct, setCorrect] = useState(true);
  const nextPage = () => {
    setPage(2)
    console.log(count);
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
                      count !== 0 && correct && item.flags[1] === countries[2].flags[1]
                        ? "options"
                        : "options"
                    }
                    
                    key={index}
                    onClick={() =>
                      item.flags[1] === countries[2].flags[1] && correct && count===(0,1)
                        ? setCount(count + 1)
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
            {count !== 1 || !correct || count!==0 ? (
              <p onClick={nextPage}>next page </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default SecondCard;
