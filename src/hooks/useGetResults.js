import { useState, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default (domain) => {
  const [results, setResults] = useState({
    data: [],
    loading: true,
  });
  const [error, setError] = useState(null);

  async function getResults() {
    await axios
      .get(domain)
      .then((response) => {
        setResults({
          data: response.data,
          meta: response.meta || null,
          loading: false,
        });
      })
      .catch((err) => {
        setError(err);
        //console.log(err.response);
        //console.log('getResults -> errorResponse', err);
      });
  }

  useEffect(() => {
    getResults();
  }, []);

  return results;
};
