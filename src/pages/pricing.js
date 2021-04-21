import React from 'react';
import { Link } from 'gatsby';

import Button from 'components/_atoms/Button';
import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import Pricing, {
  PriceItemList,
  PriceItemDescriptionSt,
  PriceItemSt,
  PriceItemDurationSt,
  PriceItemTitleSt,
  PriceItemValueSt,
} from 'components/Pricing';
import SingleColumnContent, {
  CtaSt as SingleColumnCtaSt,
} from 'components/SingleColumnContent';
import { COLORS, getColor } from 'styles/color';

import HeroImage from 'images/header-img-pricing.jpg';

const RecordingPage = () => (
  <Layout>
    <SEO title="Pricing" />

    <Hero image={HeroImage} title="Pricing" />

    <SingleColumnContent
      align="center"
      backgroundColor={getColor({ color: COLORS.pebble, luminosity: 90 })}
      title="Recording"
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

    <SingleColumnContent
      align="center"
      backgroundColor={getColor({ color: COLORS.pebble, luminosity: 90 })}
      title="Rehearsal"
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

        <PriceItemSt borderSmallTop borderMediumLeft borderLargeLeft>
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

        <PriceItemSt borderSmallTop borderMediumTop borderLargeLeft>
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

        <PriceItemSt
          borderSmallTop
          borderMediumLeft
          borderMediumTop
          borderLargeLeft
        >
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
  </Layout>
);

export default RecordingPage;
