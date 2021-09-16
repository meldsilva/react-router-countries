import { StyledLink, StyledNav, StyledTable, StyledTableHeader, StyledTableCell } from "./Countries-styles";
import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import React from "react";

function Countries() {

    const [country_list, setCountryData] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null);

    useEffect( () => {
        // setloading(true);
        
        fetch("https://restcountries.eu/rest/v2/all")
        // fetch("https://restcountries.eu/rest/v2/regionalbloc/saarc")
        .then(response => response.json())
        .then(setCountryData)
        .then( ()=>setloading(false) )
        .catch(setError)
    },[]);

    if(loading) return <h1 style={ {color: "magenta" } }>Loading...</h1>;
    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if(!country_list) return null;    

    return(
        
        <StyledNav>
            
            <StyledLink to="capitals">Capitals</StyledLink>
            <StyledLink to="neighbors">Neighbors</StyledLink>

            <StyledTable>
                <tr>
                    <StyledTableHeader>Country</StyledTableHeader>
                    <StyledTableHeader>Capital</StyledTableHeader>
                    <StyledTableHeader>Population</StyledTableHeader>
                </tr>
                {
                    country_list.map( (item) =>
                    <tr>
                        <StyledTableCell>{item.name}</StyledTableCell>
                        <StyledTableCell>{item.capital}</StyledTableCell>
                        <StyledTableCell>{item.population.toLocaleString()}</StyledTableCell>
                    </tr>
                    )
                }
            </StyledTable>

            <Outlet />
        </StyledNav>
    );
}

export default Countries;