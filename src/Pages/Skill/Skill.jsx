import React from 'react'
import "./Skill.css"
import { Skillsdata } from '../../data/skilldata'

const Skill = () => {
    return (
        <div className='skills'>
            <h1>Skills</h1>
            <div className="skillbox">
                {
                    Skillsdata.map((item, key) => {
                        return (
                            <div className="back" key={key}>
                                <img src={item.img} alt="" />
                                <h4>{item.name}</h4>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skill