import styled from 'styled-components';

export const Main = styled.main`
  grid-column: span 9 / span 9;
`;

export const SearchSection = styled.div`
  /* background-color: #e7e7e7; */
  text-align: center;
  padding: 4em 2em;
`;

export const SearchInput = styled.input`
  font-size: 18px;
  border: none;
  background: #fff;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><path fill='%23838D99' d='M13.22 14.63a8 8 0 1 1 1.41-1.41l4.29 4.29a1 1 0 1 1-1.41 1.41l-4.29-4.29zm-.66-2.07a6 6 0 1 0-8.49-8.49 6 6 0 0 0 8.49 8.49z'></path></svg>");
  background-repeat: no-repeat;
  background-position: 10px 10px;
  background-size: 20px 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  width: 400px;
  padding: 0.5em 1em 0.5em 2.5em;

  &&::placeholder {
    color: #838d99;
  }

  &&:focus {
    outline: none;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.16);
  }

  @media only screen and (max-width: 512px) {
    max-width: 240px;
  }
`;

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em;
  /* background-color: #e7e7e7; */
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: stretch;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 11rem;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const CardInfo = styled.div`
  padding: 2.5em 1em;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardTitle = styled.h4`
  margin: 0;
  font-size: 1.1em;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &&:after {
    content: '';
    display: block;
    width: 100px;
    padding-top: 12px;
    border-bottom: 3px solid #2e2e2e;
  }
`;

export const CountSection = styled.section`
  /* background-color: #e7e7e7; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CountWrapper = styled.div`
  /* background-color: #2d2d2d; */
  color: #ffffff;
  width: 20rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 5px;
`;

export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  width: 30rem;
  margin-inline: auto;
  max-width: 820px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const MainCardInfo = styled.div`
  padding: 2.5em 3em;
`;

export const MainCardTitle = styled.h4`
  margin: 0;
  font-size: 1.5em;

  &&:after {
    content: '';
    display: block;
    width: 100px;
    padding-top: 12px;
    border-bottom: 3px solid #2e2e2e;
  }
`;
