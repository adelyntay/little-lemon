import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookingForm = () => {
    const [numberOfGuests, setNumberOfGuests] = useState(1);

  return (
    <div className='bookingform'>
      <h1>Reservation</h1>
      <Formik
  initialValues={{
    name: '',
    email: '',
    phoneNumber: '',
    reservationDate: '',
    numberOfGuests: 1,
  }}
  validate={(values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/i.test(values.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number';
    }

    if (!values.reservationDate) {
      errors.reservationDate = 'Reservation date is required';
    }

    return errors;
  }}
  onSubmit={(values, { resetForm }) => {
    console.log(values);
    resetForm();
  }}
>
        {() => (
          <Form>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
            <br/><br/>

            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <br/><br/>

            <label htmlFor="phoneNumber">Phone Number:</label>
            <Field type="tel" id="phoneNumber" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="div" />
            <br/><br/>

            <label htmlFor="reservationDate">Reservation Date:</label>
            <Field type="date" id="reservationDate" name="reservationDate" />
            <ErrorMessage name="reservationDate" component="div" />
            <br/><br/>

            <label htmlFor="selectedTime">Select Time:</label>
            <Field
              as="select"
              id="selectedTime"
              name="selectedTime"
            >
              <option value="">Select Time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
            </Field>
            <ErrorMessage name="selectedTime" component="div" />
            <br/><br/>

            <label htmlFor="occasion">Occasion:</label>
            <Field
              as="select"
              id="occasion"
              name="occasion"
            >
            <option value="">Select Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
            </Field>
            <ErrorMessage name="occasion" component="div" />
            <br/><br/>

            <label htmlFor="numberOfGuests">Number of Guests:</label>
            <Field
              type="number"
              id="numberOfGuests"
              name="numberOfGuests"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(parseInt(e.target.value))}
            />
            <ErrorMessage name="numberOfGuests" component="div" />
            <br/><br/>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
