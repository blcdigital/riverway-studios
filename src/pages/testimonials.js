import React from 'react';

import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import Quote from 'components/Quote';
import ImageText, { CtaSt } from 'components/ImageText';

import AnnaWells from 'images/anna-wells.jpg';
import HeroImage from 'images/header-img-gallery.jpg';
import Button from 'components/_atoms/Button';

const VouchersPage = () => (
  <Layout>
    <SEO title="Testimonials" />

    <Hero image={HeroImage} title="Testimonials" />

    <ImageText image={AnnaWells}>
      <h2>Anna Wells</h2>

      <Quote>
        <p>
          At Riverway the recording process is smooth, professional and a very
          positive and productive experience. Jim offers a unique method of
          pre-recording discussion and planning, to give direction to the
          process of how to make your track/record, and to ensure the session is
          as effective as it can be... And he is very inclusive and transparent
          in the process of recording and mixing.
        </p>
      </Quote>

      <p>
        Anna is a vibrant, talented piano lead pop music, as well as soul
        inspired singer-songwriting. Inspirations from Carol King to Lady Gaga!
        A regular on the local live circuit too!
      </p>

      <p>
        <b>Fans of these artists should check out Anna...</b> Joni Mitchell,
        Carole King, Dua Lipa, Eva Cassidy, KT Tunstall, Ed Sheeran, Kate
        Miller-Heidke.
      </p>

      <CtaSt>
        <Button
          as="a"
          href="https://open.spotify.com/track/2gGTKxSowFKkGTogviMoA6?si=27b2df1723fa4b1b"
          rel="noreferrer noopener"
          target="_blank"
        >
          Listen on Spotify
        </Button>
      </CtaSt>
    </ImageText>

    {/* <ImageText image={VouchersVouchers} imageLeft></ImageText> */}
  </Layout>
);

export default VouchersPage;
