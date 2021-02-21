import React from 'react';
import { Link } from 'gatsby';

import Button from 'components/_atoms/Button';
import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import ImageStrip from 'components/ImageStrip';
import ImageText, { CtaSt } from 'components/ImageText';
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
  CtaSt as TwoColumnCtaSt,
} from 'components/TwoColumnContent';
import { COLORS, getColor } from 'styles/color';

import AboutUsImage from 'images/about-us-home.png';
import HeroImage from 'images/header-img-recording.png';
import HeroImage2x from 'images/header-img-recording@2x.png';
import ImageStripImage from 'images/image-strip-recording.jpg';

const RecordingPage = () => (
  <Layout>
    <SEO title="Recording" />

    <Hero image={HeroImage} image2x={HeroImage2x} title="Recording" />

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

        <TwoColumnCtaSt>
          <Button as={Link} to="/contact-us">
            Hear an example
          </Button>
        </TwoColumnCtaSt>
      </TwoColumnSectionSt>

      <TwoColumnSectionSt>Soundcloud widget</TwoColumnSectionSt>
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
      image={AboutUsImage}
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

    <SingleColumnContent
      align="center"
      backgroundColor={getColor({ color: COLORS.pebble, luminosity: 90 })}
      title="Pricing"
    >
      <Pricing disclaimer="1 day is 8 hours">
        <PriceItemSt isLarge>
          <PriceItemTitleSt>By the day</PriceItemTitleSt>

          <PriceItemList>
            <PriceItemSt isInner>
              <PriceItemValueSt>£195</PriceItemValueSt>

              <PriceItemDurationSt>
                <b>1 day session</b>
              </PriceItemDurationSt>
            </PriceItemSt>

            <PriceItemSt isInner>
              <PriceItemValueSt>£380</PriceItemValueSt>

              <PriceItemDurationSt>
                <b>2 day session</b>
              </PriceItemDurationSt>
            </PriceItemSt>

            <PriceItemSt isInner>
              <PriceItemValueSt>£555</PriceItemValueSt>

              <PriceItemDurationSt>
                <b>3 day session</b>
              </PriceItemDurationSt>
            </PriceItemSt>
          </PriceItemList>
        </PriceItemSt>

        <PriceItemSt borderSmallTop borderMediumTop borderLargeLeft>
          <PriceItemTitleSt>By the hour</PriceItemTitleSt>

          <PriceItemValueSt>£30</PriceItemValueSt>

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
      image={AboutUsImage}
    >
      <h2>Voicover</h2>

      <p>
        Click above to hear about our voice over service, and sample the quality
        of our vocal recording first hand! (Decent speakers or headphones
        recommended, naturally!).
      </p>

      <p>
        Here at Riverway Studios we offer high quality voice-over recording at a
        very reasonable price. Whether you need voice recording for radio,
        video, a corporate show reel, or any other requirement, we are well
        suited for your needs. Our vocal recording booth is acoustically
        engineered for clear voice reproduction, and our in house Neumann
        Microphone ensures a clear, natural sound. Our editing suite will tidy
        up and process your audio in no time, and we can export to both full
        quality wav files and pre-compressed mp3 files, or both, dependant on
        your individual needs. As well as straightforward vocal reproduction, we
        can also mix music into the background, include sound effects and even
        process your voice in some very interesting ways. Please contact us via
        email or telephone for more information.
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
