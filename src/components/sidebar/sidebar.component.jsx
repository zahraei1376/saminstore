import {
  Content,
  Sidebar,
  SideNav,
  SideNavItem,
  SideNavLink,
  Span,
} from "./sidebar.styles";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SideBarStore = () => {
  return (
    <Sidebar>
      <SideNav>
        <SideNavItem>
          <SideNavLink href="#">
            <i
              className="fa fa-male"
              style={{ fontSize: "2rem", marginRight: "1rem" }}
            ></i>
            <Span>men's clothing</Span>
          </SideNavLink>
        </SideNavItem>

        <SideNavItem>
          <SideNavLink href="#">
            <i
              className="fa fa-circle"
              style={{ fontSize: "1.5rem", marginRight: "1rem" }}
            ></i>
            <Span>jewelery</Span>
          </SideNavLink>
        </SideNavItem>

        <SideNavItem>
          <SideNavLink href="#">
            <i
              className="fa fa-radiation"
              style={{ fontSize: "2rem", marginRight: "1rem" }}
            ></i>
            <Span>electronics</Span>
          </SideNavLink>
        </SideNavItem>

        <SideNavItem>
          <SideNavLink href="#">
            <FontAwesomeIcon icon={"faHome"} className="mr-2" />
            <i
              className="fa fa-female"
              style={{ fontSize: "2rem", marginRight: "1rem" }}
            ></i>
            <Span>women's clothing</Span>
          </SideNavLink>
        </SideNavItem>
      </SideNav>
      {/* <div class="legal">
                    &copy;2020
                </div> */}
    </Sidebar>
  );
};

export default SideBarStore;
