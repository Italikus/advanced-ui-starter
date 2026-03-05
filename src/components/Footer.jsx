import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Kontakt</h3>
          <ul>
            <li><a href="mailto:jan@example.com">jan@example.com</a></li>
            <li><a href="tel:+48123456789">+48 123 456 789</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social</h3>
          <ul>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Lokalizacja</h3>
          <p>Warszawa, Polska</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} Jan Kowalski. Wszystkie prawa zastrzeżone.</p>
      </div>
    </footer>
  )
}

export default Footer
