import React, { Component } from 'react';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import Title from './Title';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div>
          {missions.map((miss) => (
            <MissionCard
              key={ miss.name }
              name={ miss.name }
              year={ miss.year }
              country={ miss.country }
              destination={ miss.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}
