import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

const ThankYou = () => {
  const [allUserData, setAllUserData] = useState();
  const userDetail = useSelector((state) => state.user.userDetail);
  const addressDetail = useSelector((state) => state.user.addressDetails);
  // console.log('---------- userDetail -----------', userDetail);
  // console.log('------------- addressDetail ------------', addressDetail);

  useEffect(() => {
    const userDetails = {
      ...userDetail,
      ...addressDetail,
    };
    setAllUserData(userDetails);
  }, []);

  console.log("----------- allUserData ------------", allUserData);

  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData("FirstName", allUserData?.firstName),
    createData("MiddleName", allUserData?.middleName),
    createData("LastName", allUserData?.lastName),
    createData("MobileNo", allUserData?.mobileNumber),
    createData("Email", allUserData?.email),
    createData("Birthday", allUserData?.birthDate),
    createData("Age", allUserData?.age),
    createData("BloodGroup", allUserData?.bloodGroup),
    createData("Height", allUserData?.height),
    createData("Weight", allUserData?.weight),
    createData("Gender", allUserData?.gender),
    createData("MaritalStatush", allUserData?.maritalStatush),
    createData("AddressLine1", allUserData?.address1),
    createData("AddressLine2", allUserData?.address2),
    createData("City", allUserData?.city),
    createData("State", allUserData?.state),
    createData("Country", allUserData?.country),
    createData("PinCode", allUserData?.pinCode),
  ];

  return (
    <TableContainer component={Paper}>
      <Box sx={{ p:2 }}>
        <Typography sx={{ color: 'green' }} variant="h3">Data added successfully</Typography>
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="left" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ThankYou;
