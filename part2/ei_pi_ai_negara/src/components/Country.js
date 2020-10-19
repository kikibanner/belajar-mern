import React from 'react'
import Weather from './Weather'

const Country = ({ country }) => {
    const languageList  = country.languages.map((lang) => {
        return <li key={lang.iso639_1}> {lang.name} </li>
    })

    const timeZoneList = country.timezones.map((tmz, idx) => {
        return <span key={idx}> {tmz} | </span>
    })

    return (
        <div>
            <h2>{country.name}</h2>

            <div>
                <span>
                    <strong>Ibukota: </strong>
                    {country.capital}
                </span>
                <br />
                <span>
                    <strong>Populasi: </strong>
                    {country.population}
                </span>
                <br />
                <span>
                    <strong>Regional: </strong>
                    {country.region}
                </span>
                <br />
                <span>
                    <strong>Sub-Regional: </strong>
                    {country.subregion}
                </span>
                <br />
                <span>
                    <strong>Zona Waktu: </strong>
                    {timeZoneList}
                </span>
            </div>

            <div>
                <h3>Bahasa(-bahasa): </h3>
                <ul>{languageList}</ul>
            </div>

            <div>
                <img alt={"Bendera Negara"} width={"200px"} src={country.flag} ></img>
            </div>

            <Weather query={country.capital + "," + country.alpha2code} />
        </div>
    )
}

export default Country;