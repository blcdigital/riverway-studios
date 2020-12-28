import React from 'react';
import { Link } from 'gatsby';

import Button from 'components/_atoms/Button';
import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import IconList from 'components/IconList';
import ImageText, { CtaSt } from 'components/ImageText';
import PromoStrip, {
  ContentSt as PromoStripContentSt,
} from 'components/PromoStrip';

import AboutUsImage from 'images/about-us-home.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero
      isExpanded
      title="A flexible recording and rehearsal space in the heart of Essex"
    />

    <IconList
      items={[
        {
          icon: 'https://placekeanu.com/100/85',
          text: 'Professional multitrack recording',
        },
        {
          icon: 'https://placekeanu.com/100/85',
          text: 'Three fully kitted rehearsal rooms',
        },
        {
          icon: 'https://placekeanu.com/100/85',
          text: 'Mixing, mastering and remixing',
        },
        {
          icon: 'https://placekeanu.com/100/85',
          text: 'Mixing, mastering and remixing',
        },
      ]}
    />

    <ImageText image={AboutUsImage} title="About us">
      <p>
        Riverway Studios combines the best equipped music recording studios and
        the largest set of music rehearsal studios in the Hertfordshire and
        Essex area. We have been open for over 14 years now, and are a well
        known and loved part of the local music community! Our practice rooms
        are home to many faces of the local music scene; come join us!
      </p>

      <p>
        Located just off Edinburgh Way in Harlow, Essex, we are a 5 minute drive
        from Junction 7 of the M11, providing easy access to North London,
        Epping, Bishops Stortford, Stansted and beyond.
      </p>

      <CtaSt>
        <Button as={Link} to="/contact-us">
          Find us
        </Button>
      </CtaSt>
    </ImageText>

    <PromoStrip title="Ready?">
      <PromoStripContentSt>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta
          tempus blandit. Integer nisl erat, bibendum at aliquet vitae,
          tristique nec tortor. Praesent non ligula non justo pulvinar blandit.
          Suspendisse nec massa ante. Morbi sollicitudin vestibulum nibh vitae
          maximus. Nulla ullamcorper convallis ex vitae.
        </p>
      </PromoStripContentSt>

      <PromoStripContentSt>
        <Button as={Link} level="button" to="/contact-us">
          Book a consultation
        </Button>
      </PromoStripContentSt>
    </PromoStrip>
  </Layout>
);

export default IndexPage;
