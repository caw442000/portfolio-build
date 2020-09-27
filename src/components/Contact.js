import React, { useState, useEffect } from "react";
import SocialButtons from "./SocialButtons";

import { useHistory } from "react-router-dom";
// import axios from "axios";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

import { Formik, Form } from "formik";
import * as yup from "yup";

let SignupSchema = yup.object().shape({
  name: yup.string().required("This field is required."),
  email: yup.string().email().required("This field is required."),
  message: yup.string().required("This field is required."),
});

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    opacity: "0.7"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const history = useHistory();

  const FormSubmit = (
    values,
    { setSubmitting, resetForm, setStatus, status }
  ) => {
    // console.log(values);
    // axios
    //   .post("https://choretracker01.herokuapp.com/api/auth/register", values)
    //     .then(res => {
    //       console.log("success", res);
    //       console.log("this is response data", res.data)
    //       console.log("initial values", initialValues);
    //       values = ({
    //       name: "",
    //       username: "",
    //       email: "",
    //       password: ""})
    //       setStatus(res.data);
    //       localStorage.setItem("token", res.data.token);
    //       localStorage.setItem("id", res.data.id)
    //       history.push('/dashboard') // Redirect to Dashboard
    //   })
    //   .catch(error => console.log(error.response, "Didn't work"));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Contact Me
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={FormSubmit}
        >
          {({ errors, handleChange, touched, status, handleReset }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    error={errors.name && touched.name}
                    autoComplete="name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="name"
                    label="Name"
                    autoFocus
                    helperText={
                      errors.name && touched.name ? errors.name : null
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    error={errors.email && touched.email}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.message && touched.message}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    name="message"
                    label="Message"
                    type="message"
                    id="message"
                    helperText={
                      errors.message && touched.message ? errors.message : null
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Typography>
                Already Have An Account <Link to="/login">Click Here</Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </div>
      <SocialButtons />
    </Container>
  );
};

export default Contact;
