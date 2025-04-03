import './Portfolio.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Portfolio() {
  return (
    <div class="Portfolio" data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
      <NavBar/>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Portfolio
