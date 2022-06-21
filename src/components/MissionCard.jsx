import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="missionCard">
        <p data-testid="mission-name">
          <b>Nome: </b>
          {name}
        </p>
        <p data-testid="mission-year">
          <b>Ano: </b>
          {year}
        </p>
        <p data-testid="mission-country">
          <b>País: </b>
          {country}
        </p>
        <p data-testid="mission-destination">
          <b>Destino: </b>
          {destination}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
