import React from "react";
import { Grid } from 'semantic-ui-react';

function Footer() {
  const lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <Grid stackable className="footer" style={{ padding: 10, margin: 0 }}>
      <Grid.Row>
      <Grid.Column width={4}>
        <h2>Column 1</h2>
        {lorem}
      </Grid.Column>
        <Grid.Column width={4}>
        <h2>Column 2</h2>
        {lorem}
      </Grid.Column>
        <Grid.Column width={4}>
        <h2>Column 3</h2>
        {lorem}
      </Grid.Column>
        <Grid.Column width={4}>
        <h2>Column 4</h2>
        {lorem}
      </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Footer;