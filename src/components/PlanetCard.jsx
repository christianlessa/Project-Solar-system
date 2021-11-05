import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="container-planets" data-testid="planet-card">
        <img className="planets" src={ planetImage } alt={ `Planeta ${planetName}` } />
        <h3 data-testid="planet-name">
          {planetName}
        </h3>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
