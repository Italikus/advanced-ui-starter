import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h1 className="name">Bartłomiej Podlewski - Lab1</h1>
          <p className="title">Web Developer & Designer</p>
        </div>
        <nav className="header-nav">
          <a href="#about">O mnie</a>
          <a href="#skills">Umiejętności</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
