import { Formik, Form, ErrorMessage} from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { FormBtn, Label, StyledField } from './PhoneBook.styled';



const schema = Yup.object().shape({
    Name: Yup.string()
      .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, 'Invalid name')
      .required('This is required!')
      .min(1, 'Too Short!')
      .max(50, 'Too Long!'),
    Number: Yup.string()
      .matches(/^\+?[0-9]{1,3}-?[0-9]+$/, 'Invalid number')
      .required('This is required!')
      .min(6, 'Too Short!')
      .max(20, 'Too Long!'),
  });

export const PhoneBook = ({addContact}) => {
  return (
    <Formik
      initialValues={{
        Name: '',
        Number: '',
      }}
      validationSchema={schema}

      onSubmit={ (values, actions) => {
        addContact({...values, id:nanoid()});
        actions.resetForm();
      }}
    >
      <Form>
        <Label htmlFor="Name">Name
        <StyledField name="Name" placeholder="Name" />
        <ErrorMessage name="Name" component="div" />
        </Label>

        <Label htmlFor="Number">Number
        <StyledField name="Number" placeholder="Number" />
        <ErrorMessage name="Number" component="div" />
        </Label>
        
        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    </Formik>
  );
};
