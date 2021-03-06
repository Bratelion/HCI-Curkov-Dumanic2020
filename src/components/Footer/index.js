import React from 'react'
import styles from './style.module.css'

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

import { navs as navTabs } from '../../constants/const'
import { Link } from 'gatsby'
import logo from '../../images/logo-under.png'

const Footer = () => (
    <footer className={styles.footer}>

        <div className={styles.links}>
            <ul className={styles.navigation}>
                <h4 className={styles.istrazite}>ISTRAŽITE</h4>
                <li>
                    {navTabs.map(({tab, to}, index) => (
                        <Link key={index} to={to}>
                            {tab}<br/>
                        </Link>)
                    )}
                </li>
            </ul>
        </div>
            <br></br>
        <div className={styles.contact}>
        <Link to="/"><img src={logo} className={styles.logoUnder} alt="OPG Tabar"/></Link>
            
            <ul className={styles.address}>
                <li>
                    <FaMapMarkerAlt style={{ marginBottom: '-2px', color: '#6B8B3A' }}/>
                    <span>      Izmisljena ulica, Izmisljen grad</span>
                    </li>
                <li className={styles.phone}>
                <FaPhoneAlt style={{ marginBottom: '-2px', color: '#6B8B3A' }}/>
                    <a href="tel:+385 00 000 0000">      +385 00 000 0000</a>
                </li>
                <li>
                    <FaEnvelope style={{ marginBottom: '-2px', color: '#6B8B3A' }}/>
                    <a href="mailto:info@opgtabar.hr">     info@opgtabar.hr</a>
                </li>
            </ul>
        </div>
        <div className={styles.newsletter}>
            <h4>NEWSLETTER</h4>
            <form>
                <p style={{marginBottom: -5}}>Unesite svoju adresu elektroničke pošte da ne bi propustili novosti.</p>
                <br></br>
                <input type="email" className={styles.input} placeholder="Vaša adresa" ></input>
                <br></br>
                <button className={styles.signup}>Pretplatite se</button>
            </form>
        </div>
    </footer>
)
 
  export default Footer