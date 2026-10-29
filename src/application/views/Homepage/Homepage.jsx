import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

function Homepage() {
  const [date, setDate] = useState(new Date().toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }))

  const [selectedPackage, setSelectedPackage] = useState('starter');
  const [estimatorData, setEstimatorData] = useState({
    selectedPackage: 'starter',
    totalPrice: '₦640,000',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
      }))
    }, 1000)

    return () => clearInterval(interval)
  }, []);

  return (
    <div className={styles['Homepage']}>
      <section className={styles['Hero']}>
        <div className={styles['HeroGrid']} />

        <div className={styles['HeroImage']}>
          <div className={styles['HeroImageOverlay']} />
          <img src="/homepage-hero-bg.jpg" alt="Resilive Hero" />
          <div className={styles['HeroImageContent']}>
            <h4>
              <span />
              REC
            </h4>

            <h4>
              CAM 01 -
              {date}
            </h4>
          </div>
        </div>

        <div className={styles['HeroContent']}>
          <div className="container">
            <div className={styles['HeroContentInner']}>
              <div className={styles['HeroContentLeft']}>
                <h5>
                  <span />
                  PROFESSIONAL CCTV INSTALLERS IN LAGOS, NIGERIA
                </h5>

                <h1>
                  See Everything.
                  <br />
                  <span>Miss Nothing.</span>
                </h1>

                <p>
                  Professional CCTV installation for homes, businesses, and estates. Resilive delivers end-to-end surveillance solutions built to last.
                </p>

                <div className={styles['HeroContentCTA']}>
                  <button data-quote-trigger>GET A QUOTE</button>
                  <a href="#packages">VIEW PACKAGES</a>
                </div>

                <ul className={styles['HeroContentDetails']}>
                  <li>
                    <h3>
                      4-32
                    </h3>
                    <p>CAMERA OPTIONS</p>
                  </li>
                  <li>
                    <h3>
                      100%
                    </h3>
                    <p>IN-HOUSE INSTALL</p>
                  </li>
                  <li>
                    <h3>
                      24/7
                    </h3>
                    <p>LIVE MONITORING</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['WhyResilive']} id="about">
        <div className="container">
          <div className={styles['WhyResiliveContent']}>
            <div className={styles['WhyResiliveContentHeader']}>
              <div>
                <h6>
                  <span />
                  WHY RESILIVE?
                </h6>

                <h2>
                  Built for serious security.
                  <br />
                  Delivered with care.
                </h2>
              </div>

              <p>
                We don't just sell cameras. We design, install, and support standard surveillance systems — from single homes to large commercial facilities.
              </p>
            </div>

            <ul>
              <li>
                <div>

                </div>

                <h3>24/7 Surveillance</h3>
                <p>
                  Round-the-clock monitoring with high-resolution cameras engineered for clarity in any lighting condition.
                </p>
              </li>

              <li>
                <div>

                </div>

                <h3>Trusted Installation</h3>
                <p>
                  Our certified engineers handle every installation end-to-end — no third parties, no shortcuts.
                </p>
              </li>

              <li>
                <div>

                </div>

                <h3>Local DVR Storage</h3>
                <p>
                  Footage stored on-site on high-capacity hard drives. No cloud dependency, no monthly fees.
                </p>
              </li>

              <li>
                <div>

                </div>

                <h3>Remote Access</h3>
                <p>
                  Optional modem configuration lets you view your cameras from anywhere via mobile or desktop.
                </p>
              </li>

              <li>
                <div>

                </div>

                <h3>Scalable Systems</h3>
                <p>
                  Start with 4 cameras and scale to 32. Our architecture grows with your security needs.
                </p>
              </li>

              <li>
                <div>

                </div>

                <h3>Dedicated Support</h3>
                <p>
                  Post-installation support you can actually reach. We stay on-call so your system stays live.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles['Packages']} id="packages">
        <div className="container">
          <div className={styles['PackagesContent']}>
            <div className={styles['PackagesContentHeader']}>
              <div>
                <h6>
                  <span />
                  CAMERA KITS
                </h6>

                <h2>
                  Packages for every scale.
                </h2>
              </div>

              <p>
                Each kit includes cameras, DVR, cabling, power supply, PVC conduit, and professional installation. All components, all covered.
              </p>
            </div>

            <div className={styles['PackagesContentMain']}>
              <div className={styles['PackagesContentSelector']}>
                <button onClick={() => setSelectedPackage('lite')} type="button" className={selectedPackage === 'lite' ? styles['PackagesContentSelectorActive'] : ''}>Lite Kit</button>
                <button onClick={() => setSelectedPackage('starter')} type="button" className={selectedPackage === 'starter' ? styles['PackagesContentSelectorActive'] : ''}>Starter Kit</button>
                <button onClick={() => setSelectedPackage('standard')} type="button" className={selectedPackage === 'standard' ? styles['PackagesContentSelectorActive'] : ''}>Standard Kit</button>
                <button onClick={() => setSelectedPackage('essential')} type="button" className={selectedPackage === 'essential' ? styles['PackagesContentSelectorActive'] : ''}>Essential Kit</button>
              </div>

              <div className={styles['PackagesContentDetails']}>
                {
                  selectedPackage === 'lite' && (
                    <div className={styles['PackageDetails']}>
                      <div className={styles['PackageDetailsLeft']}>
                        <h2>Lite Kit</h2>

                        <ul>
                          <li>
                            <span />
                            <p>4 Cameras</p>
                            <p>₦44,000 – ₦72,000</p>
                          </li>
                          <li>
                            <span />
                            <p>BNC Connectors</p>
                            <p>₦1,600 – ₦2,000</p>
                          </li>
                          <li>
                            <span />
                            <p>Power Plugs</p>
                            <p>₦1,600 – ₦2,000</p>
                          </li>
                          <li>
                            <span />
                            <p>4-Channel DVR</p>
                            <p>₦65,000</p>
                          </li>
                          <li>
                            <span />
                            <p>4-Channel Power Supply</p>
                            <p>₦20,000</p>
                          </li>
                          <li>
                            <span />
                            <p>PVC Boxes</p>
                            <p>₦3,200 – ₦4,000</p>
                          </li>
                          <li>
                            <span />
                            <p>Cable</p>
                            <p>₦60,000 – ₦70,000</p>
                          </li>
                          <li>
                            <span />
                            <p>1TB Hard Drive</p>
                            <p>₦40,000</p>
                          </li>
                        </ul>
                      </div>

                      <div className={styles['PackageDetailsRight']}>
                        <p>
                          PACKAGE PRICING
                        </p>

                        <div>
                          <h2>₦375,000</h2>
                          <p>Full package price</p>
                        </div>

                        <ul>
                          <li>
                            <p>Hardware (min)</p>
                            <p>₦235,400</p>
                          </li>
                          <li>
                            <p>Hardware (max)</p>
                            <p>₦275,000</p>
                          </li>
                          <li>
                            <p>Installation</p>
                            <p>₦50,000 – ₦100,000</p>
                          </li>
                        </ul>

                        <hr />

                        <div className={styles['PackageDetailsRightNote']}>
                          <h6>Enquire for custom pricing</h6>
                          <p>Every project is quoted to site conditions</p>
                        </div>

                        <button>SELECT THIS PACKAGE</button>
                      </div>
                    </div>
                  )
                }

                {
                  selectedPackage === 'starter' && (
                    <div className={styles['PackageDetails']}>
                      <div className={styles['PackageDetailsLeft']}>
                        <h2>Starter Kit</h2>

                        <ul>
                          <li>
                            <span />
                            <p>8 Cameras</p>
                            <p>₦88,000 – ₦144,000</p>
                          </li>
                          <li>
                            <span />
                            <p>BNC Connectors</p>
                            <p>₦3,200 – ₦4,000</p>
                          </li>
                          <li>
                            <span />
                            <p>Power Plugs</p>
                            <p>₦3,200 – ₦4,000</p>
                          </li>
                          <li>
                            <span />
                            <p>8-Channel DVR</p>
                            <p>₦70,000</p>
                          </li>
                          <li>
                            <span />
                            <p>8-Channel Power Supply</p>
                            <p>₦30,000</p>
                          </li>
                          <li>
                            <span />
                            <p>PVC Boxes</p>
                            <p>₦6,400 – ₦8,000</p>
                          </li>
                          <li>
                            <span />
                            <p>Cable</p>
                            <p>₦120,000 – ₦140,000</p>
                          </li>
                          <li>
                            <span />
                            <p>1TB Hard Drive</p>
                            <p>₦40,000</p>
                          </li>
                        </ul>
                      </div>

                      <div className={styles['PackageDetailsRight']}>
                        <p>
                          PACKAGE PRICING
                        </p>

                        <div>
                          <h2>₦640,000</h2>
                          <p>Full package price</p>
                        </div>

                        <ul>
                          <li>
                            <p>Hardware (min)</p>
                            <p>₦360,800</p>
                          </li>
                          <li>
                            <p>Hardware (max)</p>
                            <p>₦440,000</p>
                          </li>
                          <li>
                            <p>Installation</p>
                            <p>₦100,000 – ₦200,000</p>
                          </li>
                        </ul>

                        <hr />

                        <div className={styles['PackageDetailsRightNote']}>
                          <h6>Enquire for custom pricing</h6>
                          <p>Every project is quoted to site conditions</p>
                        </div>

                        <button>SELECT THIS PACKAGE</button>
                      </div>
                    </div>
                  )
                }

                {
                  selectedPackage === 'standard' && (
                    <div className={styles['PackageDetails']}>
                      <div className={styles['PackageDetailsLeft']}>
                        <h2>Standard Kit</h2>

                        <ul>
                          <li>
                            <span />
                            <p>16 Cameras</p>
                            <p>₦176,000 – ₦288,000</p>
                          </li>
                          <li>
                            <span />
                            <p>BNC Connectors</p>
                            <p>₦6,400 – ₦8,000</p>
                          </li>
                          <li>
                            <span />
                            <p>Power Plugs</p>
                            <p>₦6,400 – ₦8,000</p>
                          </li>
                          <li>
                            <span />
                            <p>16-Channel DVR</p>
                            <p>₦120,000</p>
                          </li>
                          <li>
                            <span />
                            <p>16-Channel Power Supply</p>
                            <p>₦45,000</p>
                          </li>
                          <li>
                            <span />
                            <p>PVC Boxes</p>
                            <p>₦12,800 – ₦16,000</p>
                          </li>
                          <li>
                            <span />
                            <p>Cable</p>
                            <p>₦240,000 – ₦280,000</p>
                          </li>
                          <li>
                            <span />
                            <p>1TB Hard Drive</p>
                            <p>₦40,000</p>
                          </li>
                        </ul>
                      </div>

                      <div className={styles['PackageDetailsRight']}>
                        <p>
                          PACKAGE PRICING
                        </p>

                        <div>
                          <h2>₦1,205,000</h2>
                          <p>Full package price</p>
                        </div>

                        <ul>
                          <li>
                            <p>Hardware (min)</p>
                            <p>₦646,600</p>
                          </li>
                          <li>
                            <p>Hardware (max)</p>
                            <p>₦805,000</p>
                          </li>
                          <li>
                            <p>Installation</p>
                            <p>₦200,000 – ₦400,000</p>
                          </li>
                        </ul>

                        <hr />

                        <div className={styles['PackageDetailsRightNote']}>
                          <h6>Enquire for custom pricing</h6>
                          <p>Every project is quoted to site conditions</p>
                        </div>

                        <button>SELECT THIS PACKAGE</button>
                      </div>
                    </div>
                  )
                }

                {
                  selectedPackage === 'essential' && (
                    <div className={styles['PackageDetails']}>
                      <div className={styles['PackageDetailsLeft']}>
                        <h2>Essential Kit</h2>

                        <ul>
                          <li>
                            <span />
                            <p>32 Cameras</p>
                            <p>₦352,000 – ₦576,000</p>
                          </li>
                          <li>
                            <span />
                            <p>BNC Connectors</p>
                            <p>₦12,800 – ₦16,000</p>
                          </li>
                          <li>
                            <span />
                            <p>Power Plugs</p>
                            <p>₦12,800 – ₦16,000</p>
                          </li>
                          <li>
                            <span />
                            <p>32-Channel DVR</p>
                            <p>₦550,000</p>
                          </li>
                          <li>
                            <span />
                            <p>32-Channel Power Supply</p>
                            <p>₦90,000</p>
                          </li>
                          <li>
                            <span />
                            <p>PVC Boxes</p>
                            <p>₦25,600 – ₦32,000</p>
                          </li>
                          <li>
                            <span />
                            <p>Cable</p>
                            <p>₦480,000 – ₦560,000</p>
                          </li>
                          <li>
                            <span />
                            <p>1TB Hard Drive</p>
                            <p>₦40,000</p>
                          </li>
                        </ul>
                      </div>

                      <div className={styles['PackageDetailsRight']}>
                        <p>
                          PACKAGE PRICING
                        </p>

                        <div>
                          <h2>₦2,680,000</h2>
                          <p>Full package price</p>
                        </div>

                        <ul>
                          <li>
                            <p>Hardware (min)</p>
                            <p>₦1,563,200</p>
                          </li>
                          <li>
                            <p>Hardware (max)</p>
                            <p>₦1,880,000</p>
                          </li>
                          <li>
                            <p>Installation</p>
                            <p>₦400,000 – ₦800,000</p>
                          </li>
                        </ul>

                        <hr />

                        <div className={styles['PackageDetailsRightNote']}>
                          <h6>Enquire for custom pricing</h6>
                          <p>Every project is quoted to site conditions</p>
                        </div>

                        <button>SELECT THIS PACKAGE</button>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['Estimator']} id="estimate">
        <div className="container">
          <div className={styles['EstimatorContent']}>
            <div className={styles['EstimatorContentHeader']}>
              <div>
                <h6>
                  <span />
                  INTERACTIVE COST ESTIMATOR
                </h6>

                <h2>
                  Plan your security budget.
                </h2>
              </div>

              <p>
                Configure a system and see a live budget estimate. Add extra cable for longer runs, then send us your selection for a site-specific quote.
              </p>
            </div>

            <div className={styles['EstimatorContentMain']}>
              <div className={styles['EstimatorContentMainLeft']}>
                <div className={styles['EstimatorCameraSelector']}>
                  <div className={styles['EstimatorCameraSelectorHeader']}>
                    <h4>Choose a camera kit</h4>
                    <p>01 / 05</p>
                  </div>
                  <ul>
                    <li>
                      <button>
                        <h5>Lite</h5>
                        <p>4 cameras</p>
                      </button>
                    </li>
                    <li>
                      <button>
                        <h5>Starter</h5>
                        <p>8 cameras</p>
                      </button>
                    </li>
                    <li>
                      <button>
                        <h5>Standard</h5>
                        <p>16 cameras</p>
                      </button>
                    </li>
                    <li>
                      <button>
                        <h5>Essential</h5>
                        <p>32 cameras</p>
                      </button>
                    </li>
                  </ul>
                </div>

                <div className={styles['EstimatorOptionsGroup']}>
                  <div className={styles['EstimatorOptions']}>
                    <div>
                      <h5>Storage</h5>
                      <p>02 / 05</p>
                    </div>

                    <select>
                      <option value="1TB">1TB — Included</option>
                      <option value="2TB">2TB — +₦40,000</option>
                      <option value="3TB">3TB — +₦70,000</option>
                      <option value="4TB">4TB — +₦160,000</option>
                    </select>
                  </div>

                  <div className={styles['EstimatorOptions']}>
                    <div>
                      <h5>Display</h5>
                      <p>03 / 05</p>
                    </div>

                    <select>
                      <option value="none">No display</option>
                      <option value="32">32" Television — ₦200,000</option>
                      <option value="43">43" Television — ₦350,000</option>
                      <option value="50">50" Television — ₦460,000</option>
                    </select>
                  </div>
                </div>

                <div className={styles['EstimatorOptionsGroup']}>
                  <div className={styles['EstimatorOptions']}>
                    <div>
                      <h5>Additional cable</h5>
                      <p>04 / 05</p>
                    </div>

                    <div className={styles['EstimatorInput']}>
                      <input min="0" type="number" placeholder="0" defaultValue={0} />
                      <p>meters</p>
                    </div>
                  </div>

                  <div className={styles['EstimatorOptions']}>
                    <div>
                      <h5>Remote viewing</h5>
                      <p>05 / 05</p>
                    </div>

                    <select>
                      <option value="none">No remote viewing</option>
                      <option value="setup">Setup — +₦50,000</option>
                      <option value="modem-setup">Modem and Setup — +₦150,000</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={styles['EstimatorContentMainRight']}>
                <div className={styles['EstimatorContentMainRightHeader']}>
                  <h6>YOUR ESTIMATE</h6>
                  <p>LIVE</p>
                </div>

                <hr />

                <ul className={styles['EstimatorContentMainRightDetails']}>
                  <li>
                    <p>
                      {estimatorData.selectedPackage} package
                    </p>
                    <p>
                      {estimatorData.totalPrice}
                    </p>
                  </li>
                </ul>

                <hr />


                <div className={styles['EstimatorContentMainRightTotal']}>
                  <h6>ESTIMATED TOTAL</h6>
                  <h2>{estimatorData.totalPrice}</h2>

                  <p>
                    Planning estimate only. Final pricing is confirmed after a site assessment and may vary with installation conditions.
                  </p>
                </div>

                <button>
                  GET THIS QUOTE
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['AddOns']} id="addons">
        <div className="container">
          <div className={styles['AddOnsContent']}>
            <div className={styles['AddOnsContentHeader']}>
              <div>
                <h6>
                  <span />
                  ADD-ONS & UPGRADES
                </h6>

                <h2>
                  Extend your system.
                </h2>
              </div>
            </div>

            <ul className={styles['AddOnsContentMain']}>
              <li>
                <div>

                </div>

                <div>
                  <h4>Remote Access</h4>
                  <p>
                    Modem supply, configuration, and remote viewing setup so you can monitor your property from anywhere.
                  </p>
                </div>

                <div>
                  <h5>from ₦150,000</h5>
                  <p>Includes modem & configuration</p>
                </div>
              </li>

              <li>
                <div>

                </div>

                <div>
                  <h4>Display Monitor</h4>
                  <p>
                    Dedicated TV display for your surveillance station, delivered and mounted with your system.
                  </p>
                </div>

                <div>
                  <ul className={styles['AddOnsContentMainOptions']}>
                    <li>
                      <p>32" Television</p>
                      <p>₦200,000</p>
                    </li>
                    <li>
                      <p>43" Television</p>
                      <p>₦350,000</p>
                    </li>
                    <li>
                      <p>50" Television</p>
                      <p>₦460,000</p>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <div>

                </div>

                <div>
                  <h4>Storage Upgrade</h4>
                  <p>
                    All kits ship with a 1TB drive. Upgrade for longer retention and more recording history.
                  </p>
                </div>

                <div>
                  <ul className={styles['AddOnsContentMainOptions']}>
                    <li>
                      <p>
                        1TB <span>default</span>
                      </p>
                      <p>Included</p>
                    </li>
                    <li>
                      <p>2TB</p>
                      <p>+₦40,000</p>
                    </li>
                    <li>
                      <p>3TB</p>
                      <p>+₦75,000</p>
                    </li>
                    <li>
                      <p>4TB</p>
                      <p>+₦160,000</p>
                    </li>
                  </ul>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </section>

      <section className={styles['CTACard']} id="contact">
        <div className="container">
          <div className={styles['CTACardContent']}>
            <div className={styles['CTACardContentLeft']}>
              <h2>
                Professional installation. Guaranteed performance. Local support.
              </h2>

              <p>
                Resilive provides professional CCTV solutions for homes, businesses, and estates. We handle every job in-house — from site assessment to final commissioning — so there's one team accountable from start to finish.
              </p>
            </div>

            <button onClick={() => Tawk_API.maximize()}>
              TALK TO US
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
