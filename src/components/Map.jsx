import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>Position</h1>
      <p>lat:{lat} </p>
      <p>lng:{lng}</p>
      <button onClick={() => setSearchParams({ lat: 23, lng: 15 })}>
        change
      </button>
    </div>
  );
}

export default Map;
