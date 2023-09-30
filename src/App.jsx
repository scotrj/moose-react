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
  Link,
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
      link: "https://www.google.com/",
      key_vals: { keyheat: "valheat", key: "val", key1: "eval" },
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
  const menu_data_arrays = {};
  for (const row of data.data) {
    for (const key in row.key_vals) {
      if (!menu_data_arrays[key]) menu_data_arrays[key] = new Array();

      menu_data_arrays[key].push(row.key_vals[key]);
    }
  }

  // Sort each category alphabetically
  for (const key in menu_data_arrays)
    menu_data_arrays[key].sort()

  // Convert arrays to sets
  const menu_data = {};
  for (const key in menu_data_arrays) {
    menu_data[key] = new Set();
    for (const item of menu_data_arrays[key])
      menu_data[key].add(item);
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
              let found_keys = {};

              // Avoid displaying all results when opening the page
              if (checked_keys.size == 0)
                return false;

              // Keep track of which data entries (row) matched the key/value of the user-selected checked_keyes
              for (const checked_key of checked_keys) {
                const [checked_key_name, checked_key_value] =
                  checked_key.split(":");

                if (row.key_vals[checked_key_name] == checked_key_value)
                  found_keys[checked_key_name] = true;
              }

              // If any of the of the keys were not in the data entry with the right value
              // then exclude the data entry. For that key, it did not have the right value.
              for (const checked_key of checked_keys) {
                const [checked_key_name, checked_key_value] =
                  checked_key.split(":");

                if (!found_keys[checked_key_name]) return false;
              }

              return true;
            })
            .map((row) => (
              <ListItem>
                <Link href={row.link}>{row.name}</Link>
              </ListItem>
            ))}
        </List>
      </Box>
    </Box>
  );
}

export default App;
