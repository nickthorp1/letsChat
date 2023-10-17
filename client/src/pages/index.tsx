import React, { useEffect, useState } from "react";
import axios from 'axios';
import { log } from "console";

function index() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Axios automatically returns the data property of the response object,
    // and will throw an error if the request fails.
    axios.get('http://localhost:3001/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error.toString());
        console.error('There was an error fetching the data:', error);
      });
  }, []);  // Empty dependency array means this useEffect runs once, similar to componentDidMount

  console.log(data)
  return (
    <div>
      <h1>hel</h1>
      {error ? (
        <div>Error: {error}</div>
      ) : data ? (
        <div>{JSON.stringify(data)}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
      }

export default index;