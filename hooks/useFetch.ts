"use client";

import { useEffect, useState } from "react";

function useFetch<T>(url: string) {

  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {

    async function fetchData() {

      try {

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result: T[] = await response.json();

        setData(result);

      } catch {

        setError("Something went wrong.");

      } finally {

        setLoading(false);

      }

    }

    fetchData();

  }, [url]);

  return {
    data,
    loading,
    error
  };

}

export default useFetch;