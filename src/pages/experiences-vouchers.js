import React from 'react';
import { Link } from 'gatsby';

import Button from 'components/_atoms/Button';
import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import IconList from 'components/IconList';
import ImageText, { CtaSt } from 'components/ImageText';
import Standfirst from 'components/Standfirst';

import VouchersExperience from 'images/vouchers-experience.png';
import VouchersVouchers from 'images/vouchers-vouchers.png';
import HeroImage from 'images/header-img-recording.png';
import HeroImage2x from 'images/header-img-recording@2x.png';
import IconMixing from 'images/icons/mixing.svg';
import IconRecording from 'images/icons/recording.svg';
import IconRehearsal from 'images/icons/rehearsal.svg';

const VouchersPage = () => (
  <Layout>
    <SEO title="Experiences & Vouchers" />

    <Hero
      image={HeroImage}
      image2x={HeroImage2x}
      title="Experiences & Vouchers"
    />

    <Standfirst>
      <p>
        We offer Studio experiences right here in our professional recording
        suite. Any singer, any ability!
      </p>
    </Standfirst>

    <ImageText image={VouchersExperience}>
      <h2>Recording studio experience</h2>

      <p>
        Our Studio Experience package is perfect for music loving friend or
        family member. It is ideal for children’s parties, celebrations and
        graduations.
      </p>

      <p>
        You will be in the capable hands of one the area’s hottest producers,
        Jim White, who will expertly guide you through a studio session, where
        you will record, mix and master your performance on the hit songs of
        your choice. You will perform “on mic” in groups or solo, and see the
        entire recording process in session.
      </p>

      <p>
        As mentioned, we provide packages for solo singers and groups starting
        from just £135 – get in touch for more info!
      </p>

      <CtaSt>
        <Button as={Link} to="/contact-us">
          Find us
        </Button>
      </CtaSt>
    </ImageText>

    <IconList
      items={[
        {
          icon: IconRecording,
          content:
            'Once you have booked, we will arrange the backing track for your songs, as well as full lyrics. This gives you time to practise for your big day!',
        },
        {
          icon: IconRehearsal,
          content:
            'Using our professional recording studio, we will record your vocals onto the backing track. We will show you all the tricks of the trade, and by using the correct microphone techniques, digital effects and mixing, we will get the best out of your voice!',
        },
        {
          icon: IconMixing,
          content:
            'At the end of the session, you will be given CDs and/or digital copies of the recording with your voices on the songs.',
        },
      ]}
      title="How it works"
    />

    <ImageText image={VouchersVouchers} imageLeft>
      <h2>Vouchers</h2>

      <p>
        We offer flexible vouchers for musicians. These vouchers can be for
        recording time and/or rehearsal time.
      </p>

      <p>
        We personalise vouchers with the name of the recipient. We discuss each
        voucher case by case, to ensure you purchase something they will
        cherish!
      </p>

      <p>
        Vouchers are valid for an entire year, to give the recipient plenty of
        time to prepare ahead of their booking. Full, clear details of what the
        voucher includes is listed to make everything nice and simple.
      </p>

      <p>
        Please contact us if you would like to discuss purchasing a voucher for
        a friend, family member or loved one.
      </p>
    </ImageText>
  </Layout>
);

export default VouchersPage;
