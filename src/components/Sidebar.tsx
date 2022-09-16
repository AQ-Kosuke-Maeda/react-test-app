import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';

import { SidebarData } from "./SidebarData";
import { SidebarIcon } from "./SidebarIcon";
import { LikeButton } from "./LikeButton";

export const Sidebar = () => {
  return (
    <SSidebar>
      <BrowserRouter>
      <SidebarIcon />
      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li key={key} id={window.location.pathname === value.link ? "active" : ""} className="row" onClick={() => {
              window.location.pathname = value.link;
            }}>
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          )
        })}
      </ul>
      <Routes>
        {/* <Route path="/favorite"><LikeButton /></Route> */}
      </Routes>
      </BrowserRouter>
    </SSidebar>
  );
}

const SSidebar = styled.div`
  height: 100%;
  width: 250px;
  background-color: #2d445d;
`;

const SSidebarList = styled.ul`
  height: auto;
  padding: 0;
  width: 100%;
`;
