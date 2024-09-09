import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

const CityTable = () => {
  const [cities, setCities] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchCities();
  }, [page]);

  const fetchCities = async () => {
    const response = await axios.get(
      `https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&rows=20&start=${page * 20}`
    );
    if (response.data.records.length === 0) setHasMore(false);
    setCities([...cities, ...response.data.records]);
  };

  return (
    <InfiniteScroll
      dataLength={cities.length}
      next={() => setPage(page + 1)}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <table>
        <thead>
          <tr>
            <th>City Name</th>
            <th>Country</th>
            <th>Timezone</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city.recordid}>
              <td>
                <Link to={`/weather/${city.fields.name}`}>
                  {city.fields.name}
                </Link>
              </td>
              <td>{city.fields.cou_name_en}</td>
              <td>{city.fields.timezone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </InfiniteScroll>
  );
};

export default CityTable;
