import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
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
      <Banner className="banner"></Banner>
      <main>
        <section className="places">
          {
            places.map(place => <PlacesCard key={place.id} place={place}></PlacesCard>)
          }
        </section>
        <section className="favorites"></section>
      </main>
    </div>
  );
}

export default App;
