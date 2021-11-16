import React from 'react'
import './Home.css'

function Home() {
    const [value,setValue] = React.useState("")
    return (
        <div className='home'>
             <div className="home__text">
       <h1> -I'M CHANDAN PATEL.</h1>
            <p>WEB DEVELOPER</p>
            <p1>
        I'm a Indian based fullstack developer focused on crafting <br /> 
        clean user‑friendly experiences, I am passionate about building <br />
        excellent software that improves the lives of those around me. 
        </p1>
            </div>
            <h1>{value}</h1>
            <div className="home__left"></div>
           <div className="home__right"></div>
        </div>
    )
}

export default Home
