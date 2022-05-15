import React from 'react'
import styles from "../../styles/SectionHeading.module.css"

function SectionHeading({title,quote}) {
  return (
    <div className={styles.headingSection}>
        <h3 className={styles.title}>{title}</h3>
        <h3 className={styles.quote}>{quote}</h3>
    </div>
  )
}

export default SectionHeading