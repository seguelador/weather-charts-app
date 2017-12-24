import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord; // ES6 to set two variables with same data name

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lng={lon} /></td>
        <td><Chart data={temps} color="orange" units="Cº" /></td>
        <td><Chart data={pressures} color="blue" units="hPa" /></td>
        <td><Chart data={humidities} color="green" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> Ciudad </th>
            <th> Temperatura (Cº) </th>
            <th> Presión (hPa) </th>
            <th> Humedad (%) </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// ES5
// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

// ES6 way
function mapStateToProps({ weather }) {
  return { weather }; // { weather } == { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);