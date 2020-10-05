import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import SocialButtons from "./SocialButtons";

import { useHistory } from "react-router-dom";
// import axios from "axios";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import * as yup from "yup";
import { tan } from "@material-ui/core/colors";

const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const USER_ID = process.env.USER_ID;

let SignupSchema = yup.object().shape({
  name: yup.string().required("This field is required."),
  email: yup.string().email().required("This field is required."),
  message: yup.string().required("This field is required."),
});

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tan",
      "& .MuiInputLabel": {
        color: "tan",
      },
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "tan",
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
        color: "tan",
      },
      "&:hover fieldset": {
        borderColor: "#511",
        color: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
        color: "tan",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  root: {
    width: "600px",
    margin: "0 auto",
  },
  container: {
    // width: "100%",
    // height: "600px",
    display: "flex",
    alignItems: "center",
    // paddingBottom: "20px",
  },
  paper: {
    // marginTop: theme.spacing(8),
    margin: "10px auto",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "tan",
    opacity: "0.7",
    borderRadius: "25px",
  },
  input: {
    color: "tan",
  },
  text: {
    // '& input:valid + fieldset': {
    //   borderColor: 'tan',
    //   borderWidth: 2,
    // },
    // '& input:invalid + fieldset': {
    //   borderColor: 'red',
    //   borderWidth: 2,
    // },
    // '& input:valid:focus + fieldset': {
    //   borderLeftWidth: 6,
    //   padding: '4px !important', // override inline-style
    // },
    // '&.Mui-focused fieldset': {
    //   borderColor: 'green',
    //   color: 'tan',
    // },
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
    color: "tan",
    backgroundColor: "#511",

    "&:hover": {
      color: "#511",
      backgroundColor: "tan",
    },
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

  function sendEmail(values, { resetForm }) {
    // e.preventDefault();
    console.log("the values", values);
    // console.log("target", e.target)

    let templateValues = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateValues, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    // history.push("/");
    
    values = {
      name: "",
      username: "",
      email: "",
    };
    resetForm(values);

    console.log("new values", values);
  }

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

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography className={classes.text} component="h1" variant="h5">
          Contact Me
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={sendEmail}
          className="contact-form"
        >
          {({
            errors,
            handleChange,
            touched,
            status,
            handleReset,
            resetForm,
            values
          }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CssTextField
                    InputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      className: classes.input,
                    }}
                    className={classes.text}
                    error={errors.name && touched.name}
                    autoComplete="name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="name"
                    label="Name"
                    autoFocus
                    value={values.name || ''} // <= Suggested change
                    helperText={
                      errors.name && touched.name ? errors.name : null
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <CssTextField
                    InputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      className: classes.input,
                    }}
                    className={classes.text}
                    error={errors.email && touched.email}
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    value={values.email || ''} // <= Suggested change
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <CssTextField
                    InputProps={{
                      className: classes.input,
                    }}
                    InputLabelProps={{
                      className: classes.input,
                    }}
                    className={classes.text}
                    error={errors.message && touched.message}
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    onChange={handleChange}
                    name="message"
                    label="Message"
                    type="message"
                    id="message"
                    value={values.message || ''} // <= Suggested change
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
                // onClick={() => resetForm(initialValues)}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>

        <SocialButtons />
      </div>
    </Container>
  );
};

export default Contact;
