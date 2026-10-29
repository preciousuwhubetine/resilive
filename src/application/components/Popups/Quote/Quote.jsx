import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

function Quote({
  open = false,
  setOpen = () => {},
  onClose = () => {}
}) {
  const [quote, setQuote] = useState({
    package: '',
    step4: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      location: '',
      address: '',
      packageInterest: '',
      notes: ''
    }
  });

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const triggers = document.querySelectorAll('[data-quote-trigger]')

    const handleTriggerClick = (step) => {
      setOpen(true);
      setCurrentStep(step);
    }

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const triggerStep = parseInt(trigger.getAttribute('data-quote-trigger-step')) || 1;
        handleTriggerClick(triggerStep)
      })
    })

    return () => {
      triggers.forEach(trigger => {
        trigger.removeEventListener('click', handleTriggerClick)
      })
    }
  });

  if (!open) return null

  return (
    <div className={styles['Quote']} onClick={onClose}>
      <div className={styles['QuoteContent']} onClick={(e) => e.stopPropagation()}>
        <button className={styles['QuoteClose']} onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles['QuoteLeft']}>
          <img className={styles['Logo']} src="/resilive-logo-light.png" alt="Resilive Logo" />

          <div>
            <h3>Ready to secure your property?</h3>
            <p>
              Share your site details for a tailored estimate. We'll assess your property first, then send a final quote based on the inspection. No obligation, no pushy sales.
            </p>
          </div>

          <ul>
            <li>
              <h6>01</h6>
              <div>
                <h6>Choose your package and add-ons</h6>
                <p>Select the camera kit, storage, display and viewing options you need.</p>
              </div>
            </li>
            <li>
              <h6>02</h6>
              <div>
                <h6>Site visit</h6>
                <p>We assess your property and requirements.</p>
              </div>
            </li>
            <li>
              <h6>03</h6>
              <div>
                <h6>Final quote</h6>
                <p>We send a confirmed quote after inspection.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles['QuoteRight']}>
          {
            currentStep == 1 && (
              <div className={styles['QuoteStep1']}>
                <div className={styles['QuoteStep1Header']}>
                  <h3>Choose a Camera Kit</h3>
                  <p>Start with the coverage level that best fits your property.</p>
                </div>

                <ul className={styles['QuoteStep1Kits']}>
                  <li>
                    <button className={quote.package === 'lite' ? styles['Active'] : ''} onClick={() => {setQuote({...quote, package: 'lite'}); setTimeout(() => setCurrentStep(2), 200)}}>
                      <img />
                      <h6>Lite</h6>
                      <p>4 cameras</p>
                    </button>
                  </li>
                  <li>
                    <button className={quote.package === 'starter' ? styles['Active'] : ''} onClick={() => {setQuote({...quote, package: 'starter'}); setTimeout(() => setCurrentStep(2), 200)}}>
                      <img />
                      <h6>Starter</h6>
                      <p>8 cameras</p>
                    </button>
                  </li>
                  <li>
                    <button className={quote.package === 'standard' ? styles['Active'] : ''} onClick={() => {setQuote({...quote, package: 'standard'}); setTimeout(() => setCurrentStep(2), 200)}}>
                      <img />
                      <h6>Standard</h6>
                      <p>16 cameras</p>
                    </button>
                  </li>
                  <li>
                    <button className={quote.package === 'essential' ? styles['Active'] : ''} onClick={() => {setQuote({...quote, package: 'essential'}); setTimeout(() => setCurrentStep(2), 200)}}>
                      <img />
                      <h6>Essential</h6>
                      <p>32 cameras</p>
                    </button>
                  </li>
                </ul>

                <hr />

                <p className={styles['QuoteDisclaimer']}>
                  After submission, a Resilive representative will contact you by email or phone. We’ll send an estimated quote before inspection, then confirm the final quote after the inspection is complete. Your information is used only to prepare your enquiry and tailored quote.
                </p>
              </div>
            )
          }

          {
            currentStep == 4 && (
              <div className={styles['QuoteStep4']}>
                <div className={styles['QuoteStep4Header']}>
                  <h3>Get a free quote</h3>
                  <p>Tell us how to reach you and a little about the property.</p>
                </div>

                <div className={styles['QuoteStep4Notice']}>
                  <h6>CURRENT SERVICE AREAS</h6>
                  <p>We currently serve Alimosho, Lagos Mainland, Ikeja and Ojo LGAs.</p>
                </div>

                <form className={styles['QuoteStep4Form']} onSubmit={(e) => {
                  e.preventDefault()
                  // Handle form submission for step 2
                }}>
                  <label>
                    <span>First Name</span>
                    <input value={quote.step4.firstName} onChange={(e) => setQuote({...quote, step4: {...quote.step4, firstName: e.target.value}})} required type="text" placeholder="Emeka" />
                  </label>

                  <label>
                    <span>Last Name</span>
                    <input value={quote.step4.lastName} onChange={(e) => setQuote({...quote, step4: {...quote.step4, lastName: e.target.value}})} required type="text" placeholder="Okonkwo" />
                  </label>

                  <label>
                    <span>Phone</span>
                    <input value={quote.step4.phone} onChange={(e) => setQuote({...quote, step4: {...quote.step4, phone: e.target.value}})} required type="text" placeholder="08012345678" />
                  </label>

                  <label>
                    <span>Email</span>
                    <input value={quote.step4.email} onChange={(e) => setQuote({...quote, step4: {...quote.step4, email: e.target.value}})} required type="email" placeholder="emeka.okonkwo@gmail.com" />
                  </label>

                  <label className={styles['QuoteStep4FormLocation']}>
                    <span>Location / LGA</span>
                    <select value={quote.step4.location} onChange={(e) => setQuote({...quote, step4: {...quote.step4, location: e.target.value}})} required >
                      <option value="">Select an LGA...</option>
                      <option value="alimosho">Alimosho</option>
                      <option value="lagos-mainland">Lagos Mainland</option>
                      <option value="ikeja">Ikeja</option>
                      <option value="ojo">Ojo</option>
                      <option value="agege">Agege</option>
                      <option value="ajeromi-ifelodun">Ajeromi-Ifelodun</option>
                      <option value="amuwo-odofin">Amuwo-Odofin</option>
                      <option value="apapa">Apapa</option>
                      <option value="badagry">Badagry</option>
                      <option value="epe">Epe</option>
                      <option value="eti-osa">Eti-Osa</option>
                      <option value="ibeju-lekki">Ibeju-Lekki</option>
                      <option value="ifako-ijaiye">Ifako-Ijaiye</option>
                      <option value="ikorodu">Ikorodu</option>
                      <option value="kosofe">Kosofe</option>
                      <option value="lagos-island">Lagos Island</option>
                      <option value="mushin">Mushin</option>
                      <option value="oshodi-isolo">Oshodi-Isolo</option>
                      <option value="shomolu">Shomolu</option>
                      <option value="surulere">Surulere</option>
                    </select>

                    {
                      quote.step4.location !== 'alimosho' &&
                      quote.step4.location !== 'lagos-mainland' &&
                      quote.step4.location !== 'ikeja' &&
                      quote.step4.location !== 'ojo' &&
                      quote.step4.location !== '' &&
                      <div className={styles['QuoteStep4FormWarning']}>
                        This LGA is outside our current core service areas. Please complete and submit the form — we’ll call you to confirm whether we can send a team to your area.
                      </div>
                    }
                  </label>

                  <label className={styles['QuoteStep4FormAddress']}>
                    <span>Property Address</span>
                    <input value={quote.step4.address} onChange={(e) => setQuote({...quote, step4: {...quote.step4, address: e.target.value}})} required type="text" placeholder="House number, street, estate, or landmark" />
                  </label>

                  <label className={styles['QuoteStep4FormPackage']}>
                    <span>Package Interest</span>
                    <select required value={quote.step4.packageInterest} onChange={(e) => setQuote({...quote, step4: {...quote.step4, packageInterest: e.target.value}})}>
                      <option value="">Select a kit...</option>
                      <option value="home">Home CCTV</option>
                      <option value="business">Business / Office</option>
                      <option value="factory">Factory / Farm</option>
                      <option value="customm">Custom Project</option>
                    </select>
                  </label>

                  <label className={styles['QuoteStep4FormNotes']}>
                    <span>Additional Notes</span>
                    <textarea value={quote.step4.notes} onChange={(e) => setQuote({...quote, step4: {...quote.step4, notes: e.target.value}})} rows={4} placeholder="Describe your property or any specific requirements..." />
                  </label>

                  <button type="submit" className={styles['QuoteStep4FormSubmit']}>
                    Continue →
                  </button>

                  <p className={styles['QuoteDisclaimer']}>
                    After submission, a Resilive representative will contact you by email or phone. We’ll send an estimated quote before inspection, then confirm the final quote after the inspection is complete. Your information is used only to prepare your enquiry and tailored quote.
                  </p>
                </form>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Quote
