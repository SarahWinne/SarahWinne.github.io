import Project from './Project'
import InnovationCloud from '../assets/InnovationCloud.png'
import FutureOfCars from '../assets/FutureOfCars.png'
import AncientArch from '../assets/AncientArch.png'


function Projects(){
    return <>
    <h1 id='projectTitle' align="left">Projects</h1>
    <div id="projects">
        <main class="row">
          <Project title="Innovation Cloud"
              article="The Innovation Cloud website uses semantic html to organize the webpage. 
              It includes images of a cat, and sizes them using css. 
              It also uses css for the overall design of the website." 
              source="/Users/sarahwinne/Desktop/WebDev/first-day-repo/Week03/innovation-cloud.html"
              image={InnovationCloud}/>
          <Project title="Future of Cars"
              article="The Future of Cars website also uses semantic html, along with images and css. 
                Overall it offers another design layout based on semantic html and css." 
              source="/Users/sarahwinne/Desktop/WebDev/first-day-repo/Week04/the-future-of-cars/the-future-of-cars.html"
              image={FutureOfCars}/>
          <Project title="Ancient Architecture"
              article="The Ancient Architecture website also uses semantic html in yet another layout. 
                It offers various articles, where images, text, and options for comments and likes can be placed. 
                There is also css formatting used to design this website." 
              source="/Users/sarahwinne/Desktop/WebDev/first-day-repo/Week04/CSS-Lab-Activity-W04/Task2_AncientArchitecture/ancient-architecture.html"
              image={AncientArch}/>              
        </main>
    </div>
    </>
}

export default Projects