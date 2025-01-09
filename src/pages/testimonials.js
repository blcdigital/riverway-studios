import React from 'react';

import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import Quote from 'components/Quote';
import ImageText, { CtaSt } from 'components/ImageText';

import AnnaWells from 'images/anna-wells.jpg';
import Coppola from 'images/coppola.jpg';
import JamesNighthawk from 'images/james-nighthawk.jpg';
import Katana from 'images/katana.jpg';
import Starbug2 from 'images/starbug-2.jpg';
import Spotify from 'images/spotify.png';
import HeroImage from 'images/header-img-gallery.jpg';
import Button from 'components/_atoms/Button';

const VouchersPage = () => (
  <Layout>
    <SEO title="Testimonials and Portfolio" />

    <Hero image={HeroImage} title="Testimonials and Portfolio" />

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
        Vibrant, talented piano lead pop music, as well as soul inspired
        singer-songwriting. Inspirations from Carol King to Lady Gaga! A regular
        on the local live circuit too!
      </p>

      <p>
        <b>Fans of these artists should check out Anna...</b> Joni Mitchell,
        Carole King, Dua Lipa, Eva Cassidy, KT Tunstall, Ed Sheeran, Kate
        Miller-Heidke.
      </p>

      <p>
        <b>Recorded, mixed, and mastered at Riverway Studios...</b>
        <br />
        <b>Album:</b> "Circles"
        <br />
        <b>Singles:</b> "No More", "You won't get me down", "Un Bugiardo", "It's
        Complicated"
      </p>

      <CtaSt>
        <Button
          as="a"
          href="https://open.spotify.com/track/2gGTKxSowFKkGTogviMoA6?si=27b2df1723fa4b1b"
          level="inline-link"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img alt="" src={Spotify} />
          Listen on Spotify
        </Button>
      </CtaSt>
    </ImageText>

    <ImageText image={Starbug2} imageLeft>
      <h2>StarBug 2</h2>

      <Quote>
        <p>
          Recording our first album at Riverway Studios was a blast... learnt so
          much from Jim that going forward puts us in great shape for all our
          future material...
        </p>
      </Quote>

      <p>
        Three-piece rock band with blues and funk tones from Essex... high
        energy and fully genuine.
      </p>

      <p>
        <b>Fans of these artists should check out StarBug 2...</b> Soundgarden,
        Alice in chains or the Red Hot Chilli Peppers.
      </p>

      <p>
        <b>Recorded, mixed, and mastered at Riverway Studios...</b>
        <br />
        <b>Album:</b> "Three Mandarins"
      </p>

      <CtaSt>
        <Button
          as="a"
          href="https://open.spotify.com/track/2dLM6Dj3L4qchE2rohmgAf?si=0118c574f3274144"
          level="inline-link"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img alt="" src={Spotify} />
          Listen on Spotify
        </Button>
      </CtaSt>
    </ImageText>

    <ImageText image={Katana}>
      <h2>Katana</h2>

      <Quote>
        <p>
          Projects at Riverway Studios have been the best experience every
          time... each session being better than the last and each product
          improving every time too… honestly working with Jim is fun, engrossing
          and inspiring.
        </p>
      </Quote>

      <p>
        Rap/Vocalist, Black and Asian influences... I will reflect my uniqueness
        in my songs... the name Katana will be everywhere!
      </p>

      <p>
        <b>Fans of these artists should check out Katana...</b> Juice WRLD, Lil
        Baby, Kendrick Lamar.
      </p>

      <p>
        <b>Recorded, mixed, and mastered at Riverway Studios...</b>
        <br />
        <b>Singles:</b> "Leave" and "Changing Views"
      </p>

      <CtaSt>
        <Button
          as="a"
          href="https://open.spotify.com/track/4sAVfdADUkZgaSTz9ADJR6?si=d9b2a98b89d54e37"
          level="inline-link"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img alt="" src={Spotify} />
          Listen on Spotify
        </Button>
      </CtaSt>
    </ImageText>

    <ImageText image={Coppola} imageLeft>
      <h2>Coppola</h2>

      <Quote>
        <p>
          We have all really enjoyed recording at Riverway Studios. Jim is very
          supportive and helps us get the best out of our time... The set up is
          great and we are really happy with the results so far. Came to record
          the single, stayed to record the album!!
        </p>
      </Quote>

      <p>
        Harlow indie pop/rock band with influences old and new. After a number
        of lineup changes, we are launching our Debut Album in 2025, recorded at
        Riverway Studios!
      </p>

      <p>
        <b>Fans of these artists should check out Coppola...</b> The Cure,
        Catfish and the Bottle Men, New Order, Two Door Cinema Club.
      </p>

      <p>
        <b>Recorded, mixed, and mastered at Riverway Studios...</b>
        <br />
        <b>Single:</b> Single "The Opinion of Strangers"
        <br />
        <b>Album coming 2025...</b>
      </p>

      <CtaSt>
        <Button
          as="a"
          href="https://open.spotify.com/track/6mJMocZ7LzHbhusa6bth6H?si=766b28c6c7a84408"
          level="inline-link"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img alt="" src={Spotify} />
          Listen on Spotify
        </Button>
      </CtaSt>
    </ImageText>

    <ImageText image={JamesNighthawk}>
      <h2>James Nighthawk</h2>

      <Quote>
        <p>
          In-house producer and owner of Riverway Studios, he has produced many
          of the area's musicians over the last 20 years. As of 2024 he has
          released two full length albums as “James Nighthawk”, as well as
          collab's with other artists.
        </p>
      </Quote>

      <p>
        Acoustic guitar-led singer songwriter. Folky with modern twists.
        Natural, honest production with accessible but deep lyrics.
      </p>

      <p>
        <b>Fans of these artists should check out Anna...</b> Mumford and Sons,
        Elliot Smith, Laura Marling, Neil Young, David Bowie, Joni Mitchell.
      </p>

      <p>
        <b>Recorded, mixed, and mastered at Riverway Studios...</b>
        <br />
        <b>Albums:</b> "The Twilight Sessions" and "Beauty and Sorrow"
      </p>

      <CtaSt>
        <Button
          as="a"
          href="https://open.spotify.com/track/4Y92oByRxKAR6F7HfG5Mnt?si=39652805831e4537"
          level="inline-link"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img alt="" src={Spotify} />
          Listen on Spotify
        </Button>
      </CtaSt>
    </ImageText>
  </Layout>
);

export default VouchersPage;
