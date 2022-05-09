import React from 'react';
import Biopic from '../../assets/biopic.png';


function About() {
    return(
    <section className="title">
      <h1 class="name">About: Mehmet B Huyuk</h1>
      <hr></hr>
      
      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
            <img class="mb-5" src={Biopic} alt="Mehmet Berat Huyuk"/>
        <p>
           Born and raised in Turkey, living in New York since 2008; I am a Software Engineer/Developer with a degree of BS, Computer Engineering.
        </p>
        <p>
            After a graduation from my university in 2008 and having intership in Telecommunication Industry; I wanted to try different things. Until 2019, I didn't pursue my career in computer science. 
        </p>
        <p>
            In 2021, I joined the Columbia Engineering Coding Bootcamp and expected to graduate by May 2022.
        </p>
        <p>
            Currently working for JP Morgan Chase & Co. in Wilmington, DE as a Software Engineer(CCB). 
        </p>
        
      <p>
            View full <a href="#/resume" class="link">resume</a>
    </p>
      </div>  
      </div>
    </section> 
)}
  
export default About;