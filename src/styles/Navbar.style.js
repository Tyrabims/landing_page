import styled from "styled-components";
import { Link } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

// export const GlobalStyle = createGlobalStyle`
// body {
//     background-color: black;
//   /* color: ${props => (props.whiteColor ? 'white' : 'black')}; */
// }
// `

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 50px;
    background-color: black;
    display: flex;
    flex-direction: column;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex: 50%;
    align-items: center;
    padding-left: 5%;
`;

export const RightContainer = styled.div`
    display: flex;
    flex: 30%;
    justify-content: flex-end;
    padding-right: 50px;
    align-items: center;
`;

export const MidContainer = styled.div`
    display: flex;
    flex: 50%;
    align-items: center;
    padding-right: 10%;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
display: flex;
`;

export const NavbarLink = styled(Link)`
color: white;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;
`;

