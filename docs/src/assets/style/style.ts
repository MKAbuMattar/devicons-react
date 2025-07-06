import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle: any = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  background-color: #2d2d2d;
  color: #2e2e2e;
}

a {
  text-decoration: none;
}

::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    background-color: #071013;
}

::-webkit-scrollbar-thumb {
    background-color: #44575f;
}

@keyframes animate-arrow-wave {
  0%   { opacity: 0.2; }
  25%  { opacity: 0.2; }
  50%  { opacity: 0.2; }
  75%  { opacity: 1.0; }
  100% { opacity: 0.2; }
}

`;

export const Grid = styled.div`
  display: grid;
`;

export const Container = styled(Grid)`
  grid-template-columns: repeat(12, minmax(0, 1fr));
  max-width: 968px;
  margin-inline: auto;
`;

export const WhatNew = styled.div`
  color: #eeeeee;
  grid-column: span 9 / span 9;
  margin: 2rem;
`;

export const WhatNewTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const WhatNewDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1rem;

  & mark {
    background-color: #f9f9f9;
    color: #2e2e2e;
    padding: 0.2rem;
    border-radius: 0.2rem;
  }
`;

export const WhatNewCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;
