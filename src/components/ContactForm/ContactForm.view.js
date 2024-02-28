import React, { useState } from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';
import fetch from 'isomorphic-fetch';

import Button from 'components/_atoms/Button';

import {
  ErrorMessageSt,
  FormRowSt,
  InputSt,
  LabelSt,
  TextareaSt,
} from './ContactForm.style';

function ContactForm() {
  const [hasSent, setHasSent] = useState({
    status: 0,
    msg: '',
  });

  function buildEmail(values) {
    return `There's been a contact form submission!\n\nName: ${values.name}\n\nEmail: ${values.email_address}\n\nPhone Number: ${values.phone_number}\n\nMessage:\n ${values.message}\n\n\nThanks\n\n\n------\n\nThis email was automatically generated. If you have any questions please email mail@riverwaystudios.co.uk.`;
  }

  const handleSubmit = (values, actions) => {
    fetch('https://formspree.io/mnqgrnyz', {
      body: JSON.stringify({
        _replyto: values.email_address,
        _subject: `Contact form submission`,
        message: buildEmail(values),
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then((res) => {
      if (res.status === 200) {
        setHasSent({
          status: 200,
          msg:
            '<p><b>Thank you for your message. We will get back to you soon, usually within 24 hours.</b></p><p><b>Please note - If your email is time sensitive, for instance a rehearsal request at short notice, please call or text 07760 160638.</b></p>',
        });
        actions.setSubmitting(false);
        return;
      }
      setHasSent({
        status: 500,
        msg:
          '<p><b>There was an error. Please contact mail@riverwaystudios.co.uk.</b></p>',
      });
      actions.setSubmitting(false);
    });
  };

  if (hasSent.status === 200) {
    return <div dangerouslySetInnerHTML={{ __html: hasSent.msg }} />;
  }

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: '',
        email_address: '',
        phone_number: '',
        message: '',
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Please enter your name'),
        email_address: Yup.string()
          .email('Please enter a valid email address')
          .required('Please enter your email address'),
        message: Yup.string().required('Please enter a message'),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleChange }) => {
        return (
          <Form>
            <FormRowSt>
              <LabelSt htmlFor="name">Name (required):</LabelSt>
              <InputSt
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
              />
              <ErrorMessageSt>
                <ErrorMessage name="name" />
              </ErrorMessageSt>
            </FormRowSt>

            <FormRowSt>
              <LabelSt htmlFor="email_address">
                Email address (required):
              </LabelSt>
              <InputSt
                id="email_address"
                name="email_address"
                type="email"
                onChange={handleChange}
              />
              <ErrorMessageSt>
                <ErrorMessage name="email_address" />
              </ErrorMessageSt>
            </FormRowSt>

            <FormRowSt>
              <LabelSt htmlFor="phone_number">Phone number:</LabelSt>
              <InputSt
                id="phone_number"
                name="phone_number"
                type="tel"
                onChange={handleChange}
              />
              <ErrorMessageSt>
                <ErrorMessage name="phone_number" />
              </ErrorMessageSt>
            </FormRowSt>

            <FormRowSt>
              <LabelSt htmlFor="message">Message (required):</LabelSt>
              <TextareaSt
                id="message"
                name="message"
                rows="5"
                onChange={handleChange}
              ></TextareaSt>
              <ErrorMessageSt>
                <ErrorMessage name="message" />
              </ErrorMessageSt>
            </FormRowSt>

            <FormRowSt isActionRow>
              <Button isNarrow level="button" type="submit">
                {isSubmitting ? `Sending...` : `Send message`}
              </Button>
            </FormRowSt>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ContactForm;
