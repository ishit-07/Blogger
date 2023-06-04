// we have to write use for using custom hooks
// and we can call anytime we want
// we can return whatever we want like jsx, Array, Objects and so on.
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);


  // when we simulataneously changes the links in the navbar
  // It throws an error so that's why we are using cleanup function
  useEffect(() => {

    const abortControl = new AbortController();

    setTimeout(() => {
      // signal is used for It updates the components when the signal changes and updates the UI without re-rendering 
      // the whole component
      fetch(url, { signal: abortControl.signal })
        .then((response) => {
          //   console.log(response);
          // The ok read-only property of the Response interface contains a Boolean stating whether the response was successful 
          if (!response.ok) {
            throw Error("could not fetch the data...");
          }
          return response.json();
        })
        .then((data) => {
          setdata(data);
          setLoading(false);
          setErrors(null);
        })
        .catch((err) => {
         if(err.name === 'AbortError'){
          console.log('Not Fetched');
         }else{
          setLoading(false);
          setErrors(err.message);
         }
        });
    }, 1000);


    // it aborts whatever fetch it is associated with it will abort that task
    return () => {
      abortControl.abort();
    }

    // this will only render when any change in url
  }, [url]);

  // we are returning an object
  // using objects because order of these property doesn't matter
  // like if we don't given loading it will go to another one it can't stop
  return { data, loading, errors };
};

export default useFetch;
