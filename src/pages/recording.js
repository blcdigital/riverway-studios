import React from 'react';
import { Link } from 'gatsby';

import Button from 'components/_atoms/Button';
import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import ImageStrip from 'components/ImageStrip';
import ImageText from 'components/ImageText';
import Pricing, {
  PriceItemList,
  PriceItemSt,
  PriceItemDurationSt,
  PriceItemTitleSt,
  PriceItemValueSt,
} from 'components/Pricing';
import Standfirst from 'components/Standfirst';
import SingleColumnContent, {
  CtaSt as SingleColumnCtaSt,
} from 'components/SingleColumnContent';
import TwoColumnContent, {
  ContentSt as TwoColumnSectionSt,
} from 'components/TwoColumnContent';
import { COLORS, getColor } from 'styles/color';

import RecordingMastering from 'images/recording-mastering.png';
import RecordingVoiceover from 'images/recording-voiceover.png';
import HeroImage from 'images/header-img-recording.jpg';
import ImageStripImage from 'images/image-strip-recording.jpg';

const RecordingPage = () => (
  <Layout>
    <SEO title="Recording" />

    <Hero image={HeroImage} title="Recording" />

    <Standfirst>
      <p>
        We offer a very flexible digital recording suite, capable of producing
        fantastic results for your project.
      </p>
    </Standfirst>

    <TwoColumnContent>
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
      </TwoColumnSectionSt>

      <TwoColumnSectionSt>
        <iframe
          width="100%"
          height="375"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1213553410%3Fsecret_token%3Ds-g9aLnNXcGzh&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          title="Recording at Riverway Studios"
        ></iframe>
      </TwoColumnSectionSt>
    </TwoColumnContent>

    <ImageStrip smallScreenImage={ImageStripImage} />

    <TwoColumnContent title="Studio Features">
      <TwoColumnSectionSt>
        <h3 className="with-underline">Tech Spec</h3>

        <p>
          Our quad-core main recording computer is more than capable with any
          project setup we can throw at it.
        </p>

        <p>
          16 Channel simultaneous recording allows a lot of flexibility in the
          recording and mixing stages of your project.
        </p>

        <p>
          High quality industry standard microphones from the likes of Neumann,
          AKG, Sennheisser and Shure.
        </p>

        <p>
          Alongside Cubase, we have a multitude of high quality sound modules
          and effects, available at the click of a mouse. All changes to your
          music are reversible, and many bands find experimenting with their
          tracks to be both great fun and an important part of moulding their
          sound.
        </p>

        <p>
          Extensive library of onboard samples, and a selection of synthesisers,
          for those of you wanting to add new sounds to your next recording.
        </p>
      </TwoColumnSectionSt>

      <TwoColumnSectionSt>
        <h3 className="with-underline">Instruments</h3>

        <h4>Electric</h4>
        <ul className="no-bullet">
          <li>Fender USA Jazz Bass</li>
          <li>Fender USA Deluxe Stratocaster</li>
          <li>Fender USA Deluxe Telecaster</li>
        </ul>

        <h4>Acoustic</h4>
        <ul className="no-bullet">
          <li>Gibson Sheryl Crow Signature Model</li>
          <li>Dreadnaught Electro Acoustic Guitar</li>
          <li>Martin DX-1 Acoustic Guitar</li>
          <li>Yamaha Solid-Top Acoustic Guitar</li>
        </ul>

        <h4>Amps</h4>
        <ul className="no-bullet">
          <li>Vox AC-30 All Tube Guitar Amp</li>
        </ul>

        <h4>Misc</h4>
        <ul className="no-bullet">
          <li>Yamaha P80 Stage Piano</li>
          <li>Miscellaneous Percussion</li>
        </ul>
      </TwoColumnSectionSt>
    </TwoColumnContent>

    <ImageText
      backgroundColor={getColor({ color: COLORS.pebble })}
      image={RecordingMastering}
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
        mastering rate is between £60 and £90 per track, dependant mostly on its
        complexity. Mastering fees are always best discussed case by case.
      </p>

      <iframe
        width="100%"
        height="250"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1245315094%3Fsecret_token%3Ds-Jzhf2tBKutf&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        title="Mastering at Riverway Studios"
      ></iframe>
    </ImageText>

    <SingleColumnContent
      align="center"
      backgroundColor={getColor({ color: COLORS.pebble, luminosity: 90 })}
      title="Pricing"
    >
      <Pricing disclaimer="1 day is 8 hours">
        <PriceItemSt isLarge>
          <PriceItemTitleSt>
            By the day <span>(Mon - Fri)</span>
          </PriceItemTitleSt>

          <PriceItemList>
            <PriceItemSt isInner>
              <PriceItemValueSt>
                £195
                <span>£215 from 1st March 2022</span>
              </PriceItemValueSt>

              <PriceItemDurationSt>
                <b>1 day session</b>
              </PriceItemDurationSt>
            </PriceItemSt>

            <PriceItemSt isInner isDoubleColumn>
              <PriceItemValueSt>£POA</PriceItemValueSt>

              <PriceItemDurationSt>
                <b>
                  Projects longer than one day discussed on an individual basis
                </b>
              </PriceItemDurationSt>
            </PriceItemSt>
          </PriceItemList>
        </PriceItemSt>

        <PriceItemSt borderSmallTop borderMediumTop borderLargeLeft>
          <PriceItemTitleSt>By the hour</PriceItemTitleSt>

          <PriceItemValueSt>
            £30
            <span>£33 from 1st March 2022</span>
          </PriceItemValueSt>

          <PriceItemDurationSt>
            <b>
              per hour
              <br /> (3 hour minimum)
            </b>
          </PriceItemDurationSt>
        </PriceItemSt>

        <PriceItemSt
          borderSmallTop
          borderMediumLeft
          borderMediumTop
          borderLargeLeft
        >
          <PriceItemTitleSt>Mastering</PriceItemTitleSt>

          <PriceItemValueSt>£60 - 90</PriceItemValueSt>

          <PriceItemDurationSt>
            <b>per track</b>
          </PriceItemDurationSt>
        </PriceItemSt>
      </Pricing>

      <p>
        We offer recording sessions Monday to Friday between 10am and 6pm. The
        prices listed are for these times. Weekend recording can be available
        with notice, at an additional fee. Please contact for more details
      </p>

      <p>
        <b>
          Got a bigger project in mind?{' '}
          <Link to="/contact-us">Get in touch</Link>.
        </b>
      </p>

      <SingleColumnCtaSt align="center">
        <Button as={Link} level="button" to="/contact-us">
          Book
        </Button>
      </SingleColumnCtaSt>
    </SingleColumnContent>

    <ImageText
      backgroundColor={getColor({ color: COLORS.pebble })}
      image={RecordingVoiceover}
    >
      <h2>Voice over</h2>

      <p>
        Here at Riverway Studios, we offer high quality Voice recording at a
        very reasonable price.
      </p>

      <p>
        Whether you need voice recording for personal or business needs, we can
        help. Private, personal and corporate clients are all welcome.
      </p>

      <p>
        Our vocal recording booth is acoustically engineered for clear voice
        reproduction. Our high quality microphones are designed to carefully and
        precisely record your VO.
      </p>

      <p>
        Our editing suite will tidy up and process your audio in no time. We can
        export and deliver your files to your individual needs.
      </p>

      <p>
        As well as straightforward, clear voice reproduction, we can mix music
        or other sounds into your project. We can also process your voice in
        some very interesting ways, using a selection of vocal sound effects.
      </p>

      <p>Please contact us via email or telephone for more information. </p>

      <iframe
        width="100%"
        height="250"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1245314737%3Fsecret_token%3Ds-htLKbeEiNB4&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        title="Voice overs at Riverway Studios"
      ></iframe>
    </ImageText>
  </Layout>
);

export default RecordingPage;
