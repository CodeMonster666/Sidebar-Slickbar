import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
// All the svg files
import logo from "../assets/logo.svg";
import Home from "../assets/home-solid.svg";
import Team from "../assets/social.svg";
import Calender from "../assets/sceduled.svg";
import Projects from "../assets/starred.svg";
import Documents from "../assets/draft.svg";
import PowerOff from "../assets/power-off-solid.svg";

const Container = styled.div`
  position: fixed;

  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(205deg)
        brightness(103%) contrast(101%);
    }
  }
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  /* THIS IS WHERE I WANT A BUTTON WITH A RED LIGHT IN THE MIDDLE */
  /* //////////////////////////////// */
  &::before,
  &::after {
    content: "";
    width: 1rem;
    height: 2px;
    background-color: var(--white);
    position: absolute;
    transition: all 0.2s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotated(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotated(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const Logo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`;
const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);

  padding: 2rem 0;

  position: absolute;
  top: 6rem;
  left: 0rem;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

// There is a bug here I cannot style the Navlink or even use the Navlink
const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(205deg)
        brightness(103%) contrast(101%);
    }
  }
  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  padding-left: ${(props) => (props.clicked ? "1.2rem" : "0")};
  overflow: hidden;
  transition: all 0, 3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;

  padding: 0.5rem 1rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};

  background-color: var(--black);
  color: var(--white);
  transition: all 0.3s;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    display: inline-block;
  }

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LogOut = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    filter: invert(14%) sepia(91%) saturate(7263%) hue-rotate(5deg)
      brightness(101%) contrast(116%);

    transition: all 0.3s ease;

    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const Sidebar = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  // The Profile Sidebar
  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);
  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}>
        Click
      </Button>
      <SidebarContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <SlickBar clicked={click}>
          <Router>
            <Item exact activeClassName="active" to="/">
              <img src={Home} alt="Home" />

              <Text clicked={click}>Home</Text>
            </Item>
            <Item activeClassName="active" to="/team">
              <img src={Team} alt="Team" />
              <Text clicked={click}>Team</Text>
            </Item>
            <Item activeClassName="active" to="/calender">
              <img src={Calender} alt="Calender" />
              <Text clicked={click}>Calender</Text>
            </Item>
            <Item activeClassName="active" to="/documents">
              <img src={Documents} alt="Documents" />
              <Text clicked={click}>Documents</Text>
            </Item>
            <Item activeClassName="active" to="/projects">
              <img src={Projects} alt="Projects" />
              <Text clicked={click}>Projects</Text>
            </Item>
          </Router>
        </SlickBar>

        <Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            src="https://picsum.photos/200"
            alt="Profile"
          />
          <Details clicked={profileClick}>
            <Name>
              <h4>Jhon&nbsp;Doe</h4>
              <a href="/#">view&nbsp;profile</a>
            </Name>
            <LogOut>
              <img src={PowerOff} alt="logout" />
            </LogOut>
          </Details>
        </Profile>
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
