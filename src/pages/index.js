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
import HeroImage from 'images/header-img-home.png';
import HeroImage2x from 'images/header-img-home@2x.png';
import IconLessons from 'images/icons/lessons.svg';
import IconMixing from 'images/icons/mixing.svg';
import IconRecording from 'images/icons/recording.svg';
import IconRehearsal from 'images/icons/rehearsal.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero
      isExpanded
      image={HeroImage}
      image2x={HeroImage2x}
      title="A flexible recording and rehearsal space in the heart of Essex"
    />

    <IconList
      items={[
        {
          icon: IconRecording,
          text: 'Professional multitrack recording',
        },
        {
          icon: IconRehearsal,
          text: 'Three fully kitted rehearsal rooms',
        },
        {
          icon: IconMixing,
          text: 'Mixing, mastering and remixing',
        },
        {
          icon: IconLessons,
          text: 'Studio engineering lessons',
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
          Are you looking for <Link to="/rehearsal">Rehearsal</Link> time with
          us?
          <br />
          Do you have a <Link to="/recording">Recording</Link> project we can
          help you with?
          <br />
          Would you like to <Link to="/gallery">see our facilities</Link>?
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
