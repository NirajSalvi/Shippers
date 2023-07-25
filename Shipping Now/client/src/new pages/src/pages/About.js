import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
// import AboutImg from '../assets/images/about-page-img.png';
import Niraj from '../assets/images/niraj.jpg';
import Sarthak from '../assets/images/sarthak.jpg';
import Dhruvi from '../assets/images/dhruvi.jpg';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .photos{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;

  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 4.2rem;
    margin-bottom: 2rem;
    span {
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    font-size: 6rem;
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid white;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, We Are From <span>TE IT</span>
              </p>
              <h2 className="about__heading">Batch C</h2>
              <div className="about__info">
                {/* <PText> */}
                  Niraj Salvi 2020400045
                  <br /> <br />
                  Dhruvi Sheth 2020400054
                  <br />
                  <br />
                  Sarthak Shingre 2020400056
                {/* </PText> */}
              </div>
            </div>
            <div className="right">
              {/* <img src={AboutImg} alt="me" /> */}
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <img className="photos" src={Niraj} alt="me" />
              <br></br>
              <br></br>
              <img className="photos" src={Dhruvi} alt="me" />
              <br></br>
              <br></br>
              <img className="photos" src={Sarthak} alt="me" />
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
      <Footer />
    </>
  );
}
