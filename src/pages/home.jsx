import React from "react";
import { Box, Paper, Step, StepLabel, Stepper } from "@mui/material";
import { Container } from "@mui/system";

import UserInformation from "../components/userInformation/UserInformation";
import ThankYou from "../components/thankYou/ThankYo";
import AddressDetails from "../components/AddressDetails/AddressDetail";
import { useSelector } from "react-redux";

const Home = () => {
  const steps = ["USER INFORMATION", "ADDRESS DETAILS", "Thank You"];

  const stepCounts = useSelector((state) => state.user.stepCount);

  return (
    <Container sx={{ p: 5 }}>
      <Box>
        <Paper sx={{ p:2 }}>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={stepCounts} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <Box>
            {
              stepCounts === 0 && <UserInformation />
            }
            {
              stepCounts === 1 && <AddressDetails />
            }
            {
              stepCounts === 2 && <ThankYou/>
            }
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;
