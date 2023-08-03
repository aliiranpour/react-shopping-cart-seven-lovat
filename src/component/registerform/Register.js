import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './Register.css';

const Register = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(`Need to save order for ${data.name}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor='name' className='reg-label'>
                  Name:
                </label>
                <Controller
                  name='name'
                  control={control}
                  render={({ field }) => (
                    <input
                      type='text'
                      className='reg-input'
                      id='name'
                      {...field}
                      required
                    />
                  )}
                />
              </div>
        <div>
          <label htmlFor='email' className='reg-label'>Email:</label>
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <input
                type='email'
                className='reg-input'
                id='email'
                {...field}
                required
              />
            )}
          />
        </div>
        <div>
          <label htmlFor='address' className='reg-label'>
            Address:
          </label>
          <Controller
            name='address'
            control={control}
            render={({ field }) => (
              <input
                type='text'
                className='reg-input'
                id='address'
                {...field}
                required
              />
            )}
          />
        </div>
        <button type='submit' className='checkbtn'>
          Checkout
        </button>
      </form>
    </div>
  );
};

export default Register;
