import React from 'react';
import { Link } from 'gatsby';

import Button from 'components/_atoms/Button';
import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import Standfirst from 'components/Standfirst';
import TwoColumnText, {
  ContentSt as TwoColumnSectionSt,
  CtaSt as TwoColumnCtaSt,
} from 'components/TwoColumnText';

const RehearsalPage = () => (
  <Layout>
    <SEO title="Rehearsal rooms" />

    <Hero title="Rehearsal rooms" />

    <Standfirst>
      <p>
        Our three large rehearsal rooms are some of the best equipped rooms in
        the area.
      </p>
    </Standfirst>

    <TwoColumnText>
      <TwoColumnSectionSt>
        <p>
          All projects are run by Studio Producer, Jim White. With a first class
          BA degree in Music Technology and many years of studio production
          experience working with many of the area’s biggest bands, your project
          will be in good hands!
        </p>

        <p>
          We offer a very flexible digital recording suite, capable of producing
          fantastic results for your project. We offer free consultations at the
          studio, for all bands interested in making their next recording with
          us. You will get to see the studio, listen to past recordings at each
          stage of development and ask any questions directly to the Producer.
          We promise no hard sell! Email or call for details.
        </p>

        <TwoColumnCtaSt>
          <Button as={Link} to="/contact-us">
            Hear an example
          </Button>
        </TwoColumnCtaSt>
      </TwoColumnSectionSt>

      <TwoColumnSectionSt>Soundcloud widget</TwoColumnSectionSt>
    </TwoColumnText>
  </Layout>
);

export default RehearsalPage;
