import React from 'react';
import Title from './Title';
import Missions from '../data/missions';
import MissionCard from './MissionCard';

class Mission extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missionContainer">
        <Title headline="Missões" />
        {
          Missions.map((mission) => (<MissionCard
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
            key={ mission.name }
          />))
        }
      </div>
    );
  }
}

export default Mission;
