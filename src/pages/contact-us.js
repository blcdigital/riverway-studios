import React from 'react';

import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import ContactForm from 'components/ContactForm';
import Hero from 'components/Hero';
import TwoColumnContent, {
  ContentSt as TwoColumnSectionSt,
  // CtaSt as TwoColumnCtaSt,
} from 'components/TwoColumnContent';
// import ThreeColumnContent, {
//   ContentSt as ThreeColumnSectionSt,
// } from 'components/ThreeColumnContent';

const IndexPage = () => (
  <Layout>
    <SEO title="Contact us" />

    <Hero title="Get in touch" />

    <TwoColumnContent>
      <TwoColumnSectionSt>
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
  </Layout>
);

export default IndexPage;
