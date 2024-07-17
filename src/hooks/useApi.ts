import {useState} from 'react';

const useApi = (apiFunc: any) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (...args: any[]) => {
    setError(false);
    setLoading(true);
    try {
      const response = await apiFunc(...args);
      setLoading(false);
      setError(response.status !== 200);
      if (response.status === 200) {
        console.log(response.data);
        setData(response.data);
      }
      return response;
    } catch (err) {
      setLoading(false);
      setError(true);
      throw err;
    }
  };

  return {request, data, loading, error};
};

export default useApi;
