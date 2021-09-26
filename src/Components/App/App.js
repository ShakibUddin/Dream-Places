import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import PlacesCard from '../PlacesCard/PlacesCard';
import './App.css';

function App() {
  let [places, setPlaces] = useState([]);
  let [favorites, setFavorites] = useState([]);
  let [totalSelected, setTotalSelected] = useState(0);
  let [totalCost, setTotalCost] = useState(0);

  //fetching data
  useEffect(() => {
    fetch("./places.json")
      .then(res => res.json())
      .then(data => setPlaces(data));
  }, []);

  //event handler when Add To Favorite is clicked
  function favoriteHandler(place) {
    console.log(place.name);
    setTotalSelected(totalSelected + 1);
    setTotalCost(totalCost + Number(place.travelCost));
    let newFavorites = [...favorites, place];
    setFavorites(newFavorites);
  }
  return (
    <div className="App">
      <Banner className="banner"></Banner>
      <main>
        <section className="places">
          {
            places.map(place => <PlacesCard key={place.id} place={place} clickHandler={favoriteHandler}></PlacesCard>)
          }
        </section>
        <section className="favorites">
          <h2>Total Selected: {totalSelected}</h2>
          <h2>Total Cost: ${totalCost}</h2>
          {
            favorites.map(favorite => <FavoriteCard key={favorite.id} place={favorite}></FavoriteCard>)
          }
        </section>
      </main>
    </div>
  );
}

export default App;
