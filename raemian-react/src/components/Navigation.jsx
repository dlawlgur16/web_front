export default function Navigation() {
  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="nav">
      <div className="nav-logo">Raemian <span>Apgujeong</span></div>
      <div className="nav-menu">
        <a href="#heritage" onClick={(e) => handleClick(e, '#heritage')}>Heritage</a>
        <a href="#location" onClick={(e) => handleClick(e, '#location')}>Location</a>
        <a href="#global" onClick={(e) => handleClick(e, '#global')}>Global</a>
        <a href="#trackrecord" onClick={(e) => handleClick(e, '#trackrecord')}>Track Record</a>
        <a href="#vision" onClick={(e) => handleClick(e, '#vision')}>Vision</a>
      </div>
    </nav>
  )
}
