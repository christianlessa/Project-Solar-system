import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

export default class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="planetas" />
        {Planets.map((plan) => (
          <PlanetCard
            key={ plan.name }
            planetName={ plan.name }
            planetImage={ plan.image }
          />
        ))}
      </>
    );
  }
}
