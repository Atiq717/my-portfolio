import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './css/Contact.css';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [validated, setValidated] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();

      if (form) {
        emailjs.sendForm('service_17g2lua', 'template_6vcqc5t', form, 'PEOkM-iuE8olg-_Dh')
          .then((result) => {
            console.log('Email sent to me:', result.text);
            alert('Message sent successfully!');
            form.reset();
          }, (error) => {
            console.log('Failed to send email to me:', error.text);
          });

        // Send auto-reply email to the user
        const userEmail = form.querySelector('input[name="email"]') as HTMLInputElement;
        if (userEmail) {
          const autoReplyParams = {
            from_name: (form.querySelector('input[name="name"]') as HTMLInputElement).value,
            message: (form.querySelector('textarea[name="message"]') as HTMLInputElement).value,
            reply_to: userEmail.value,
          };

          emailjs.send('service_17g2lua', 'template_d51vnx6', autoReplyParams, 'PEOkM-iuE8olg-_Dh')
            .then((result) => {
              console.log('Auto-reply sent:', result.text);
            }, (error) => {
              console.log('Failed to send auto-reply:', error.text);
            });
        }
      }
    }
    setValidated(true);
  };

  return (
    <section id="contact" className="py-5">
      <div className="container-fluid">
        <h2 className="heading text-center">Contact <span>Me!</span></h2>
        <Form ref={form} noValidate validated={validated} onSubmit={sendEmail}>
          <Form.Group controlId="formName">
            <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
            <Form.Control type="text" name="name" placeholder="Full Name" required />
            <Form.Control.Feedback type="invalid">Please provide your full name.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
            <Form.Control type="email" name="email" placeholder="Email Address" required />
            <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formMobile">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" name="mobile" placeholder="Mobile Number" />
          </Form.Group>
          <Form.Group controlId="formSubject">
            <Form.Label>Subject <span className="text-danger">*</span></Form.Label>
            <Form.Control type="text" name="subject" placeholder="Subject" required />
            <Form.Control.Feedback type="invalid">Please provide a subject.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Your Message <span className="text-danger">*</span></Form.Label>
            <Form.Control as="textarea" name="message" rows={3} placeholder="Your Message" required />
            <Form.Control.Feedback type="invalid">Please provide a message.</Form.Control.Feedback>
          </Form.Group>
          <input type="hidden" name="reply_to" value={(form.current?.querySelector('input[name="email"]') as HTMLInputElement)?.value || ''} />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
