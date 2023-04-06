import React from "react";
import { Route, Routes } from "react-router";
import Menu from "./Menu";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";


const Body = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home></Home>} />
                <Route path="/about" exact element={<About />} />
                <Route path="/menu" exact element={<Menu />} />
                <Route path="/contact" exact element={<Contact />} />
            </Routes>
        </div>
    );
}
export default Body;