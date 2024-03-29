import styled from 'styled-components';

export const ScrollToTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: fixed; */
  right: 0.9375rem;
  bottom: 5.125rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: hsla(219, 32%, 90%, 0.8);
  box-shadow: 0 2px 8px hsla(219, 48%, 8%, 0.1);
  backdrop-filter: blur(10px);
  transition: opacity 1s ease-in-out;
  cursor: pointer;
  z-index: 9;

  &:active {
    transform: matrix(0.95, 0, 0, 0.95, 0, 0);
  }

  & svg {
    color: hsla(219, 48%, 8%, 0.8);
  }

  /* For small devices */
  @media screen and (max-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  /* For medium devices */

  @media screen and (min-width: 576px) {
    /* right: -3.5rem;
    bottom: 0.875rem; */
  }

  @media screen and (min-width: 767px) {
  }

  /* For large devices */

  @media screen and (min-width: 992) {
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
