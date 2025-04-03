import InnovationCloud from '../assets/InnovationCloud.png'
import FutureOfCars from '../assets/FutureOfCars.png'
import AncientArch from '../assets/AncientArch.png'


function Projects(){
    return <>
    <h1 id='projectTitle' align="left">Projects</h1>
    <div id="projects">
        <main class="row">
          <section class="column">
              <figure><img src={InnovationCloud} alt="Innovation Cloud"/></figure>
              <h2><a href="/Users/sarahwinne/Desktop/WebDev/first-day-repo/Week03/innovation-cloud.html">Innovation Cloud</a></h2>
              <p class="article">
                The Innovation Cloud website uses semantic html to organize the webpage. 
                It includes images of a cat, and sizes them using css. 
                It also uses css for the overall design of the website.
              </p>
          </section>
          <section class="column">
              <figure><img src={FutureOfCars} alt="Future of Cars"/></figure>
              <h2><a href="/Users/sarahwinne/Desktop/WebDev/first-day-repo/Week04/the-future-of-cars/the-future-of-cars.html">Future of Cars</a></h2>
              <p class="article">
                The Future of Cars website also uses semantic html, along with images and css. 
                Overall it offers another design layout based on semantic html and css.
              </p>
          </section>
          <section class="column">
              <figure><img src={AncientArch} alt="Ancient Architecture"/></figure>
              <h2><a href="/Users/sarahwinne/Desktop/WebDev/first-day-repo/Week04/CSS-Lab-Activity-W04/Task2_AncientArchitecture/ancient-architecture.html">Ancient Architecture</a> </h2>
              <p class="article">
                The Ancient Architecture website also uses semantic html in yet another layout. 
                It offers various articles, where images, text, and options for comments and likes can be placed. 
                There is also css formatting used to design this website. 
              </p>
          </section>
        </main>
    </div>
    </>
}

export default Projects