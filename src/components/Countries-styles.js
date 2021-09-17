import {Link} from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    color: Magenta;
    text-decoration: none;
    margin: 1rem;
    position: relative;
    font-weight: bold;
`;
export const StyledNav = styled.nav`
    float:left;
    text-decoration:none;
    color:#002e5b; 
    font-size:24px; 
    padding: 25px 35px; 
    display:inline-block; 
    transition: all 0.5s ease 0s;
`;

export const StyledTable = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
`;

export const StyledTableHeader = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  color: white;
  background: #719a9b;
  font-size: 18px;
  text-align: center;
`;

export const StyledTableCell = styled.td`
  border: 1px solid #dddddd;

  text-align:
      ${prop => prop.align? prop.align: "left"};
  padding: 8px;
  font-size: 15px;
`;  
  

export const StyledTableRow = styled.tr`
    background-color: ${prop => prop.row % 2 ? '#dae8e6' : '#ffffff'};
`;
