import { Formik, } from "formik";
import * as Yup from 'yup';
import { Input, Phonebook } from "./ContactForm.styled";
import { nanoid } from 'nanoid';

const schema = Yup.object().shape({
  name: Yup.string().min(1, 'Too Short!').required('Required'),
  number: Yup.number()
    .positive('Must be >0')
    .min(7, 'Not enough numbers!')
    .required('Required'),
  
});

export const ContactForm = ({ options, onAddContact}) => {
    // if (total === 0) {
    //   return <NotificationMessage />;
    // }
  
    return (
        <Formik

        initialValues={{ 
          name: "", 
          number: "" 
        }}

        validationSchema={schema}
        onSubmit={(values, actions) => {
          onAddContact({ id: nanoid(), ...values });
          actions.resetForm();
        }}
      >
        <Phonebook>
          <label>Name
          <Input name="name" type="text" />
          </label>
          <label>Number
          <Input name="number" type="tel" />
          </label>
          <button type="submit">Add number</button>
        </Phonebook>
      </Formik>
    )
}