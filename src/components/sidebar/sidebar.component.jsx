import {
  Sidebar,
  SideNav,
  SideNavItem,
  SideNavLink,
  Span,
} from "./sidebar.styles";
import React from "react";
const SideBarStore = ({ searchItem, setSearchItem }) => {
  const onSearchItem = (value) => {
    setSearchItem(value);
  };

  return (
    <Sidebar>
      <SideNav>
        <SideNavItem>
          <SideNavLink
            active={searchItem === "" ? "true" : null}
            onClick={() => {
              onSearchItem("");
            }}
          >
            <i
              className="fa fa-male"
              style={{ fontSize: "2rem", marginRight: "1rem" }}
            ></i>
            <Span>all</Span>
          </SideNavLink>
        </SideNavItem>

        <SideNavItem>
          <SideNavLink
            active={searchItem === "men's clothing" ? "true" : null}
            onClick={() => {
              onSearchItem("men's clothing");
            }}
          >
            <i
              className="fa fa-male"
              style={{ fontSize: "2rem", marginRight: "1rem" }}
            ></i>
            <Span>men's clothing</Span>
          </SideNavLink>
        </SideNavItem>

        <SideNavItem>
          <SideNavLink
            active={searchItem === "jewelery" ? "true" : null}
            onClick={() => {
              onSearchItem("jewelery");
            }}
          >
            <i
              className="fa fa-circle"
              style={{ fontSize: "1.5rem", marginRight: "1rem" }}
            ></i>
            <Span>jewelery</Span>
          </SideNavLink>
        </SideNavItem>

        <SideNavItem>
          <SideNavLink
            active={searchItem === "electronics" ? "true" : null}
            onClick={() => {
              onSearchItem("electronics");
            }}
          >
            <i
              className="fa fa-radiation"
              style={{ fontSize: "2rem", marginRight: "1rem" }}
            ></i>
            <Span>electronics</Span>
          </SideNavLink>
        </SideNavItem>

        <SideNavItem>
          <SideNavLink
            active={searchItem === "women's clothing" ? "true" : null}
            onClick={() => {
              onSearchItem("women's clothing");
            }}
          >
            <i
              className="fa fa-female"
              style={{ fontSize: "2rem", marginRight: "1rem" }}
            ></i>
            <Span>women's cloth</Span>
          </SideNavLink>
        </SideNavItem>
      </SideNav>
    </Sidebar>
  );
};

export default SideBarStore;
