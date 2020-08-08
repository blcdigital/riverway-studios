import React from 'react';
import { Link } from 'gatsby';

import Button from 'components/_atoms/Button';
import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import ImageText, { CtaSt } from 'components/ImageText';
import Standfirst from 'components/Standfirst';
import { COLORS, getColor } from 'styles/color';

const RecordingPage = () => (
  <Layout>
    <SEO title="Recording" />

    <Hero title="Recording" />

    <Standfirst>
      <p>
        We offer a very flexible digital recording suite, capable of producing
        fantastic results for your project.
      </p>
    </Standfirst>

    <ImageText
      backgroundColor={getColor({ color: COLORS.pebble })}
      image="https://placekeanu.com/500"
    >
      <h2>Mastering</h2>

      <p>
        Mastering is the process of finalising your music; adding volume, kick
        and sparkle ready for release and broadcast. Unmastered music will sound
        quiet, limp and unfinished in comparison. We therefore strongly
        recommend you have your music mastered with us.
      </p>

      <p>
        Mastering is done separately (usually within a few weeks) and our usual
        mastering rate is between £50 and £75 per track, dependant mostly on its
        complexity. Mastering fees are always best discussed case by case.
      </p>

      <CtaSt>
        <Button as={Link} to="/contact-us">
          Hear an example
        </Button>
      </CtaSt>
    </ImageText>
  </Layout>
);

export default RecordingPage;
