import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Button,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { addressDetails, stepCounter } from "../../redux/reducer/Reducer";

const AddressDetails = () => {
  const dispatch = useDispatch();

  const City = [
    {
      value: "Ahmedabad",
      label: "Ahmedabad",
    },
    {
      value: "Surat",
      label: "Surat",
    },
  ];

  const State = [
    {
      value: "Gujarat",
      label: "Gujarat",
    },
    {
      value: "Maharastra",
      label: "Maharastra",
    },
  ];

  const Country = [
    {
      value: "India",
      label: "India",
    },
    {
      value: "America",
      label: "America",
    },
  ];

  const formik = useFormik({
    initialValues: {
        address1: '',
        city: '',
        country: '',
        address2: '',
        state: '',
        pinCode: ''
    },
    validationSchema: yup.object().shape({
        address1: yup.string().required(),
        city: yup.string().required(),
        country: yup.string().required(),
        address2: yup.string().required(),
        state: yup.string().required(),
        pinCode: yup.string().required()
    }),
    onSubmit: (values) => {
      dispatch(stepCounter(2));
      dispatch(addressDetails(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ flexGrow: 1, m: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <OutlinedInput
              sx={{ m:1 }}
              fullWidth
              placeholder="Address Line 1"
              id="address1"
              name="address1"
              onChange={formik.handleChange}
              value={formik.values.address1}
              error={Boolean(
                formik.errors.address1 && formik.touched.address1
              )}
            />
            {!!formik.errors.address1 && formik.touched.address1 && (
              <FormHelperText sx={{ml:1}} error id="address1">
                {formik.errors.address1}
              </FormHelperText>
            )}
            <TextField
              sx={{ m:1 }}
              fullWidth
              label="City"
              id="city"
              name="city"
              variant="outlined"
              select
              onChange={formik.handleChange}
              value={formik.values.city}
              error={Boolean(
                formik.errors.city && formik.touched.city
              )}
            >
              {City.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {!!formik.errors.city && formik.touched.city && (
              <FormHelperText sx={{ml:1}} error id="city">
                {formik.errors.city}
              </FormHelperText>
            )}
            <TextField
              sx={{ m:1 }}
              fullWidth
              label="Country"
              id="country"
              name="country"
              variant="outlined"
              select
              onChange={formik.handleChange}
              value={formik.values.country}
              error={Boolean(
                formik.errors.country && formik.touched.country
              )}
            >
              {Country.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {!!formik.errors.country && formik.touched.country && (
              <FormHelperText sx={{ml:1}} error id="country">
                {formik.errors.country}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={6}>
            <OutlinedInput
              sx={{ m:1 }}
              fullWidth
              placeholder="Address Line 2"
              id="address2"
              name="address2"
              onChange={formik.handleChange}
              value={formik.values.address2}
              error={Boolean(
                formik.errors.address2 && formik.touched.address2
              )}
            />
            {!!formik.errors.address2 && formik.touched.address2 && (
              <FormHelperText sx={{ml:1}} error id="address2">
                {formik.errors.address2}
              </FormHelperText>
            )}
            <TextField
              sx={{ m:1 }}
              fullWidth
              label="State"
              id="state"
              name="state"
              variant="outlined"
              select
              onChange={formik.handleChange}
              value={formik.values.state}
              error={Boolean(
                formik.errors.state && formik.touched.state
              )}
            >
              {State.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            
            {!!formik.errors.state && formik.touched.state && (
              <FormHelperText sx={{ml:1}} error id="state">
                {formik.errors.state}
              </FormHelperText>
            )}
            <OutlinedInput
              sx={{ m:1 }}
              fullWidth
              placeholder="Pin Code"
              id="pinCode"
              name="pinCode"
              onChange={formik.handleChange}
              value={formik.values.pinCode}
              error={Boolean(
                formik.errors.pinCode && formik.touched.pinCode
              )}
            />
            {!!formik.errors.pinCode && formik.touched.pinCode && (
              <FormHelperText sx={{ml:1}} error id="pinCode">
                {formik.errors.pinCode}
              </FormHelperText>
            )}
            
          </Grid>
        </Grid>
        <Stack direction="row" spacing={2}>
          <Button onClick={() => dispatch(stepCounter(0))} variant="contained">Back</Button>
          <Button type="submit" variant="contained">
            Next
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default AddressDetails;
