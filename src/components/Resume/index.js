import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">Resume</h1>
        <hr></hr>

        <div class="justify-content-center mt-5">
        <p>Download My<a href="https://glgberat.github.io/professional-portfolio-react/assets/Resume_MehmetBHuyuk.pdf" class="link">Resume</a>
                <br></br>
        </p>
            <div id="front-back">
                <h2>Front End Experience</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS (Bootstrap, Bulma)</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>React.js</li>
                 </ul>
            
            </div>
    
            <div id="front-back" class="mt-5">
                <h2>Back End Experience</h2>
                <ul>
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>Express.js</li>
                    <li>SQL</li>
                    <li>mySQL</li>
                    <li>Sequelize</li>
                    <li>NoSQL(MongoDB, Mongoose)</li>
                    <li>IndexedDB</li>
                    <li>API's</li>
                    <li>Handlebars</li>
                 </ul>
               
                
            </div>
        </div>
</section>
);
}

export default Resume;