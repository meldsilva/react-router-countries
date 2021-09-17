import { StyledLink, StyledNav, StyledTable, StyledTableHeader,StyledTableRow, StyledTableCell } from "./Countries-styles";
import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import React from "react";

function Countries() {
    //this is an example of a form with uncontroled input
    // i.e. no onChange event for input
    const [country_list, setCountryData] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null);
    const [input_value, setInput] = useState('nafta');

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
    }

    // const handleChange = (e) => {
    //     console.log('');
    // }

    if(loading) return <h1 style={ {color: "magenta" } }>Loading...</h1>;
    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if(!country_list) return null;    

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
                </div>
                <button type="Submit" >Submit</button>
            </form>
            <StyledTable>
                <thead>
                    <StyledTableHeader>Country</StyledTableHeader>
                    <StyledTableHeader>Capital</StyledTableHeader>
                    <StyledTableHeader>Population</StyledTableHeader>
                </thead>
                {
                    country_list.map( (item) =>
                    
                    <tbody>
                    <StyledTableRow row={row++}>
                        <StyledTableCell>{item.name}</StyledTableCell>
                        <StyledTableCell>{item.capital}</StyledTableCell>
                        <StyledTableCell>{item.population.toLocaleString()}</StyledTableCell>
                    </StyledTableRow>
                    </tbody>
                    )
                    
                }
            </StyledTable>

            <Outlet />
        </StyledNav>
    );
}

export default Countries;