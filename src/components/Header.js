import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { Grid, Button} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)
    this.goToScreen = this.goToScreen.bind(this);
  }

  goToScreen(screen) {
    this.props.history.push(screen)
  }
  render() {
    console.log(this.props.history.location.pathname)
    return (
      <nav className="menu flex header" >
        <Grid stackable flex verticalAlign="middle">
          <Grid.Column textAlign="left" width={8}>
            <NavLink exact activeClassName="active" to="/">
              <Logo id="logo" />
              <span id="headerText">Talos technical test</span>
            </NavLink>

          </Grid.Column>
          <Grid.Column textAlign="right" width={8}>

            {
              (this.props.history.location.pathname.toLowerCase() !== "\/add") &&

              <div onClick={() => { this.goToScreen("/Add") }}>
                <Button className="addButton">
                  <span id="plusSpan">+</span>
                <span id="addSpan">Add new post</span>
                </Button>
              </div>
            }
          </Grid.Column>
        </Grid>
      </nav>
    );
  }
}
export default withRouter(Header);