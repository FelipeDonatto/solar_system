import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCard from './components/PlanetCard';
import Planets from './data/planets';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <div className="planet-container">
          { Planets.map((planet) => (
            <PlanetCard
              planetName={ planet.name }
              planetImage={ planet.image }
              key={ planet.name }
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
