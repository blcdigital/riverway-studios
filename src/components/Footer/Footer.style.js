import styled from 'styled-components';

import { COLORS, getColor } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';
import { getFontStyle } from 'styles/typography';
import { resetList } from 'styles/utils';

const WrapperSt = styled.footer`
  padding: ${getSpacing(SPACING.xl)} ${getSpacing(SPACING.large)};
  background: ${getColor()};
  color: ${getColor({ color: COLORS.white })};
`;

const ContactSt = styled.div`
  margin-top: ${getSpacing(SPACING.xl)};

  a {
    border: 0;
    color: ${getColor({ color: COLORS.white })};
  }
`;

const CopyrightSt = styled.p`
  ${getFontStyle({ size: 14 })}
  margin: ${getSpacing(SPACING.xl)} 0 0;
  width: 100%;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const NavigationSt = styled.nav`
  ul {
    ${resetList};
  }

  li {
    + li {
      margin-top: ${getSpacing(SPACING.small)};
    }
  }

  a {
    ${getFontStyle({ size: 14 })}
    border: 0;
    color: ${getColor({ color: COLORS.white })};
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

const SiteTitleSt = styled.div`
  margin-top: ${getSpacing(SPACING.xl)};

  a {
    border: 0;
  }
`;

export { WrapperSt, ContactSt, CopyrightSt, NavigationSt, SiteTitleSt };
