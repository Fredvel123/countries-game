import React, { Fragment } from 'react'
// this piece of code is the Context.
import FirstCard from './components/FirstCard';
// IMPOTING CARDS FROM HERE
import HomeCard from './components/HomeCard';
import LastCard from './components/LastCard';
import SecondCard from './components/SecondCard';
import ThirdCArd from './components/ThirdCard';
import DataProvider from './context/DataContext';
function Home() {
  return (
    <Fragment>
      <DataProvider>
        <HomeCard />
        <FirstCard />
        <SecondCard />
        <ThirdCArd />
        <LastCard />
      </DataProvider>
    </Fragment>
  );
}

export default Home
