import React, { Fragment } from 'react'
// this piece of code is the Context.
import FirstCard from './components/FirstCard';
// IMPOTING CARDS FROM HERE
import HomeCard from './components/HomeCard';
import DataProvider from './context/DataContext';
function Home() {
  return (
    <Fragment>
      <DataProvider>
        <HomeCard />
        <FirstCard />
      </DataProvider>
    </Fragment>
  );
}

export default Home
