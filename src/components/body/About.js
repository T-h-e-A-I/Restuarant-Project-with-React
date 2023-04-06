import { useEffect } from "react";
import React from "react";
const About = () => {
    document.title = "About"
    useEffect(() => {
        document.getElementById("about").classList.add("active")
        document.getElementById("contact").classList.remove("active")
        document.getElementById("menu").classList.remove("active")
        document.getElementById("home").classList.remove("active")
    });
    return (
        <div>
        </div>

    );
}
export default About;