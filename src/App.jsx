import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material'

const data = {
  'data': [
    { name: 'MoosePage1', path: 'moose/modules/doc/content/index.md', 'key_vals': { 'key1': 'val1', 'keya': 'val' } },
    { name: 'MoosePage2', path: 'moose/modules/heat_conduction/doc/content/modules/heat_conduction/index.md', 'key_vals': { 'keyheat': 'valheat', 'key': 'val', 'key1': 'val1' } },
    { name: 'MoosePage3', path: 'moose/modules/level_set/doc/content/modules/level_set/example_vortex.md', 'key_vals': { 'keyvor': 'valvor', 'key': 'val', 'key1': 'val1' } },
    { name: 'MoosePage4', path: 'moose/modules/geochemistry/doc/content/modules/geochemistry/index.md', 'key_vals': { 'keyg': 'valg', 'keychem': 'valuechem' } },
    { name: 'MoosePage5', path: 'moose/modules/doc/content/index2.md', 'key_vals': { 'key1': 'val1', 'keya': 'val', 'thing1': 'thing2' } }
  ]
}

function App() {

  return <Drawer
    anchor={'left'}
    open={true}
  >
    <List>
      {data.data.map((row) => (
        <ListItem>
          {row.name}
        </ListItem>))
      }
    </List>
  </Drawer>
}

export default App
