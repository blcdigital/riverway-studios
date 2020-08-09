import React from 'react';

import Button from 'components/_atoms/Button';
import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import ContactForm from 'components/ContactForm';
import Hero from 'components/Hero';
import ImageStrip from 'components/ImageStrip';
import TwoColumnContent, {
  ContentSt as TwoColumnSectionSt,
} from 'components/TwoColumnContent';
import ThreeColumnContent, {
  ContentSt as ThreeColumnSectionSt,
} from 'components/ThreeColumnContent';
import { COLORS, getColor } from 'styles/color';

import MapLarge from 'images/map-large.jpg';
import MapSmall from 'images/map-small.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Contact us" />

    <Hero title="Get in touch" />

    <TwoColumnContent>
      <TwoColumnSectionSt>
        <p>
          <a href="tel:07760 160638">
            <b>07760 160638</b>
          </a>
        </p>

        <p>
          <a href="mailto:mail@riverwaystudios.co.uk">
            <b>mail@riverwaystudios.co.uk</b>
          </a>
        </p>

        <p>
          All projects are run by Studio Producer, Jim White. With a first class
          BA degree in Music Technology and many years of studio production
          experience working with many of the area’s biggest bands, your project
          will be in good hands!
        </p>
      </TwoColumnSectionSt>

      <TwoColumnSectionSt>
        <ContactForm />
      </TwoColumnSectionSt>
    </TwoColumnContent>

    <ImageStrip
      largeScreenImage={MapLarge}
      minHeight={400}
      smallScreenImage={MapSmall}
    >
      <Button
        as="a"
        href="https://www.google.co.uk/maps/place/Riverway+Studios/@51.7927073,0.1246865,16z/data=!4m5!3m4!1s0x47d89bb9be4ca027:0x879b6ae092acb48d!8m2!3d51.792704!4d0.1290639"
        isNarrow
        level="button"
        rel="noreferrer noopnener"
        target="_blank"
        title="Find us on Google Maps"
      >
        Find us
      </Button>
    </ImageStrip>

    <ThreeColumnContent
      backgroundColor={getColor({ color: COLORS.pebble, luminosity: 90 })}
    >
      <ThreeColumnSectionSt>
        <h2 className="with-underline">Opening hours</h2>
      </ThreeColumnSectionSt>

      <ThreeColumnSectionSt>
        <h3>Recording</h3>

        <p>
          <b>
            10am – 3am
            <br />7 days a week
          </b>
        </p>

        <p>Our usual session times are:</p>

        <ul className="no-bullet">
          <li>10am – 2pm</li>
          <li>2pm – 6pm</li>
          <li>6pm – 10pm</li>
          <li>7pm – 11pm</li>
          <li>8pm – Midnight</li>
          <li>11pm – 3am (Nighthawk rate)</li>
        </ul>
      </ThreeColumnSectionSt>

      <ThreeColumnSectionSt>
        <h3>Recording</h3>

        <p>
          <b>
            10am – 3am
            <br />7 days a week
          </b>
        </p>

        <p>Our usual session times are:</p>

        <ul className="no-bullet">
          <li>10am – 2pm</li>
          <li>2pm – 6pm</li>
          <li>6pm – 10pm</li>
          <li>7pm – 11pm</li>
          <li>8pm – Midnight</li>
          <li>11pm – 3am (Nighthawk rate)</li>
        </ul>
      </ThreeColumnSectionSt>
    </ThreeColumnContent>
  </Layout>
);

export default IndexPage;
