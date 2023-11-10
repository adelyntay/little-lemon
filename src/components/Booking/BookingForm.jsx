import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { startOfToday } from 'date-fns';
import Confirmation from '../Booking/Confirmation';

const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      occasion: '',
      guest: '1',

    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone number is required').matches(/^\d{10}$/, 'Invalid phone number'),
      date: Yup.date().required('Please select a date').min(startOfToday(), 'Date cannot be earlier than today'),
      time: Yup.string().required('Please select a time'),
    }),
    onSubmit: (values) => {
      console.log(values);
      setIsSubmitted(true);
    },
  });

  return (
    <div>
    {isSubmitted ? (
      <Confirmation/>
    ) : (
    <form onSubmit={formik.handleSubmit} className='bookingform'>
      <div className='booking-field'>
        <label className='field-header'>Name</label>
        <input
          type='text'
          className='input'
          id='name'
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className='error'>{formik.errors.name}</div>
        ) : null}
      </div>

      <div className='booking-field'>
        <label className='field-header'>Email</label>
        <input
          type='text'
          className='input'
          id='email'
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className='error'>{formik.errors.email}</div>
        ) : null}
      </div>

      <div className='booking-field'>
        <label className='field-header'>Phone</label>
        <input
          type='text'
          className='input'
          id='phone'
          {...formik.getFieldProps('phone')}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className='error'>{formik.errors.phone}</div>
        ) : null}
      </div>

      <div className='booking-field'>
        <label className='date-header'>Date</label>
        <input
          type='date'
          className='input'
          id='date'
          {...formik.getFieldProps('date')}
          onBlur={formik.handleBlur}
        />
        {formik.touched.date && formik.errors.date ? (
          <div className='error'>{formik.errors.date}</div>
        ) : null}
      </div>

      <div className='booking-field'>
        <label className='time-header'>Time</label>
        <select
          className='custom-select'
          id='time'
          {...formik.getFieldProps('time')}
          onBlur={formik.handleBlur}
        >
          <option value=''>Select Time</option>
          <option value="9:00 AM">9:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
        </select>
        {formik.touched.time && formik.errors.time ? (
          <div className='error'>{formik.errors.time}</div>
        ) : null}
      </div>

      <div className='booking-field'>
        <label className='occasion-header'>Occasion</label>
        <select
          className='occasion-select'
          id='occasion'
          {...formik.getFieldProps('occasion')}
        >
          <option value=''>Select Occasion</option>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
          <option value='Engagement'>Engagement</option>
        </select>
      </div>

      <div className='booking-field'>
        <label className='guest-header'>No. of Guests</label>
        <p>For party size of 5 and above, please call us at 6123 4567.</p>
        <select
          className='guest-select'
          id='guest'
          {...formik.getFieldProps('guest')}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </div>

      <button type='submit' className='confirm-btn'>
        Submit
      </button>
    </form>
    )}
    </div>
  );
};



export default BookingForm;
