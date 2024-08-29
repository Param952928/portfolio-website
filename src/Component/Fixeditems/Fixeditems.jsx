import React from 'react'
import "./Fixeditems.css"
import "../../App.css"
import {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Telegram,
    Twitter,
} from "../../assets/Index"

const Fixeditems = () => {
    return (

        <div className="fixeditem">
            <div className="email">Paramjeetsingh7023@gmail.com</div>
            <div className="platform" >
                <a href="">
                    <img src={Twitter} alt="" />
                </a>
                <a href="https://github.com/Param952928" target="_blank"
                    rel="noreferrer"  >
                    <img src={Github} alt="" />
                </a>
                <a href="www.linkedin.com/in/paramjeet-singh-rathore-b05576183" target="_blank"
                    rel="noreferrer">
                    <img src={Linkedin} alt="" />
                </a>
                <a href="#" target="_blank"
                    rel="noreferrer">
                    <img src={Telegram} alt="" />
                </a>
                <a href="#" target="_blank"
                    rel="noreferrer">
                    <img src={Instagram} alt="" />
                </a>
                <a href="#" target="_blank"
                    rel="noreferrer">
                    <img src={Facebook} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Fixeditems