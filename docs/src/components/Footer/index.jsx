import { Fragment } from 'react';

import { FooterContainer, FooterLink } from './style';

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Fragment>
      <FooterContainer>
        <p>
          All Copyrights Reserved ©{' '}
          {getYear() >= '2021' ? `2021 - ${getYear()}` : getYear()}, Made With ❤{' '}
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
  );
};

export default Footer;
