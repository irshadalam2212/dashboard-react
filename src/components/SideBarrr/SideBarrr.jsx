import React, { useState } from "react";
import '../SideBarrr/Silderbar.css';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Help,
  Circle,
  Settings,
  Storage,
  Person,
  PollOutlined,
  DockTwoTone,
  Search,
} from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
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

const menuItems = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/",
  },
  {
    title: "Research",
    icon: <Search />,
    link: "/research",
  },
  {
    title: "Hierarchy",
    icon: <Storage />,
    link: "/hierarchy",
  },
  {
    title: "Clients",
    icon: <Person />,
    link: "/clients",
  },
  {
    title: "Analysts",
    icon: <PollOutlined />,
    link: "/analysts",
  },
  {
    title: "Settings",
    icon: <Settings />,
    dropdown: [
      {
        title: "Manage Branch",
        icon: <DockTwoTone />,
        link: "/settings/manageBranch",
        dot: true,
      },
      {
        title: "Manage User",
        icon: <Settings />,
        link: "/settings/manageUser",
        dot: true,
      },
      {
        title: "Add Category",
        icon: <Settings />,
        link: "/src/components/AddCategory",
        dot: true,
      },
    ],
  },
  {
    title: "Help",
    icon: <Help />,
    link: "/help",
  },
];

const SideBarrr = () => {
  const [openSettings, setOpenSettings] = React.useState(false);
  const [activeItem, setActiveItem] = useState("");

  const handleClick = () => {
    setOpenSettings(!openSettings);
  };

  const handleItemClick = (title) => {
    setActiveItem(title);
  };

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Drawer variant="permanent">
          <List>
            {menuItems.map((item, index) =>
              item.dropdown ? (
                <React.Fragment key={index}>
                  <ListItem button onClick={handleClick}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{
                        color: activeItem === item.title ? 'green' : 'white',
                        '&:hover': {
                          color: 'green',
                        },
                      }}
                    />
                    {openSettings ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={openSettings} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.dropdown.map((subItem, subIndex) => (
                        <ListItem
                          button
                          key={subIndex}
                          component={Link}
                          to={subItem.link}
                          onClick={() => handleItemClick(subItem.title)}
                        >
                          <ListItemIcon>
                            {subItem.dot && (
                              <Circle
                                style={{ fontSize: 10, marginLeft: 20, color: 'green' }}
                              />
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={subItem.title}
                            sx={{
                              color: activeItem === subItem.title ? 'green' : 'white',
                              '&:hover': {
                                color: 'green',
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              ) : (
                <ListItem
                  button
                  key={index}
                  component={Link}
                  to={item.link}
                  onClick={() => handleItemClick(item.title)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{
                      color: activeItem === item.title ? 'green' : 'white',
                      '&:hover': {
                        color: 'green',
                      },
                    }}
                  />
                </ListItem>
              )
            )}
          </List>
        </Drawer>
        <div style={{ marginLeft: 240, padding: "1rem", width: "100%" }}>
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

export default SideBarrr;
