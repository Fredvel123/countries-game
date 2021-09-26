import {useState, useEffect} from 'react';

function useFetch(url) {
  const [info, setInfo] = useState([]);
  // get the api.
  useEffect(() => {
    const getApi = async () => {
      const urlInfo = await fetch(url);
      const resJson = await urlInfo.json();
      setInfo(resJson);
    }    
    getApi();
}, [url])
// console.log(info ? info : null);
  return {info};
}

export default useFetch
