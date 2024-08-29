import React, { useEffect, useState } from 'react'
import { Paramjeet_Resume } from "../../assets/Index"
import "./Resume.css"
import { client } from '../../Client'


const Resume = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        const query = '*[_type == "pdfupload"]';
        client.fetch(query).then((data) => setdata(data));
    }, []);

    return (
        <div className='resume'>
            <object data={Paramjeet_Resume} type="application/pdf" width="100%" height="100%" >
            </object>
        </div >
    )
}

export default Resume