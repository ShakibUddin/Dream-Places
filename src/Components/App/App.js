import { useEffect, useState } from 'react';
import PlacesCard from '../PlacesCard/PlacesCard';
import './App.css';

function App() {
  let [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("./places.json")
      .then(res => res.json())
      .then(data => setPlaces(data));
  }, []);
  return (
    <div className="App">
      {
        places.map(place => <PlacesCard key={place.id} place={place}></PlacesCard>)
      }
    </div>
  );
}

export default App;
