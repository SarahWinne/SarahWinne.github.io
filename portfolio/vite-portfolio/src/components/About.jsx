import javaIcon from '../assets/javaIcon.png'
import pythonIcon from '../assets/pythonIcon.png'
import threeIcons from '../assets/threeIcons.png'
import rIcon from '../assets/rIcon.png'

function About(){
    return <>
    <div id="about">
      <p>Pursuing more practical experience in coding and debugging, as well as 
        experience in various coding languages, cybersecurity 
        concepts, and statistical analyses.</p>
      <h3>Experience with Java, Python, HTML, JavaScript, CSS, and R</h3>

      <section id="icons"> 
        <img src={javaIcon} alt="Java Icon" width="50px" height="50px"/>
        <img src={pythonIcon} alt="Python Icon" width="50px" height="50px"/>
        <img src={threeIcons} alt="Javascript, HTML, and CSS Icons" width="175px" height="50px"/>
        <img src={rIcon} alt="R Icon" width="50px" height="50px"/> </section>
  </div>
    </>
}

export default About