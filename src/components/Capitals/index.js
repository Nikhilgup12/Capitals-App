import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCountry: countryAndCapitalsList[0].id}

  changeCountry = event => {
    this.setState({activeCountry: event.target.value})
  }

  getCountry = () => {
    const {activeCountry} = this.state
    const filterCountry = countryAndCapitalsList.find(
      each => each.id === activeCountry,
    )
    return filterCountry
  }

  render() {
    const {activeCountry} = this.state
    const filterCountry = this.getCountry()

    return (
      <div className="country-main-container">
        <div className="country-container">
          <h1 className="country-heading"> Countries And Capitals </h1>
          <div className="select-container">
            <select
              className="search-country"
              value={activeCountry}
              onChange={this.changeCountry}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {' '}
                  {each.capitalDisplayText}{' '}
                </option>
              ))}
            </select>
            <p className="country-question"> Is Capital of which country? </p>
          </div>

          <p className="capital-answer"> {filterCountry.country} </p>
        </div>
      </div>
    )
  }
}

export default Capitals
