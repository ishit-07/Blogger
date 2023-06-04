import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);


 
  useEffect(() => {

    const abortControl = new AbortController();

    setTimeout(() => {
     
      fetch(url, { signal: abortControl.signal })
        .then((response) => {
           
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


    
    return () => {
      abortControl.abort();
    }

   
  }, [url]);
  
  return { data, loading, errors };
};

export default useFetch;
