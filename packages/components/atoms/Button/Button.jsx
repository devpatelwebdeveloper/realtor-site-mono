import React from 'react'
import styles from "./Button.module.scss"

export default function Button({text,link,clickTo,target,children}) {
  return (
    <div  className={styles.button__test}>
      {children}Button
    </div>
  )
}
