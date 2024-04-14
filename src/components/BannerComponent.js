import React from 'react'
import styles from "../../styles/Banner.module.css"
import ButtonComponent from './ButtonComponent'

function BannerComponent() {
  // const clik = () => {
  //   // alert('Yeh Vikas')
  // }
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
        <img src='https://img.freepik.com/premium-photo/stock-market-exchange-graph-price_73523-3401.jpg'></img>
        <div className={styles.bannerText}>
          <h1 className={styles.bannerHeading}>RICH ROBUST</h1>
          <h3 className={styles.bannerSubheading}>“We make Traders Profitable here.”</h3>

          <h2 className={styles.bannerLearnHeading}>Get updated about News and Current Affairs about Market</h2>

          <ButtonComponent name="Get Started"  />
        </div>
        {/* <div className={styles.clipMask}>
          <svg id="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C40 0 60 0 100 100 Z"></path>
          </svg>
        </div> */}
      </div>

    </>
  )
}

export default BannerComponent