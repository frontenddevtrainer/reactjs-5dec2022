import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup"

const registerFormSchema  = yup.object().shape({
    email : yup
        .string()
        .min(6, "Email should be more then 6 letters")
        .max(256, "Email should be less than 256 letters")
        .email("Email format is not correct")
        .required(),
    password : yup
        .string()
        .min(6, "Password should be more then 8 letters")
        .max(256, "Password should be less than 40 letters")
        .required()
})


export default function RegisterForm() {

    const person = { email : "abc@abc.com", password : "", address : { city : "delhi" } }

  return (
    <Formik
        // validate={(values)=>{
        //     const errors = {};

        //     if(values.email.length < 10)
        //         {
        //             errors.email = "Lenght less than 10."
        //         }

        //     return errors
        // }}
        validationSchema={registerFormSchema}
        initialValues={person}
    >
      {({ handleChange, values, handleSubmit, errors }) => {
        return (
          <Form onSubmit={handleSubmit}>
            {JSON.stringify(values)}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control value={values.email} type="email" placeholder="Enter email" name="email" onChange={handleChange} />
              {errors.email && <Form.Text className="text-muted">
                    {errors.email}
              </Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control value={values.password} type="password" placeholder="Password" name="password" onChange={handleChange} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>City</Form.Label>
              <Form.Control value={values.address.city} type="password" placeholder="City" name="address.city" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>State</Form.Label>
              <Form.Control value={values.address.state} type="password" placeholder="City" name="address.state" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}
