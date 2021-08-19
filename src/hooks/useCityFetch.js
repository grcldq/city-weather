import { useCallback, useState, useEffect } from 'react';

// custom hook
import { usePrevious } from '../hooks/usePrevious';
import { getWeatherImage } from '../helpers/helpers';

const URL = '/.netlify/functions/';

export const useCityFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const prevSearchTerm = usePrevious(searchTerm);

  const fetchCity = useCallback(
    async ({ lat, lon, name, cityState, country }) => {
      if (!lat || !lon) return;

      try {
        setError(false);
        setLoading(true);
        setSearchTerm('');

        const response = await fetch(`${URL}getCityData?lon=${lon}&lat=${lat}`);
        const {
          data: {
            current: {
              dt,
              temp,
              feels_like: feelsLike,
              sunrise,
              sunset,
              weather,
            },
            daily,
            timezone,
          },
        } = await response.json();
        const imgUrl = getWeatherImage(weather[0].icon);
        let current = {};
        const forecast = daily.map((item, index) => {
          if (index === 0) {
            const {
              temp: { day, min, max, night, eve, morn },
              rain,
            } = item;
            current = {
              day,
              min,
              max,
              night,
              eve,
              morn,
              rain,
            };
          }

          const { dt, feels_like: feelsLike, temp, weather, rain } = item;
          const imgUrl = getWeatherImage(weather[0].icon);

          return { dt, feelsLike, temp, rain, imgUrl };
        });

        const updatedData = {
          ...current,
          dt,
          temp,
          feelsLike,
          sunrise,
          sunset,
          forecast: forecast.slice(1),
          timezone,
          city: name,
          cityState,
          country,
          imgUrl,
        };

        setState(updatedData);
      } catch (error) {
        setError(true);
      }

      setLoading(false);
    },
    []
  );

  const fetchCityList = async ({ searchTerm, lat, lon }) => {
    try {
      setError(false);

      const urlParams = searchTerm
        ? `q=${searchTerm}`
        : `lat=${lat}&lon=${lon}`;
      const response = await fetch(`${URL}getCityList?${urlParams}`);
      const { data } = await response.json();
      const status = await response.status;
      const list = data.length === 0 || status !== 200 ? [] : data;

      setSearchList(list);
    } catch (error) {
      setError(error);
    }
  };

  // selectedCity changes
  useEffect(() => {
    setState({});
    fetchCity(selectedCity);
  }, [selectedCity, fetchCity]);

  // searchTerm changes
  useEffect(() => {
    if (prevSearchTerm === searchTerm) return;
    if (!searchTerm) return setSearchList([]);

    fetchCityList({ searchTerm });
  }, [searchTerm, prevSearchTerm]);

  // initial load
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude: lat, longitude: lon } = position.coords;

      if (lat && lon) fetchCityList({ lat, lon });
    });
  }, []);

  return {
    error,
    loading,
    searchList,
    searchTerm,
    selectedCity,
    setSearchTerm,
    setSelectedCity,
    state,
  };
};
