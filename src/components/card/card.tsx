import React from 'react'
import styles from './card.module.css'

export default function Card({children}:{children: React.ReactElement}) {
  return (
    <div className={styles.card}>
        {children}
    </div>
  )
}
