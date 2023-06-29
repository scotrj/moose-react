import React from "react";
import { useState } from "react";
import "./App.css";
import {
  AppBar,
  Box,
  Checkbox,
  CssBaseline,
  Drawer,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";

const data = {
  data: [
    {
      name: "MoosePage1",
      path: "moose/modules/doc/content/index.md",
      key_vals: { key1: "aval", keya: "val" },
    },
    {
      name: "MoosePage2",
      path: "moose/modules/heat_conduction/doc/content/modules/heat_conduction/index.md",
      key_vals: { keyheat: "valheat", key: "val", key1: "bval" },
    },
    {
      name: "MoosePage3",
      path: "moose/modules/level_set/doc/content/modules/level_set/example_vortex.md",
      key_vals: { keyvor: "valvor", key: "val", key1: "cval" },
    },
    {
      name: "MoosePage4",
      path: "moose/modules/geochemistry/doc/content/modules/geochemistry/index.md",
      key_vals: { keyg: "valg", keychem: "valuechem" },
    },
    {
      name: "MoosePage5",
      path: "moose/modules/doc/content/index2.md",
      key_vals: { key1: "dval", keya: "val", thing1: "thing2" },
    },
  ],
};

const drawerWidth = 240;

function App() {
  const [checked_keys, setCheckedKeys] = useState(new Set());

  // Build the datastructure for the menu
  const menu_data = {};
  for (const row of data.data) {
    for (const key in row.key_vals) {
      if (!menu_data[key]) menu_data[key] = new Set();

      menu_data[key].add(row.key_vals[key]);
    }
  }

  const handleCheck = (event) => {
    if (event.target.checked) {
      checked_keys.add(event.target.value);
      setCheckedKeys(new Set(checked_keys));
    } else {
      checked_keys.delete(event.target.value);
      setCheckedKeys(new Set(checked_keys));
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Select Tags
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {Object.keys(menu_data).map((key) => (
            <ListItem>
              <FormGroup>
                {key}
                {Array.from(menu_data[key]).map((val) => (
                  <ListItem>
                    <FormControlLabel
                      control={
                        <Checkbox
                          value={`${key}:${val}`}
                          onChange={handleCheck}
                        />
                      }
                      label={val}
                    />
                  </ListItem>
                ))}
              </FormGroup>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "white", p: 3 }}>
        <List>
          {data.data
            .filter((row) => {
              for (const key in row.key_vals)
                if (checked_keys.has(`${key}:${row.key_vals[key]}`))
                  return true;

              return false;
            })
            .map((row) => (
              <ListItem>{row.name}</ListItem>
            ))}
        </List>
      </Box>
    </Box>
  );
}

export default App;
