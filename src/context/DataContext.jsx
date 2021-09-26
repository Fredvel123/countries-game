import React, { createContext, useState } from 'react';
import useFetch from './useFetch';
export const DataContext = createContext(); 

function DataProvider({ children }) {
  const { info } = useFetch('https://restcountries.com/v2/all');
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  
  
  // code to get random items from the api.
  let items = info;
  let randomCountries = [];
  for (let i = 0; i < 4; i++) {
    let newItems = items[Math.floor(Math.random()*items.length)];
    randomCountries.push(newItems);    
  }
  return (
    <DataContext.Provider
      value={{
        countries,
        setCountries,
        randomCountries,
        page,
        setPage,
        count, 
        setCount,
        open, setOpen
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default DataProvider;