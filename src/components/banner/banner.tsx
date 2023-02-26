import React, { ReactNode } from 'react'
import styles from './banner.module.css'

type BannerProps = {
    children: ReactNode
}

const Banner = ({children}:BannerProps) => {
  return (
    <div className={styles.banner}>
        {children}
    </div>
  )
}

export default Banner;