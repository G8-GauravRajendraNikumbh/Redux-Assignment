import { Button, Grid, Paper, TextField, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../actions/userReducerActions";
import { validateForm, formFields, initialValues } from "./helper";

function Entry() {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    const errors = validateForm(form);
    setIsSubmitClicked(true);
    setErrors(errors);
    if (errors.isValid) {
      setOpen(true);

      dispatch(addUser(form));
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  const onClear = () => {
    setForm(initialValues);
  };

  const updateForm = (e) => {
    const updatedForm = { ...form, [e.target.id]: e.target.value };
    setForm(updatedForm);
    if (isSubmitClicked) {
      const errors = validateForm(updatedForm);
      setErrors(errors);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper style={{ padding: 10 }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          User Added!
        </Alert>
      </Snackbar>
      <Grid container spacing={2} justifyContent={"center"}>
        {formFields.map((formField) => {
          return (
            <Grid
              container
              xs={12}
              md={8}
              style={{ marginTop: 10 }}
              justifyContent={"center"}
            >
              <TextField
                {...formField}
                onChange={updateForm}
                value={form[formField.id]}
                error={!!errors[formField.id]}
                helperText={<span>{errors[formField.id]}</span>}
              />
            </Grid>
          );
        })}

        <Grid
          container
          xs={12}
          md={8}
          style={{ marginTop: 10 }}
          justifyContent={"center"}
        >
          <Button variant="contained" onClick={onSubmit}>
            Add User
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={onClear}
            style={{ marginLeft: 10 }}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Entry;
