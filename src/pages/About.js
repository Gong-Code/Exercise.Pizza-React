import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className='about' >
        <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}>

        </div>
        <div className='aboutBottom'>
            <h1> ABOUT US </h1>
            <p> 
                His followed carriage proposal entrance directly had elegance. 
                Greater for cottage gay parties natural. 
                Remaining he furniture on he discourse suspected perpetual. 
                Power dried her taken place day ought the. Four and our ham west miss. 
                Education shameless who middleton agreement how. 
                We in found world chief is at means weeks smile. 
            </p>
        </div>
    </div>
  )
}

export default About