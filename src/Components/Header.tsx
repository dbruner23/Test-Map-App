import React from 'react'
import Styles from './Header.module.css'

const Header = () => {
  return (
      <div className={Styles.headerContainer}>
          <div className={Styles.logo}>
              <img src="https://scanbuddy.ai/wp-content/uploads/2019/06/white_logo_transparent_background.png" alt="logo" />
          </div>
          <div className={Styles.navContainer}>
                <div className={Styles.navItem}>Data Sets</div>
                <div className={Styles.navItem}>About</div>
                <div className={Styles.navItem}>Contact</div>
          </div>
      </div>
  )
}

export default Header