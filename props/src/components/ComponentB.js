import React from "react";
import PropTypes from 'prop-types';

function ComponentB ({img,title,link}){
    return(
        <div className="project">
         <img className="image" src={img} alt="" />
            <p>{title}</p>
            <a href={link}>button</a>
        </div>
    )
}

ComponentB.propTypes = {
    img: PropTypes.number,
    title: PropTypes.number,
    link: PropTypes.string,
    
}

export default ComponentB;