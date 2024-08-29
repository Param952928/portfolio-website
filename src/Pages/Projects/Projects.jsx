import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../../Client'
import "./Projects.css"

const Projects = () => {
    const [prodata, setprodata] = useState([])
    useEffect(() => {
        const query = '*[_type == "project"]';
        client.fetch(query).then((data) => setprodata(data));
    }, []);


    return (
        <div className='project'>
            <h1>Projects</h1>
            {
                prodata.map((data) => {
                    return (
                        <div className="mainbox">
                            <h1>{data.title}</h1>
                            <div className="outerbox">
                                <img src={urlFor(data.image)} alt="" />
                                <div className="proinfo">
                                    <p>{data.desc}</p>
                                </div>
                            </div>
                            <h3><b>Site Host Link :</b> <a target="_blank" style={{ color: "#0B0080 " }}
                                rel="noreferrer" href={data.hostUrl}>{data.hostUrl ? data.hostUrl : "--"}</a>  </h3>
                            <h3><b>GitHub Link :</b> <a target="_blank" style={{ color: "#0B0080 " }}
                                rel="noreferrer" href={data.gitUrl}>{data.gitUrl}</a> </h3>
                        </div>
                    )
                }
                )
            }
        </div >
    )
}

export default Projects