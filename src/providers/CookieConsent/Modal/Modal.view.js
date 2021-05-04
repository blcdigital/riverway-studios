import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';

import Button from 'components/_atoms/Button';

import { ConsentContext } from '../CookieConsent';
import { CATEGORIES, CATEGORY_CONTENT } from '../CookieConsent.constants';
import {
  ContentSt,
  FormRowSt,
  OverlaySt,
  ToggleSt,
  ToggleLabelSt,
} from './Modal.style';

function CookieModal() {
  const { allowedCategories, shouldShowModal, onAccept } = useContext(
    ConsentContext
  );
  const [selectedCategories, setSelectedCategories] = useState(
    allowedCategories.reduce(
      (obj, item) => {
        return {
          ...obj,
          [item]: true,
        };
      },
      { necessary: true }
    )
  );

  const handleInputToggle = (e) =>
    setSelectedCategories({
      ...selectedCategories,
      [e.target.id]: e.target.checked,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    const categoriesToSend = Object.keys(selectedCategories).filter(
      (category) => selectedCategories[category] === true
    );

    onAccept(categoriesToSend);
  };

  if (!shouldShowModal) {
    return null;
  }

  return (
    <>
      <OverlaySt />

      <ContentSt>
        <h2>Customise your cookie permissions</h2>

        <p>
          We use cookies to personalise content and ads, to provide social media
          features and to analyse our traffic. We also share information about
          your use of our site with our social media, advertising and analytics
          partners who may combine it with other information that you’ve
          provided to them or that they’ve collected from your use of their
          services.
        </p>

        <p>
          More information on your rights can be found in our{' '}
          <Link to="/privacy">Privacy Policy</Link>. You can also find more
          detailed information on what cookies are in each category and update
          your consent in the future at our{' '}
          <Link to="/cookie-information">Cookie Info page</Link>.
        </p>

        <form onSubmit={handleSubmit}>
          <h3>Available categories</h3>

          {CATEGORIES.map((category) => {
            return (
              <FormRowSt key={category}>
                <h4>
                  <input
                    defaultChecked={selectedCategories[category]}
                    disabled={category === 'necessary'}
                    hidden
                    id={category}
                    name={category}
                    type="checkbox"
                    onChange={handleInputToggle}
                  />
                  <ToggleLabelSt htmlFor={category}>
                    <ToggleSt />
                    {CATEGORY_CONTENT[category].title}
                  </ToggleLabelSt>
                </h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: CATEGORY_CONTENT[category].message,
                  }}
                />
              </FormRowSt>
            );
          })}

          <FormRowSt isSubmitRow>
            <Button level="button" type="submit">
              Save permissions
            </Button>
          </FormRowSt>
        </form>
      </ContentSt>
    </>
  );
}

export default CookieModal;
