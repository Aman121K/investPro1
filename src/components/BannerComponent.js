import React from 'react'
import styles from "../../styles/Banner.module.css"

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
    <img src='http://www.richrobust.com/images/books-bg.jpg'></img>
    <div className={styles.bannerText}>
    <h3 className={styles.bannerHeading}>WELCOME TO Our Website</h3>
    <h4 className={styles.bannerSubheading}>“The place where future billionaires come to get inspired”</h4>
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