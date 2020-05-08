import React, {useEffect, useState} from 'react'
const useFetch = (url, options) => {
    const [data,setData] = useState(null)
const [error,setError] = useState(null)
const [loading,setLoading] = useState(true)
    React.useEffect(() => {
        setLoading(true)
      const fetchData = async () => {
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setData(json);
        } catch (error) {
          setError(error);
        }
        setLoading(false)
      };
      fetchData();
      
          }, []);
    return { data, error, loading };
  };

  export default useFetch;