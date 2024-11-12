/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Field = ({ label, children, htmlFor, error }) => {
  const getChildId = (children) => {
    try {
      const child = React.Children.only(children);
      return child.props?.id || undefined;
    } catch (error) {
      console.warn("Field component expects a single child.");
      return undefined;
    }
  };

  const id = htmlFor || getChildId(children);

  return (
    <div className='flex flex-col items-start justify-start mt-2 p-0 w-full mr-2'>
      {label && <label htmlFor={id} className='mb-1'>{label}</label>}
      {children}
      {!!error && <div className='text-red-500 text-sm mt-1'>{error.message}</div>}
    </div>
  );
};

export default Field;
