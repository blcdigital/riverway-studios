import React, { useContext } from 'react';

import Button from 'components/_atoms/Button';
import SingleColumnContent from 'components/SingleColumnContent';
import { ConsentContext } from 'providers/CookieConsent';

import { TableSt } from './CookieInformation.style';

const CookieInformation = () => {
  const { onCustomise } = useContext(ConsentContext);

  return (
    <>
      <SingleColumnContent>
        <h2>Updating your permissions</h2>

        <p>
          In order to update your cookie permissions, please click the button
          below.
        </p>

        <p>
          <Button level="button" onClick={onCustomise} type="button">
            Update your cookie permissions
          </Button>
        </p>
      </SingleColumnContent>

      <SingleColumnContent>
        <h2>Cookies on riverwaystudios.co.uk</h2>

        <h3>Necessary</h3>
        <TableSt>
          <thead>
            <tr>
              <th>Cookie name</th>
              <th>What it's for</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>cookieConsent</th>
              <td>Stores your cookie permission preferences for 90 days.</td>
            </tr>
          </tbody>
        </TableSt>

        <h3>Statistics</h3>
        <TableSt>
          <thead>
            <tr>
              <th>Cookie name</th>
              <th>What it's for</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>_ga</th>
              <td>
                This cookie name is asssociated with Google Universal Analytics
                - which is a significant update to Google's more commonly used
                analytics service. This cookie is used to distinguish unique
                users by assigning a randomly generated number as a client
                identifier. It is included in each page request in a site and
                used to calculate visitor, session and campaign data for the
                sites analytics reports. By default it is set to expire after 2
                years, although this is customisable by website owners.
              </td>
            </tr>
            <tr>
              <th>_gid</th>
              <td>
                This cookie name is asssociated with Google Universal Analytics.
                This appears to be a new cookie and as of Spring 2017 no
                information is available from Google. It appears to store and
                update a unique value for each page visited.
              </td>
            </tr>
          </tbody>
        </TableSt>
      </SingleColumnContent>
    </>
  );
};

export default CookieInformation;
