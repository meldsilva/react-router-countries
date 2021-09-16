import { StyledLink, StyledNav } from "./Countries-styles";
import { Outlet } from "react-router";

function Countries() {
    return(
        <>
            <StyledNav>
                <StyledLink to="capitals">Capitals</StyledLink>
                <StyledLink to="neighbors">Neighbors</StyledLink>
                <Outlet />
            </StyledNav>
            
         </>   
    );
}

export default Countries;