import React from 'react'
import "./home.css"
import {
    Hello,
    Wave,
    Paramjeet_Resume
} from "../../assets/Index"

const Home = () => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(Paramjeet_Resume).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'ParamJeet_Resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className='homediv' >
            <div className="homechild">
                <div className="cvbox">
                    <img src={Hello} alt="" />
                    <h1>I'm <span>Paramjeet Singh</span> <span><img src={Wave} alt="" /></span></h1>
                    <h3>I am a skilled MERN stack developer, proficient in building dynamic web applications using MongoDB, Express, React and Node.js.</h3>
                    <div className="twobutton">
                        <button onClick={onButtonClick}>Download CV</button>
                        <a href="www.linkedin.com/in/paramjeet-singh-rathore-b05576183/" target="_blank"
                            rel="noreferrer">
                            <button className='touchbtn'> Get in Touch!</button>
                        </a>
                    </div>
                </div>
                <div className="profile" ></div>
            </div>
        </div>
    )
}

export default Home