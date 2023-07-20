import React from "react";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';

export const MenuItems = (
    <React.Fragment>
        {/* Dashboard to Katas Button */}
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
        </ListItemButton>
        <ListItemText primary="Katas" />
        {/* Users */}
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
        </ListItemButton>
        <ListItemText primary="Users" />
        {/* Ranking */}
        <ListItemButton>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
        </ListItemButton>
        <ListItemText primary="Ranking" />
    </React.Fragment>
)