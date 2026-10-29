import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function Header() {
  return (
    <header className={styles['Header']}>
      <div className="container">
        <div className={styles['HeaderContent']}>
          <Link to="/">
            <img className={styles['Logo']} src="/resilive-logo-light.png" alt="Resilive Logo" />
          </Link>

          <nav>
            <ul>
              <li>
                <a href="#packages">PRODUCTS</a>
              </li>
              <li>
                <a href="#addons">ADD-ONS</a>
              </li>
              <li>
                <a href="#about">WHY RESILIVE</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </nav>

          <a className={styles['HeaderCTA']} data-quote-trigger>GET A QUOTE</a>
        </div>
      </div>
    </header>
  )
}

export default Header
