import React from 'react'
import { simpleButton } from '../../../interfaces/simpleButton'
import styles from './mobile-button.module.css'

export default function MobileButton(props: simpleButton) {
    const {text, url} = props;
  return (
    <button className={styles.mobileButton}>
        {url ? <a href={url}>{text}</a> : <span>{text}</span>}
    </button>
  )
}
