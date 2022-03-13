import React from 'react';
import {Formik} from 'formik';

const CreateForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: any) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
};

export default CreateForm;
