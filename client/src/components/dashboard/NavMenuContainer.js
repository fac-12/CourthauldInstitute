import React, { Component } from "react";
import NavButton from "./NavButton";
import styled from "styled-components";
import { connect } from "react-redux";

const NavMenu = styled.div`
  margin: 1rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;

  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 2.5rem 12rem;
  }
`;

const menuItems = [
  {
    title: "Updates",
    subtitle: "Events, exhibitions, updates and more",
    route: "/updates"
  },
  {
    title: "Discoveries",
    subtitle: "Check out recent finds and post your own",
    route: "/discoveries"
  },
  {
    title: "Book shift",
    subtitle: "Book your next shift on Timecounts",
    route: "/bookShift"
  },
  {
    title: "Directory",
    subtitle: "Learn more about your fellow volunteers",
    route: "/directory"
  },
  {
    title: "Add New User",
    subtitle: "Add a new staff member or volunteer",
    route: "/addNewUser"
  },
  {
    title: "My Profile",
    subtitle: "View and edit your volunteer profile",
    route: "/myProfile"
  },
  {
    title: "Reset Password",
    subtitle: "You still need to reset your password",
    route: "/resetPassword"
  },
  {
    title: "Sign out",
    subtitle: "Go back to the login page",
    route: "/signout"
  }
];

class NavMenuContainer extends Component {
  render() {
    return (
      <NavMenu>
        {menuItems.map(item => (
          <NavButton
            title={item.title}
            subtitle={item.subtitle}
            route={item.route}
            key={item.route}
            userType={this.props.userType}
            resetPassword={this.props.resetPassword}
          />
        ))}
      </NavMenu>
    );
  }
}

const mapStatetoProps = ({ auth }) => ({
  userType: auth.type,
  resetPassword: !auth.pw_reset
});

export default connect(mapStatetoProps, null)(NavMenuContainer);
