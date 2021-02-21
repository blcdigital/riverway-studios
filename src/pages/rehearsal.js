import React from 'react';
import { Link } from 'gatsby';

import Button from 'components/_atoms/Button';
import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import ImageStrip from 'components/ImageStrip';
import Pricing, {
  PriceItemSt,
  PriceItemDescriptionSt,
  PriceItemDurationSt,
  PriceItemTitleSt,
  PriceItemValueSt,
} from 'components/Pricing';
import Standfirst from 'components/Standfirst';
import SingleColumnContent from 'components/SingleColumnContent';
import ThreeColumnContent, {
  ContentSt as ThreeColumnSectionSt,
} from 'components/ThreeColumnContent';
import { COLORS, getColor } from 'styles/color';

import HeroImage from 'images/header-img-rehearsal.png';
import HeroImage2x from 'images/header-img-rehearsal@2x.png';
import TourLarge from 'images/rehearsal-tour-promo-large.jpg';
import TourSmall from 'images/rehearsal-tour-promo-small.jpg';

const RehearsalPage = () => (
  <Layout>
    <SEO title="Rehearsal rooms" />

    <Hero image={HeroImage} image2x={HeroImage2x} title="Rehearsal rooms" />

    <Standfirst>
      <p>
        Our three large rehearsal rooms are some of the best equipped rooms in
        the area.
      </p>
    </Standfirst>

    <ThreeColumnContent title="House equipment">
      <ThreeColumnSectionSt>
        <h3 className="with-underline">Drums</h3>

        <p>
          We are kitted out with high quality Mapex Pro Drum Kits. We maintain
          our kits to a high standard for your benefit.
        </p>

        <dl>
          <dt>
            <b>Each kit consists of:</b>
          </dt>
          <dd>
            <b>Bass Drum with Pedal</b>
          </dd>
          <dd>
            <b>Snare Drum with Stand</b>
          </dd>
          <dd>
            <b>Two Rack toms, One floor Tom</b>
          </dd>
          <dd>
            <b>Three cymbal stands*</b>
          </dd>
          <dd>
            <b>Hi-Hat Stand with Clutch</b>
          </dd>
          <dd>
            <b>High Quality Drum Stool</b>
          </dd>
        </dl>

        <p>
          * Brassware (cymbals and hi-hats) is not included, so do remember to
          bring your own, plus additional cymbal stands if you require more than
          those provided
        </p>
      </ThreeColumnSectionSt>

      <ThreeColumnSectionSt>
        <h3 className="with-underline">Mics and PA</h3>

        <h4>Full PA system</h4>

        <h4>Mics</h4>
        <p>2 x Shure SM58 Microphones, inc. leads and stands.</p>

        <h4>Mixer</h4>
        <p>
          8-Channel Mackie Mini Mixer (2 house mic inputs + 6 additional inputs
          for mics/DI instruments).
        </p>

        <h3 className="with-underline">Facilities</h3>
        <ul className="no-bullet">
          <li>Tea and coffee with seating area</li>
          <li>WC</li>
          <li>Free Wi-Fi</li>
          <li>Tuck shop with drinks and snacks</li>
        </ul>
      </ThreeColumnSectionSt>

      <ThreeColumnSectionSt>
        <h3 className="with-underline">Amp hire</h3>

        <p>
          <b>Bass Amp</b>
          <br />
          250W Combo amp with built in tuner, overdrive and iOS/Android
          compatible multieffects.
          <br />
          <b>£4</b> per amp per session.
        </p>

        <hr />

        <p>
          <b>Guitar Amp</b>
          <br />
          60W Combo amp with distortion channel.
          <br />
          <b>£3</b> per amp per session.
        </p>

        <hr />

        <p>Please add these to your booking when arranging your rehearsals.</p>
      </ThreeColumnSectionSt>
    </ThreeColumnContent>

    <SingleColumnContent
      align="center"
      backgroundColor={getColor({ color: COLORS.pebble, luminosity: 90 })}
      title="Pricing"
    >
      <Pricing showBookButton showOpeningTimes>
        <PriceItemSt>
          <PriceItemTitleSt>Peak time</PriceItemTitleSt>

          <PriceItemValueSt>£48</PriceItemValueSt>

          <PriceItemDurationSt>
            <b>for a 4 hour session</b>
            <span>£11 per additional hour</span>
          </PriceItemDurationSt>

          <PriceItemDescriptionSt>
            <dl>
              <dt>Peak times:</dt>
              <dd>6pm - midnight (Mon-Fri)</dd>
              <dd>All day Saturday & Sunday</dd>
            </dl>

            <p>
              This includes any rehearsal slots that touch upon these hours. For
              example, a 3pm-7pm rehearsal would still count as peak, as it
              encroaches upon the peak time hours.
            </p>
          </PriceItemDescriptionSt>
        </PriceItemSt>

        <PriceItemSt>
          <PriceItemTitleSt>Off-peak</PriceItemTitleSt>

          <PriceItemValueSt>£44</PriceItemValueSt>

          <PriceItemDurationSt>
            <b>for a 4 hour session</b>
          </PriceItemDurationSt>

          <PriceItemDescriptionSt>
            <p>
              Off Peak rehearsals are available Monday to Friday between 10am
              and 6pm.
            </p>
          </PriceItemDescriptionSt>
        </PriceItemSt>

        <PriceItemSt>
          <PriceItemTitleSt>Nighthawk session</PriceItemTitleSt>

          <PriceItemValueSt>£40</PriceItemValueSt>

          <PriceItemDurationSt>
            <b>for a 4 hour session</b>
          </PriceItemDurationSt>

          <PriceItemDescriptionSt>
            <p>
              Nighthawk rehearsals are booked for 11pm-3am, 7 days a week, and
              are an exclusive offer for existing clients only. Not available to
              debut bookings.
            </p>
          </PriceItemDescriptionSt>
        </PriceItemSt>

        <PriceItemSt>
          <PriceItemTitleSt>
            Solo <span>(off-peak only)</span>
          </PriceItemTitleSt>

          <PriceItemValueSt>£22</PriceItemValueSt>

          <PriceItemDurationSt>
            <b>for a 2 hour session</b>
          </PriceItemDurationSt>

          <PriceItemDescriptionSt>
            <p>
              <b>For solo musicians only.</b>
            </p>

            <p>
              We understand that sometimes you may need somewhere to practise
              your instrument at volume without upsetting the neighbours! As
              usual, our house drum kit is included (minus brassware) so
              drummers in particular can make the most of this!
            </p>
          </PriceItemDescriptionSt>
        </PriceItemSt>
      </Pricing>
    </SingleColumnContent>

    <ImageStrip
      largeScreenImage={TourLarge}
      minHeight={400}
      smallScreenImage={TourSmall}
    >
      <Button as={Link} to="/tour" isNarrow level="clear">
        Take a tour
      </Button>
    </ImageStrip>
  </Layout>
);

export default RehearsalPage;
