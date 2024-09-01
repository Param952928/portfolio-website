import React, { useEffect, useState } from "react";
import "./Navbar.css";
import "../../App.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";scss
import { Logo, Moon_Black, Light, cross } from "../../assets/Index";
import { menuicon } from "../../assets/Index";

const Navbar = () => {
  const location = useLocation();
  const [isActive, setisActive] = useState(false);
  const [activeCatagaryIndex, setactiveCatagaryIndex] = useState("");

  const [theme, settheme] = useState("darktheme");

  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const changetheme = () => {
    if (theme === "lighttheme") {
      settheme("darktheme");
    } else {
      settheme("lighttheme");
    }
  };

  useEffect(() => {
    const url = location.pathname.slice();
    var extractedText = url.substring(1);
    extractedText
      ? setactiveCatagaryIndex(extractedText + "page")
      : setactiveCatagaryIndex("homepage");
  }, []);
  return (
    <div className="navbar">
      <div className="l-nav">
        <img src={Logo} alt="" />
        <h1
          onClick={(e) => {
            navigate("/");
            setactiveCatagaryIndex("homepage");
          }}
        >
          Paramjeet Singh
        </h1>
      </div>
      <div className="r-nav">
        <ul>
          <li>
            <span
              style={
                activeCatagaryIndex === "homepage"
                  ? { borderBottom: "1px solid var(--black)" }
                  : { borderBottom: "" }
              }
              id="homepage"
              className="homepage"
              onClick={(e) => {
                navigate("/");
                setactiveCatagaryIndex(e.target.id);
              }}
            >
              Home
            </span>
            <span
              style={
                activeCatagaryIndex === "aboutpage"
                  ? { borderBottom: "1px solid var(--black)" }
                  : { borderBottom: "" }
              }
              id="aboutpage"
              onClick={(e) => {
                navigate("/about");
                setactiveCatagaryIndex(e.target.id);
              }}
            >
              About
            </span>
            <span
              style={
                activeCatagaryIndex === "resumepage"
                  ? { borderBottom: "1px solid var(--black)" }
                  : { borderBottom: "" }
              }
              id="resumepage"
              onClick={(e) => {
                navigate("/resume");
                setactiveCatagaryIndex(e.target.id);
              }}
            >
              Resume
            </span>
            <span
              style={
                activeCatagaryIndex === "skillpage"
                  ? { borderBottom: "1px solid var(--black)" }
                  : { borderBottom: "" }
              }
              id="skillpage"
              onClick={(e) => {
                navigate("/skill");
                setactiveCatagaryIndex(e.target.id);
              }}
            >
              Skills
            </span>
            <span
              style={
                activeCatagaryIndex === "contactpage"
                  ? { borderBottom: "1px solid var(--black)" }
                  : { borderBottom: "" }
              }
              id="contactpage"
              onClick={(e) => {
                navigate("/contact");
                setactiveCatagaryIndex(e.target.id);
              }}
            >
              Contact
            </span>
          </li>
        </ul>
        <img
          onClick={() => changetheme()}
          src={theme === "darktheme" ? Light : Moon_Black}
          alt="img not found"
        />
        <img
          className="menu"
          src={menuicon}
          alt=""
          onClick={() => setisActive(!isActive)}
        />
      </div>
      <div className={`flotnav ${isActive ? "active" : ""} `}>
        <img
          className="cross"
          src={cross}
          onClick={() => setisActive(false)}
          alt=""
        />
        <ul>
          <li>
            <span
              className="homepage"
              style={
                activeCatagaryIndex === "homepage"
                  ? { borderBottom: "1px solid var(--black)" }
                  : { borderBottom: "" }
              }
              onClick={(e) => {
                navigate("/");
                setactiveCatagaryIndex("homepage");
                setisActive(false);
              }}
            >
              Home
            </span>
            <span
              onClick={(e) => {
                navigate("/about");
                setactiveCatagaryIndex(e.target.id);
                setisActive(false);
              }}
            >
              About
            </span>
            <span
              onClick={(e) => {
                navigate("/resume");
                setactiveCatagaryIndex(e.target.id);
                setisActive(false);
              }}
            >
              Resume
            </span>
            <span
              onClick={(e) => {
                navigate("/skill");
                setactiveCatagaryIndex(e.target.id);
                setisActive(false);
              }}
            >
              Skills
            </span>
            <span
              onClick={(e) => {
                navigate("/project");
                setactiveCatagaryIndex(e.target.id);
                setisActive(false);
              }}
            >
              Projects
            </span>
            <span
              onClick={(e) => {
                navigate("/contact");
                setactiveCatagaryIndex(e.target.id);
                setisActive(false);
              }}
            >
              Contact
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
