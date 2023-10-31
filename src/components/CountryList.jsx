import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on map" />
    );
  /*
  const temp = [];
  const countries = cities
    .map((city) => {
      if (temp.includes(city.country)) return null;
      temp.push(city.country);
      return { emoji: city.emoji, id: city.id, country: city.country };
    })
    .filter((item) => item !== null);
    */
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [
        ...arr,
        { emoji: city.emoji, id: city.id, country: city.country },
      ];
    } else {
      return arr;
    }
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
