import React from 'react'
import './Portfolio.css'
import Project from './Project'

function Portfolio() {
    return (
        <div className='portfolio'>

            <Project img="https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg"
            title="amazone-clone"
            link="https://e-challenge-bb3ad.web.app/"
            />
              
            <Project img="https://cdn3.vectorstock.com/i/1000x1000/02/97/chat-group-logo-design-vector-25620297.jpg"
            title="Group-chat-app"
            link="https://roomchat-7a010.web.app/"
            />
              <Project img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9rxsOO_XIYlp5P9-1Iwys1CbJoMlOPuEMZA&usqp=CAU"
            title="movie-search"
            link="https://movie-76cee.web.app/"
            />
           
           
        </div>
    )
}

export default Portfolio
