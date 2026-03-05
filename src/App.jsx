import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import './App.css'

function App() {
  const handleDownloadCV = () => {
    alert('Pobieranie CV...')
  }

  const handleContact = () => {
    window.location.href = 'mailto:jan@example.com'
  }

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero" id="about">
          <div className="hero-content">
            <div className="hero-text">
              <h2>Tworzę nowoczesne interfejsy webowe</h2>
              <p>Specjalizuję się w React, JavaScript i projektowaniu responsywnych aplikacji webowych. Passion do czystego kodu i intuicyjnych interfejsów użytkownika.</p>
              <div className="hero-buttons">
                <Button text="Pobierz CV" onClick={handleDownloadCV} variant="primary" size="lg" />
                <Button text="Skontaktuj się" onClick={handleContact} variant="secondary" size="lg" />
              </div>
            </div>
            <div className="hero-image">
              <div className="avatar">JK</div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills" id="skills">
          <h2>Umiejętności</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML/CSS</li>
                <li>Vite</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>REST API</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Narzędzia</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Visual Studio Code</li>
                <li>npm/yarn</li>
                <li>DevTools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio" id="portfolio">
          <h2>Ostatnie projekty</h2>
          <div className="portfolio-grid">
            <div className="portfolio-card">
              <div className="portfolio-image" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}></div>
              <h3>Aplikacja To-Do</h3>
              <p>Zaawansowana aplikacja do zarządzania zadaniami z React i localStorage</p>
              <Button text="Zobacz projekt" variant="outline" size="sm" />
            </div>
            <div className="portfolio-card">
              <div className="portfolio-image" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}></div>
              <h3>E-commerce Platform</h3>
              <p>Platforma handlowa z integracją płatności i systemu zarządzania produktami</p>
              <Button text="Zobacz projekt" variant="outline" size="sm" />
            </div>
            <div className="portfolio-card">
              <div className="portfolio-image" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}></div>
              <h3>Chat Aplikacja</h3>
              <p>Aplikacja czatu real-time z WebSocket i autentykacją użytkownika</p>
              <Button text="Zobacz projekt" variant="outline" size="sm" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
