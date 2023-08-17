import { Formik, Field, Form } from "formik";

export const ContactForm = ({ good, neutral, bad, total, positivePercentage }) => {
    // if (total === 0) {
    //   return <NotificationMessage />;
    // }
  
    return (
        <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <Field name="email" type="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    )
}