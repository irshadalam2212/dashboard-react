import React from "react";
import "../NavBar/Navbar.css";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Card,
  CardContent,
  IconButton,
  Grid,
  Box,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Notifications, Search } from "@mui/icons-material";

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
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Grid container alignItems="center">
              <Grid item xs={2}></Grid>
              <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={4}>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <InputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    startAdornment={
                      <IconButton>
                        <Search style={{ color: "gray" }} />
                      </IconButton>
                    }
                    sx={{
                      backgroundColor: "#f1f3f4",
                      borderRadius: 1,
                      padding: "0 8px",
                      height: 36,
                      marginRight: 2,
                    }}
                  />
                  <IconButton color="inherit">
                    <Badge color="secondary">
                      <Notifications style={{ color: "gray" }} />
                    </Badge>
                  </IconButton>
                  <IconButton color="inherit">
                    <Avatar
                      alt="User Avatar"
                      src="/static/images/avatar/1.jpg"
                    />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </CardContent>
    </Card>
  );
};

const NavBarrr = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
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
