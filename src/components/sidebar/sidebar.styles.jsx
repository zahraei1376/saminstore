import styled from "styled-components";

export const Sidebar = styled.nav`
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  //   flex: 0 0 18%;
  //   flex: 0 0 18%;
  @media only screen and (max-width: 68.75em) {
    height: auto;
  }
`;

export const SideNav = styled.ul`
  font-size: 1.4rem;
  padding: 1rem 0;
  margin-top: 3.5rem;
  list-style: none;

  @media only screen and (max-width: 68.75em) {
    display: flex;
    margin: 0;
  }
`;

export const Span = styled.span`
  @media only screen and (max-width: 68.75em) {
    margin-top:1rem;
  }
`;

export const SideNavLink = styled.div`
  // &:link,
  // &:visited {
    color: #faf9f9;
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    padding: 1.5rem 3rem;
    position: relative;
    z-index: 10;
    cursor:pointer;
    display: flex;
    align-items: center;
    background-color:${props => props.active ? "#e67e22":"transparent"};

    @media only screen and (max-width: 68.75em) {
      justify-content: center;
      padding: 2rem;
    }

    @media only screen and (max-width: 37.5em) {
      flex-direction: column;
      padding: 1.5rem 0.5rem;
    }
  // }
`;

export const SideNavItem = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 0.3rem;

    @media only screen and (max-width: 68.75em) {
      margin: 0;
    }
  }

  @media only screen and (max-width: 68.75em) {
    flex: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: #e67e22;
    transform: scaleY(0);
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }

  &:hover::before {
    transform: scaleY(1);
    width: 100%;
  }

  &:active::before {
    background-color: #e67e22;
  }
`;
