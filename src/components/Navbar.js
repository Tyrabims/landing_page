import React from 'react'
import { //GlobalStyle,
        NavbarContainer,
        LeftContainer,
        RightContainer,
        MidContainer,
        NavbarInnerContainer,
        NavbarLink,
        NavbarLinkContainer,

} from '../styles/Navbar.style'




function Navbar() {
  return (
    <>
      <NavbarContainer>
        <NavbarInnerContainer>
          <LeftContainer>
           
          </LeftContainer>
          <MidContainer>
          <NavbarLinkContainer>
              <NavbarLink to="/">Home</NavbarLink>
              <NavbarLink to="/properties">Properties</NavbarLink>
              <NavbarLink to="/members">Members </NavbarLink>
              <NavbarLink to="/pages"> Pages </NavbarLink>
              <NavbarLink to="/blogs">Blogs</NavbarLink>
            
            </NavbarLinkContainer>
          
          </MidContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <NavbarLink to="/login">Login</NavbarLink>
              <NavbarLink to="/signup">Signup</NavbarLink>
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
    </>
  
  )
}


export default Navbar