import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: #6495ed;
  color: white;
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
    /* color: white; */
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
    /* color: black; */
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: #6495ed;
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div id="footer">
      <div className="container">
        <div className="footer__col1">
          <h1 id="footer" className="footer__col1__title">Shippers</h1>
          <PText>By the Students of TE IT Batch C</PText>
        </div>
        <div className="footer__col3">
          <FooterCol 
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/aboutus',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contactus',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '2020400045, 2020400054, 2020400056',                
              },
              {
                title: '@spit.ac.in',
                path: 'mailto:webcifar@gmail.com',
              },
              {
                title: 'Andheri, Mumbai',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2022 - Shipper | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="http://webcifar.com">
              TE IT
            </a>{' '}
          </PText>
        </div>
      </div>
      </div>
    </FooterStyle>
  );
}
