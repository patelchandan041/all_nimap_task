import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import './Project.css'
function Project({img,title,link}) {
   
   
    // console.log(data)
    return (
        <div className='project'>
            <img className="image" src={img} alt="" />
            <p>{title}</p>
            <a href={link}>button</a>
           
        </div>
    )
}

export default Project
