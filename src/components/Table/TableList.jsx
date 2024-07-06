
import React, { useState } from "react";
import {
  Table,
  TableContainer,
  Paper,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TextField,
  Card,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import {
  Download,
  Add,
  FilterListOffRounded,
  RefreshOutlined,
  Edit,
  Delete,
} from "@mui/icons-material";

export const TableList = () => {
  const data = [
    {
      No: 1,
      Segment: "Equity",
      Type: "Cash",
      CategoryName: "Call of duty",
      Leg1Tracking: "1 day 3 hours 20 mins",
      Leg2Tracking: "1 day 6 hours 10 mins",
    },
    {
      no: "2",
      segment: "Equity",
      type: "Cash",
      categoryName: "Call of the Day",
      leg1Tracking: "1 Day, 3 hours 20 mins",
      leg2Tracking: "1 Day, 6 hours 10 mins",
    },
    {
      no: "3",
      segment: "Equity",
      type: "Derivative",
      categoryName: "Futures and options",
      leg1Tracking: "2 Day, 2 hours 15 mins",
      leg2Tracking: "2 Day, 5 hours 50 mins",
    },
    {
      no: "4",
      segment: "Commodity",
      type: "Future",
      categoryName: "Futures and options",
      leg1Tracking: "3 Day, 1 hours 10 mins",
      leg2Tracking: "3 Day, 4 hours 45 mins",
    },
    {
      no: "5",
      segment: "Currency",
      type: "Derivative",
      categoryName: "Cash",
      leg1Tracking: "1 Day, 5 hours 5 mins",
      leg2Tracking: "1 Day, 7 hours 30 mins",
    },
    {
      no: "6",
      segment: "Equity",
      type: "Option",
      categoryName: "Strategy Session",
      leg1Tracking: "2 Day, 3 hours 25 mins",
      leg2Tracking: "2 Day, 6 hours 40 mins",
    },
    {
      no: "7",
      segment: "Commodity",
      type: "Cash",
      categoryName: "Monthly Analysis",
      leg1Tracking: "4 Day, 2 hours 20 mins",
      leg2Tracking: "4 Day, 5 hours 55 mins",
    },
    {
      no: "8",
      segment: "Currency",
      type: "Future",
      categoryName: "Economic Calender",
      leg1Tracking: "3 Day, 1 hours 30 mins",
      leg2Tracking: "3 Day, 5 hours 10 mins",
    },
  ];

  const [dropdown1, setDropdown1] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const [dropdown3, setDropdown3] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleDropdown1Change = (event) => {
    setDropdown1(event.target.value);
  };

  const handleDropdown2Change = (event) => {
    setDropdown2(event.target.value);
  };

  const handleDropdown3Change = (event) => {
    setDropdown3(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) => {
    return (
      (dropdown1 ? item.title === dropdown1 : true) &&
      (dropdown2 ? item.dis === dropdown2 : true) &&
      (dropdown3 ? item.dem2 === dropdown3 : true) &&
      (searchTerm
        ? Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          )
        : true)
    );
  });

  return (
    <Card className="">
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        padding={2}
      >
        <Grid item xs={6}>
          <Typography variant="h5">Category Listing</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <IconButton>
              <Download style={{ color: "green" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <FilterListOffRounded style={{ color: "green" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <Button variant="contained" color="success" startIcon={<Add />}>
              Add Category
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography>Role</Typography>
          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Select value="" onChange={handleDropdown1Change}>
              <MenuItem value="role1">Role 1</MenuItem>
              <MenuItem value="role2">Role 2</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography>Zone</Typography>
          <FormControl fullWidth>
            <InputLabel>Zone</InputLabel>
            <Select value="" onChange={handleDropdown2Change}>
              <MenuItem value="zone2">Zone 1</MenuItem>
              <MenuItem value="zone2">Zone 2</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography>City</Typography>
          <FormControl fullWidth>
            <InputLabel>City</InputLabel>
            <Select value="" onChange={handleDropdown3Change}>
              <MenuItem value="city1">City 1</MenuItem>
              <MenuItem value="city2">City 2</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography>Name</Typography>
          <TextField
            fullWidth
            label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RefreshOutlined
            style={{ color: "green", marginTop: "26px", marginLeft: "10px" }}
          />
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table style={{ padding: "10px" }}>
          <TableHead>
            <TableRow>
              {Object.keys(data[0]).map((key, index) => (
                <TableCell
                  className="bg-[#d3d3d3] text-xl font-bold"
                  key={index}
                >
                  {key}
                </TableCell>
              ))}
              <TableCell className="bg-[#d3d3d3] text-xl font-bold"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item, index) => (
              <TableRow key={index}>
                {Object.values(item).map((value, i) => (
                  <TableCell key={i}>{value}</TableCell>
                ))}
                <TableCell>
                  <IconButton color="primary">
                    <Edit style={{ color: "gray" }} />
                  </IconButton>
                  <IconButton color="secondary">
                    <Delete style={{ color: "gray" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};
