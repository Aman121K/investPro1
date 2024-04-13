import React from 'react'
import styles from "../../styles/Banner.module.css"
import ButtonComponent from './ButtonComponent'

function BannerComponent() {
  return (
    <>
      <div className={styles.bannerSection}>
        {/* <video
      className="video-player"
      width="100%"
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      data-testid="homepage-hero-video"
    >
      <source
        src="https://www.alux.com/wp-content/uploads/2019/05/alux.mp4"
        type="video/mp4"
      />
    </video> */}
        <img src='https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D'></img>
        <div className={styles.bannerText}>
          <h3 className={styles.bannerHeading}>RICH ROBUST</h3>
          <h4 className={styles.bannerSubheading}>“We make Traders Profitable here.”</h4>

          <h4 className={styles.bannerLearnHeading}>Get updated about News and Current Affairs about Market</h4>
          <ButtonComponent name="Get Started" />
        </div>
        <div className={styles.clipMask}>
          <svg id="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C40 0 60 0 100 100 Z"></path>
          </svg>
        </div>
      </div>

    </>
  )
}

export default BannerComponent