import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchData = (fetchURL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    axios
      .get(fetchURL)
      .then((res) => {
        setData(res.data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setData(null);
        setIsPending(false);
      });
  }, [fetchURL]);

  return {
    data,
    error,
    isPending,
  };
};

export default useFetchData;
