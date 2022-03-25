import { useState } from "react";

export default useApi = (apiFn) => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async (...args) => {
    setIsLoading(true);
    const response = await apiFn(...args);
    setIsLoading(false);

    if (!response.ok) return setHasError(true);

    setHasError(false);
    setData(response.data);
  };

  return { data, hasError, isLoading, loadData };
};
/**
 * 만약 한 컴포넌트에서 useApi 를 여러번 사용해야 한다면,
 * destructuring 을 사용하지 말고 Object 에 담아서 사용하면 된다.
 *
 * 1. const { data: listings, hasError, isLoading, loadData: fetchListings } = useApi(getData);
 * 2. const getListingsApi = useApi(getData);
 *    const getUserApi = useApi(getUser); --> getUserApi.isLoading
 *
 * 2 번 처럼 사용하면 하나의 훅을 여러 번 사용할 수 있다.
 */
