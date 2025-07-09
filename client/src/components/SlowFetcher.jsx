import React, { useState, useEffect } from 'react';

function SlowFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/slow')
      .then(res => res.json())
      .then(json => {
        setData(json.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return <p>{data}</p>;
}

export default SlowFetcher;
