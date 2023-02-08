import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { stepCounter, userDetail } from "../../redux/reducer/Reducer";

const UserInformation = () => {
  const dispatch = useDispatch();

  const bloodGroup = [
    {
      value: "A Positive",
      label: "A Positive",
    },
    {
      value: "B Positive",
      label: "B Positive",
    },
  ];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      height: "",
      gender: "",
      middleName: "",
      mobileNumber: "",
      birthDate: "",
      bloodGroup: "",
      weight: "",
      maritalStatush: "",
    },
    validationSchema: yup.object().shape({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().required(),
      age: yup.string().required(),
      height: yup.string().required(),
      gender: yup.string().required(),
      middleName: yup.string().required(),
      mobileNumber: yup.string().required(),
      birthDate: yup.string().required(),
      bloodGroup: yup.string().required(),
      weight: yup.string().required(),
      maritalStatush: yup.string().required(),
    }),
    onSubmit: (values) => {
      dispatch(stepCounter(1));
      dispatch(userDetail(values));
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
              placeholder="First name"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              error={Boolean(
                formik.errors.firstName && formik.touched.firstName
              )}
            />
            {!!formik.errors.firstName && formik.touched.firstName && (
              <FormHelperText sx={{ml:1}} error id="firstName">
                {formik.errors.firstName}
              </FormHelperText>
            )}
            <OutlinedInput
              sx={{ m:1 }}
              fullWidth
              placeholder="Last name"
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={Boolean(formik.errors.lastName && formik.touched.lastName)}
            />
            {!!formik.errors.lastName && formik.touched.firstName && (
              <FormHelperText sx={{ml:1}} error id="firstName">
                {formik.errors.lastName}
              </FormHelperText>
            )}
            <OutlinedInput
              sx={{ m:1 }}
              fullWidth
              placeholder="Email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={Boolean(formik.errors.email && formik.touched.email)}
            />
            {!!formik.errors.email && formik.touched.email && (
              <FormHelperText sx={{ml:1}} error id="email">
                {formik.errors.email}
              </FormHelperText>
            )}
            <OutlinedInput
              sx={{ m:1 }}
              fullWidth
              placeholder="Age"
              id="age"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              error={Boolean(formik.errors.age && formik.touched.age)}
            />
            {!!formik.errors.age && formik.touched.age && (
              <FormHelperText sx={{ml:1}} error id="age">
                {formik.errors.age}
              </FormHelperText>
            )}
            <OutlinedInput
              sx={{ m:1 }} 
              fullWidth
              placeholder="Height"
              id="height"
              name="height"
              onChange={formik.handleChange}
              value={formik.values.height}
              error={Boolean(formik.errors.height && formik.touched.height)}
            />
            {!!formik.errors.height && formik.touched.height && (
              <FormHelperText sx={{ml:1}} error id="height">
                {formik.errors.height}
              </FormHelperText>
            )}
            <FormControl sx={{ m:1 }}>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
                name="gender"
                id="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
              {!!formik.errors.gender && formik.touched.gender && (
                <FormHelperText sx={{ml:1}} error id="gender">
                  {formik.errors.gender}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <OutlinedInput
              sx={{ m:1 }}
              fullWidth
              placeholder="MIddle name"
              id="middleName"
              name="middleName"
              onChange={formik.handleChange}
              value={formik.values.middleName}
              error={Boolean(
                formik.errors.middleName && formik.touched.middleName
              )}
            />
            {!!formik.errors.middleName && formik.touched.middleName && (
              <FormHelperText sx={{ml:1}} error id="middleName">
                {formik.errors.middleName}
              </FormHelperText>
            )}
            <OutlinedInput
              sx={{ m:1 }}
              fullWidth
              placeholder="Mobile No"
              id="mobileNumber"
              name="mobileNumber"
              onChange={formik.handleChange}
              value={formik.values.mobileNumber}
              error={Boolean(
                formik.errors.mobileNumber && formik.touched.mobileNumber
              )}
            />
            {!!formik.errors.mobileNumber && formik.touched.mobileNumber && (
              <FormHelperText sx={{ml:1}} error id="mobileNumber">
                {formik.errors.mobileNumber}
              </FormHelperText>
            )}
            <OutlinedInput
              sx={{ m:1 }}
              fullWidth
              placeholder="BirthDate"
              type="date"
              id="birthDate"
              name="birthDate"
              onChange={formik.handleChange}
              value={formik.values.birthDate}
              error={Boolean(
                formik.errors.birthDate && formik.touched.birthDate
              )}
            />
            {!!formik.errors.birthDate && formik.touched.birthDate && (
              <FormHelperText sx={{ml:1}} error id="email">
                {formik.errors.birthDate}
              </FormHelperText>
            )}
            <TextField
              sx={{ m:1 }}
              fullWidth
              label="Blood Group"
              placeholder="Blood Group"
              id="bloodGroup"
              name="bloodGroup"
              variant="outlined"
              select
              onChange={formik.handleChange}
              value={formik.values.bloodGroup}
              error={Boolean(
                formik.errors.bloodGroup && formik.touched.bloodGroup
              )}
            >
              {bloodGroup.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {!!formik.errors.bloodGroup && formik.touched.bloodGroup && (
              <FormHelperText sx={{ml:1}} error id="bloodGroup">
                {formik.errors.bloodGroup}
              </FormHelperText>
            )}
            <OutlinedInput
              sx={{ m:1 }}
              fullWidth
              placeholder="Weight"
              id="weight"
              name="weight"
              onChange={formik.handleChange}
              value={formik.values.weight}
              error={Boolean(formik.errors.weight && formik.touched.weight)}
            />
            {!!formik.errors.weight && formik.touched.weight && (
              <FormHelperText sx={{ml:1}} error id="weight">
                {formik.errors.weight}
              </FormHelperText>
            )}
            <FormControl sx={{ m:1 }}>
              <FormLabel>Marital Statush</FormLabel>
              <RadioGroup
                row
                name="maritalStatush"
                id="maritalStatush"
                value={formik.values.maritalStatush}
                onChange={formik.handleChange}
              >
                <FormControlLabel
                  value="single"
                  control={<Radio />}
                  label="Single"
                />
                <FormControlLabel
                  value="married"
                  control={<Radio />}
                  label="Married"
                />
                <FormControlLabel
                  value="divorced"
                  control={<Radio />}
                  label="Divorced"
                />
                <FormControlLabel
                  value="widowed"
                  control={<Radio />}
                  label="Widowed"
                />
              </RadioGroup>
              {!!formik.errors.maritalStatush && formik.touched.maritalStatush && (
                <FormHelperText sx={{ml:1}} error id="maritalStatush">
                  {formik.errors.maritalStatush}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" disabled>
            Back
          </Button>
          <Button type="submit" variant="contained">
            Next
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default UserInformation;
