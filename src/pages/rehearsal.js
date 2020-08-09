import React from 'react';
import { Link } from 'gatsby';

import Button from 'components/_atoms/Button';
import Layout from 'components/_atoms/Layout';
import SEO from 'components/_atoms/SEO';
import Hero from 'components/Hero';
import Pricing, {
  PriceItemSt,
  PriceItemDescriptionSt,
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
              Nighthawk rehearsals are an exclusive offer: These are rehearsals
              booked for 11pm-3am, 7 days a week.
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
              Nighthawk rehearsals are an exclusive offer: These are rehearsals
              booked for 11pm-3am, 7 days a week.
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
  </Layout>
);

export default RehearsalPage;
