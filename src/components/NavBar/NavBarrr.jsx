import React from "react";
import "../NavBar/Navbar.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  IconButton,
  Grid,
  Box,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Dashboard = () => <div>Dashboard</div>;
const Research = () => <div>Research</div>;
const Hierarchy = () => <div>Hierarchy</div>;
const Clients = () => <div>Clients</div>;
const Analysts = () => <div>Analysts</div>;
const ManageBranch = () => <div>Manage Branch</div>;
const ManageUser = () => <div>Manage User</div>;
const AddCategory = () => <div>Add Category</div>;
const HelpPage = () => <div>Help</div>;

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <CardContent>
        <AppBar position="static" color="default">
          <Toolbar>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="none"
              textColor="green"
              sx={{
                ".MuiTabs-flexContainer": {
                  borderBottom: "none",
                },
                ".MuiTab-root": {
                  textDecoration: "none",
                  minWidth: 100,
                  minHeight: 48,
                  textTransform: "capitalize",
                },
                ".Mui-selected": {
                  fontWeight: "bold",
                  color: "green",
                },
              }}
            >
              <Tab label="Dashboard" component={Link} to="/" />
              <Tab label="Research" component={Link} to="/research" />
              <Tab label="Hierarchy" component={Link} to="/hierarchy" />
              <Tab label="Clients" component={Link} to="/clients" />
              <Tab label="Analysts" component={Link} to="/analysts" />
              <Tab
                label="Settings"
                component={Link}
                to="/settings/manageBranch"
              />
              <Tab label="Help" component={Link} to="/help" />
            </Tabs>
            {/* <Box sx={{ flexGrow: 7}} /> This empty box creates space between tabs and icons */}
            {/* <Grid container justifyContent="flex" spacing={2}>
              <Grid item>
                <IconButton  component={Link} to="/search">
                  <SearchIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton  component={Link} to="/notifications">
                  <NotificationsIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton component={Link} to="/profile">
                  <AccountCircleIcon />
                </IconButton>
              </Grid>
            </Grid> */}
          </Toolbar>
        </AppBar>
      </CardContent>
    </Card>
  );
};

const NavBarrr = () => {
  return (
    <Router>
      <div style={{ padding: "1rem" }}>
        <div style={{ position: "relative", zIndex: "9999" }}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left"
              style={{
                position: "absolute",
                left: "125px",
                bottom: "-65px",
                background: "white",
                borderRadius: '10%',
              }}
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </span>
        </div>
        <Navbar />
        <div style={{ marginTop: "1rem" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/research" element={<Research />} />
            <Route path="/hierarchy" element={<Hierarchy />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/analysts" element={<Analysts />} />
            <Route path="/settings/manageBranch" element={<ManageBranch />} />
            <Route path="/settings/manageUser" element={<ManageUser />} />
            <Route path="/settings/addCategory" element={<AddCategory />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default NavBarrr;
