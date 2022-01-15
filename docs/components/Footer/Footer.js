import { Fragment } from 'react'
import { FooterContainer, FooterLink } from './Style'

const Footer = () => {
  return (
    <Fragment>
      <FooterContainer>
        <p>
          All Copyrights Reserved © 2021, Made With ❤{' '}
          <FooterLink href="https://mkabumattar.github.io/">
            MKAbuMattar
          </FooterLink>{' '}
          (under{' '}
          <FooterLink href="https://github.com/MKAbuMattar/devicons-react/blob/main/LICENSE">
            MIT License
          </FooterLink>
          )
        </p>
      </FooterContainer>
    </Fragment>
  )
}

export default Footer
