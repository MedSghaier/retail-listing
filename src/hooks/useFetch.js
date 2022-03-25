import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setData(null);
      const res = await axios.get(url);
      setData(res.data);
    };

    fetch();
  }, [url]);
  return { data };
}

export default useFetch;
