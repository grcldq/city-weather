import cityList from '../assets/city.list.json';

export const getIdByCity = (searchTerm = '') => {
  if (!searchTerm) return [];

  return cityList.filter(city => {
    const formattedName = `${city.name.toLowerCase()}, ${city.country.toLowerCase()}`;

    return formattedName.includes(searchTerm.toLowerCase());
  });
};