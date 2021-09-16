import React from "react";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    color: Blue;
    text-decoration: none;
    margin: 1rem;
    position: relative;
`;
const StyledNav = styled.nav`
    float:left;
    text-decoration:none;
    color:#002e5b; 
    font-size:36px; 
    padding: 25px 35px; 
    display:inline-block; 
    transition: all 0.5s ease 0s;
`;

export function Home() {
    return(
        <div>
            <StyledNav>
                <StyledLink to="countries">Countries</StyledLink>
                <StyledLink to="spotify">Spotify</StyledLink>
                <StyledLink to="yelp">Yelp</StyledLink>
            </StyledNav>
        </div>
    );
}

export function Spotify() {
    return(
        <div>
            <h1>[Spotify]</h1>
            
        </div>
    );
}

export function Yelp() {
    return(
        <div>
            <h1>[Yelp]</h1>
        </div>
    );
}

export function Whoops404() {
    let location = useLocation();
    console.log(location);
    return(
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    );
}
