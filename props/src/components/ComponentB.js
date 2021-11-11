import React from "react";

function ComponentB ({img,title,link}){
    return(
        <div className="project">
         <img className="image" src={img} alt="" />
            <p>{title}</p>
            <a href={link}>button</a>
        </div>
    )
}

export default ComponentB