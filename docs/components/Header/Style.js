import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #2d2d2d;
`

export const HeaderBox = styled.div`
  max-width: 550px;
  padding: 6em 2em;
  margin: 0 auto;
`

export const HeaderTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 3em;
  text-align: center;
  color: #eeeeee;

  && span {
    font-size: 0.6em;
    opacity: 0.5;
  }

  @media only screen and (max-width: 512px) {
    font-size: 1.7em;
  }
`

export const HeaderInfo = styled.p`
  padding: 2em 0 0 0;
  margin: 0 auto;
  color: #eeeeee;
`

export const HeaderLink = styled.a`
  text-decoration: none;
  color: inherit;
  padding: 0.1em;
  cursor: pointer;

  &&:hover {
    border-bottom: 2px solid #eeeeee;
  }
`

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5em;
  max-width: 820px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

export const HeaderCardInfo = styled.div`
  padding: 2.5em 3em;
`

export const HeaderCardTitle = styled.h4`
  margin: 0;
  font-size: 1.5em;

  &&:after {
    content: '';
    display: block;
    width: 100px;
    padding-top: 12px;
    border-bottom: 3px solid #2e2e2e;
  }
`

export const HeaderArrowWaveBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

export const HeaderArrowWave = styled.div`
  display: inline-block;
  cursor: pointer;
  font-size: 0;

  && span {
    display: block;
    position: relative;
    height: 10px;
    width: 16px;
    opacity: 0.2;

    ::before,
    ::after {
      display: block;
      content: '';
      position: absolute;
      height: 2px;
      width: 12px;
      background-color: #d52128;
    }

    ::before {
      top: -2px;
      left: 0;
      transform-origin: left center;
      transform: rotate(45deg);
    }

    ::after {
      top: -2px;
      right: 0;
      transform-origin: right center;
      transform: rotate(-45deg);
    }

    :nth-child(1n) {
      animation: animate-arrow-wave 2s infinite;
      animation-delay: 0.25s;
    }

    :nth-child(2n) {
      animation: animate-arrow-wave 2s infinite;
      animation-delay: 0.5s;
    }

    :nth-child(3n) {
      animation: animate-arrow-wave 2s infinite;
      animation-delay: 0.75s;
    }
  }
`
