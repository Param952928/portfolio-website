import React, { useEffect } from "react";
import "./App.css";
import Fixeditems from "./Component/Fixeditems/Fixeditems";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./Pages/About/About";
import Resume from "./Pages/Resume/Resume";
import Skill from "./Pages/Skill/Skill";  
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";

const App = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/");
  // }, []);

  return (
    <div className="app">
      <div className="outerdiv">
        <div className="wrapper">
          <Navbar />
          <Fixeditems />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
            <Route path="/skill" element={<Skill />}></Route>
            <Route path="/project" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
