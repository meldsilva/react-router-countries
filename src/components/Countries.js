import { StyledLink, StyledNav, StyledTable, StyledTableHeader,
    StyledTableRow, StyledTableCell} from "./Countries-styles";
import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import React from "react";

const region_bloc_codes = [
    { code: 'EU',       desc: 'European Union'},
    { code: 'EFTA',     desc: 'European Free Trade Association'},
    { code: 'CARICOM',  desc: 'Caribbean Community'},
    { code: 'PA',       desc: 'Pacific Alliance'},
    { code: 'AU',       desc: 'African Union'},
    { code: 'USAN',     desc: 'Union of South American Nations'},
    { code: 'AL',       desc: 'Arab League'},
    { code: 'ASEAN',    desc: 'Association of Southeast Asian Nations'},
    { code: 'CAIS',     desc: 'Central American Integration System'},
    { code: 'CEFTA',    desc: 'Central European Free Trade Agreement'},
    { code: 'NAFTA',    desc: 'North American Free Trade Agreement'},
    { code: 'SAARC',    desc: 'South Asian Association for Regional Cooperation'}
];

function Countries() {
    //this is an example of a form with uncontroled input
    // i.e. no onChange event for input
    const [country_list, setCountryData] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null);
    const [input_value, setInput] = useState('saarc');

    const nameRef = React.useRef();

    useEffect( () => {
        // setloading(true);
        // fetch("https://restcountries.eu/rest/v2/all")
        fetch(`https://restcountries.eu/rest/v2/regionalbloc/${input_value}`)
        .then(response => response.json())
        .then(setCountryData)
        .then( ()=>setloading(false) )
        .catch(setError)
    },[input_value]);

    const handleSubmit = (event) => {
        event.preventDefault(); //WTF does this do? Ans: Prevents resubmission of form when submitting the form.
        // console.log('name: ', nameRef.current.value);
        setInput(nameRef.current.value);

        // const form = event.target;
        // console.log('name: ', form.name);
        // setInput(form.name);
    }

    // const handleChange = (e) => {
    //     console.log('');
    // }

    if(loading) return <h1 style={ {color: "magenta" } }>Loading...</h1>;
    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    
    // console.log('http response', JSON.stringify(country_list));
    // console.log('country list', country_list);
    if(!country_list) {
        return null;
    } else {
        let resp = JSON.stringify(country_list);
        // console.log('Response string: ',resp);
        if (resp.search('"status":404,') > -1) {
            return <h3>{`${input_value} in not a valid input.`}</h3>;
        }
    }

    let row = 0;

    return(
        <StyledNav>
            <StyledLink to="capitals">Capitals</StyledLink>
            <StyledLink to="neighbors">Neighbors</StyledLink>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Region Name: </label>
                    <input
                        id="name"
                        type="text"
                        ref={nameRef}
                    />
                    <button type="Submit"  >
                        Submit
                    </button>
                </div>

            </form>
            <StyledTable>
                <StyledTableHeader>
                    <StyledTableRow>
                        <StyledTableCell style={{width:"10%"}}>Flag</StyledTableCell>
                        <StyledTableCell style={{width:"40%"}}>Country</StyledTableCell>
                        <StyledTableCell style={{width:"20%"}}>Capital</StyledTableCell>
                        <StyledTableCell style={{width:"20%"}}>Population</StyledTableCell>
                        <StyledTableCell style={{width:"20%"}}>Currency</StyledTableCell>
                    </StyledTableRow>
                </StyledTableHeader>
                {<tbody>{
                    country_list.map( (item) =>
                    <StyledTableRow key={Math.random().toString()}>
                        <StyledTableCell key={row} align="center">
                            <img alt={item.name}
                            src={item.flag}
                                 height="20px"
                            />
                        </StyledTableCell>
                        <StyledTableCell key={Math.random().toString()}>{item.name}</StyledTableCell>
                        <StyledTableCell key={Math.random().toString()}>{item.capital}</StyledTableCell>
                        <StyledTableCell align="right" key={Math.random().toString()}>{item.population.toLocaleString()}</StyledTableCell>
                        <StyledTableCell key={Math.random().toString()}>{item.currencies[0].name + " [" + item.currencies[0].code + "]"}</StyledTableCell>
                    </StyledTableRow>
                    
                    )}</tbody>
                }
            </StyledTable>
            <Outlet />
        </StyledNav>
    );
}

export default Countries;