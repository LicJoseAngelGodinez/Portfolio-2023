import React from 'react'
import { simpleButton } from '../../../interfaces/simpleButton'
import styles from './desktop-button.module.css'



export default function DesktopButton(props: simpleButton) {
    const {text, url} = props;
  return (
    <button className={styles.desktopButton}>
        {url ? <a href={url}>{text}</a> : <span>{text}</span>}
    </button>
  )
}
