import styled from "styled-components";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { LikeButton } from "./components/LikeButton";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import "./styles.css";
import { Page1DetailA } from "./components/Page1DetailA";
import { Page1DetailB } from "./components/Page1DetailB";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="page1" element={<Page1 />}>
          <Route path="page1/detailA" element={<Page1DetailA />} />
          <Route path="page1/detailB" element={<Page1DetailB />} />
        </Route>
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
    // <SApp>
    //   <Sidebar />
    //   <LikeButton />
    // </SApp>
  );
}

const SApp = styled.div`
  width: 100%;
  height: 100vh;
  font-family: sans-serif;
  display: flex;
`;
