import React from 'react'
import "./Contact.css"
import { cell, location, mail } from "../../assets/Index"

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contactbox">
                <div className="footer-center">
                    <div className=' footerbox'>
                        <img src={location} alt="" />
                        <p><span>Sujangarh, Rajasthan , 331502 </span> </p>
                    </div>
                    <br />
                    <div className='footerbox'>
                        <img src={cell} alt="" />
                        <p><span></span> 8441861883</p>
                    </div>
                    <br />
                    <div className='footerbox'>
                        <img src={mail} alt="" />
                        <p>Paramjeetsingh7023@gmail.com</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Contact