import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #fff;
  text-align: center;
  padding: 1em 0 2em 0;
  font-size: 0.8em;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: inherit;
  padding: 0.1em;

  &&:hover {
    color: #000;
    border-bottom: 2px solid #000;
  }
`;
