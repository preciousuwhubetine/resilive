import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className={styles['Footer']}>
      <div className="container">
        <div className={styles['FooterContent']}>
          <div className={styles['FooterTop']}>
            <div className={styles['FooterLogo']}>
              <Link to="/">
                <img className={styles['Logo']} src="/resilive-logo-light.png" alt="Resilive Logo" />
              </Link>
              <p>
                CCTV specialists delivering end-to-end surveillance installation for homes, businesses, and estates across Nigeria.
              </p>
              <ul>
                <li>

                </li>
              </ul>
            </div>

            <div className={styles['FooterGroup']}>
              <h5>Services</h5>

              <ul>
                <li>
                  Residential CCTV
                </li>
                <li>
                  Commercial CCTV
                </li>
                <li>
                  Estate Surveillance
                </li>
                <li>
                  DVR & Storage Setup
                </li>
                <li>
                  Remote Access Config
                </li>
                <li>
                  System Maintenance
                </li>
                <li>
                  Camera Upgrades
                </li>
              </ul>
            </div>

            <div className={styles['FooterGroup']}>
              <h5>Packages</h5>

              <ul>
                <li>
                  Resilive Lite
                </li>
                <li>
                  Resilive Starter
                </li>
                <li>
                  Resilive Standard
                </li>
                <li>
                  Resilive Essential
                </li>
                <li>
                  Custom
                </li>
              </ul>

              <hr />

              <h6>ADD-ONS</h6>
              <ul>
                <li>
                  <a href="#addons">
                    Remote Access
                  </a>
                </li>
                <li>
                  <a href="#addons">
                    Display TV
                  </a>
                </li>
                <li>
                  <a href="#addons">
                    Storage Upgrades
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles['FooterGroup']}>
              <h5>Contact</h5>

              <ul className={styles['FooterContact']}>
                <li>
                  Serving clients across Nigeria
                </li>
                <li>
                  <a href="mailto:admin@systemsa.org">admin@systemsa.org</a>
                </li>
                <li>
                  <a href="tel:+2349124187855">+234 912 418 7855</a>
                </li>
                <li>
                  <button data-quote-trigger className={styles['FooterCTA']}>GET A FREE QUOTE</button>
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <div className={styles['FooterBottom']}>
            <div>
              <p>
                &copy; {new Date().getFullYear()} Resilive Systems. All rights reserved.
              </p>

              <div className={styles['FooterBottomDivider']} />

              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
            </div>

            <p>A <a href="https://www.systemsa.org" target="_blank" rel="noopener noreferrer">Systemsa</a> Company </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
