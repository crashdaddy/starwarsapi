import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleDetails extends Component {

  render() {
    // let homeworld=this.props.ship.homeworld.split('/');
    // let homeworldID = homeworld[5];

    return (
      <div style={{ color: 'lightyellow' }}>
        <span style={{ fontSize: '32px', lineHeight: '32px', color: 'lightblue' }}>{this.props.ship.name.toLowerCase()}</span><br />
        <hr />
        {
          Object.keys(this.props.ship).map((key, i) => {

            if (key !== "vehicles" && key !== "url" && key !== "films" && key !== "starships" && key !== "homeworld" && key !== "species") {
              return (
                <span key={i}>
                  <span style={{ color: 'lightgreen', marginRight: '4px' }}>{key}:</span>
                  <span style={{ color: 'lightyellow' }}>{this.props.ship[key]}</span><br />
                </span>

              )
            }
          })}


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

        {/* <span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>Homeworld: </span>
        {

         ()=> { return (

            <div>himom</div>
          )
         }
        }
        <Link to={{ "pathname": `/planet/${homeworldID}` }}> <img src={`${this.props.ship.homeworld.replace('swapi.dev/api', 'crazyhappyfuntime.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
        <p /> */}
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

export default SingleDetails