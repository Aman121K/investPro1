import React from 'react'
import { Button } from 'react-bootstrap'
import styles from "../../styles/ButtonComponent.module.css" 

function ButtonComponent({name,click}) {
  return (
    <div className={styles.buttonContainer}>
        <Button className={styles.btn45} onClick={click}>{name}</Button>
    </div>
  )
}

export default ButtonComponent