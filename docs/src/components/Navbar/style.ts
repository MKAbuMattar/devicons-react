import styled from 'styled-components';

export const Navbar = styled.nav`
  grid-column: span 3 / span 3;
  background-color: #071013;
  color: #eeeeee;
`;

export const Sticky = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem;
  height: calc(100vh - 4rem);
  z-index: 1;
`;

export const NavbarLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
`;

export const NavbarTitle = styled.h2`
  margin: 0;
  font-size: 1.9em;
  text-align: center;
  color: #eeeeee;

  && span {
    font-size: 0.6em;
    opacity: 0.5;
  }

  @media only screen and (max-width: 512px) {
    font-size: 1.7em;
  }
`;
export const NavbarScrollToTopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NavbarItem = styled.div`
  a {
    color: #eeeeee;

    &:hover {
      color: #d52128;
    }
  }
`;
