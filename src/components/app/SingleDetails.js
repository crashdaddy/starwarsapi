import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PersonDetails extends Component {

  render() {

    return (
      <div style={{ color: 'lightyellow' }}>
        {this.props.ship.name ?
          <div><span style={{ fontSize: '32px', lineHeight: '32px', color: 'lightblue' }}>{this.props.ship.name.toLowerCase()}</span><br /></div>
          :
          ''
        }
        <hr />
        {
          Object.keys(this.props.ship).map((key, i) => {

            if (key !== "vehicles" && key !== "url" && key !== "films" && key !== "starships" && key !== "homeworld" && key !== "species" && key != "characters") {
              return (
                <span key={i}>
                  <span style={{ color: 'lightgreen', marginRight: '4px' }}>{key}:</span>
                  <span style={{ color: 'lightyellow' }}>{this.props.ship[key]}</span><br />
                </span>

              )
            }
          })}
        {this.props.ship.characters ?
        <div>
        <span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>Characters: </span>{this.props.ship.characters && this.props.ship.characters.map(people => {
          let idStr = people.split('/');
          let peopleID = idStr[5];
          return (

            <Link to={{ "pathname": `/people/${peopleID}` }}> <img src={`${people.replace('swapi.dev/api', 'crazyhappyfuntime.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
          )
        })}<p /></div>
        :
        ''
      }
        <span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>Films: </span>{this.props.ship.films && this.props.ship.films.map(film => {
          let idStr = film.split('/');
          let filmID = idStr[5];
          return (

            <Link to={{ "pathname": `/films/${filmID}` }}> <img src={`${film.replace('swapi.dev/api', 'crazyhappyfuntime.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
          )
        })}<p />
        <span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>Vehicles: </span>{this.props.ship.vehicles && this.props.ship.vehicles.map(vehicle => {
          let idStr = vehicle.split('/');
          let vehicleID = idStr[5];
          return (

            <Link to={{ "pathname": `/vehicles/${vehicleID}` }}> <img src={`${vehicle.replace('swapi.dev/api', 'crazyhappyfuntime.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
          )
        })}<p />
        <span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>Starships: </span>{this.props.ship.starships && this.props.ship.starships.map(starship => {
          let idStr = starship.split('/');
          let starshipID = idStr[5];
          return (

            <Link to={{ "pathname": `/starships/${starshipID}` }}> <img src={`${starship.replace('swapi.dev/api', 'crazyhappyfuntime.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
          )
        })}<p />
        <p />
        <span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>Species: </span>{this.props.ship.species && this.props.ship.species.map(specie => {
          let idStr = specie.split('/');
          let speciesID = idStr[5];
          return (

            <Link to={{ "pathname": `/species/${speciesID}` }}> <img src={`${specie.replace('swapi.dev/api', 'crazyhappyfuntime.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
          )
        })}<p />
      </div>
    )
  }
}

export default PersonDetails