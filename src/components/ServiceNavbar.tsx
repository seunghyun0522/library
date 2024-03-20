import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.ul`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  list-style: none;
  margin-top: 20px;
  border-bottom: 1px solid #a1a1a1;
  padding-bottom: 20px;
`;

const StyledNavItem = styled.li`
  margin: 0 23px;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.id === "logout" ? "white" : "black")};
  background: ${(props) => (props.id === "logout" ? "black" : "none")};
  padding: 10px 25px;
  border-radius: ${(props) => (props.id === "logout" ? "100px" : "0")};
`;

function ServiceNavbar() {
  return (
    <>
      <StyledNavbar>
        <StyledNavItem>
          <NavbarLink to="">내 책</NavbarLink>
          <NavbarLink to="calendar">캘린더</NavbarLink>
          <NavbarLink to="">마이 페이지</NavbarLink>
          <NavbarLink to="/Login" id="logout">
            로그아웃
          </NavbarLink>
        </StyledNavItem>
      </StyledNavbar>
      <Outlet />
    </>
  );
}

export default ServiceNavbar;
