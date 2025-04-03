import profile from '../assets/profile.png'

function Header(){
    return <>
    <header id="intro">
      <figure> <img id="profile" src={profile} alt="Profile Picture of Sarah"/></figure>
      <h1>Sarah Winne</h1>
      <p>Computer Science Major at Houghton University, with a concentration in 
        Cybersecurity and Minor in Music Industry.
      </p>
    </header>
    </>
}

export default Header