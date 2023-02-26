import React from 'react'
import { simpleButton } from '../../../interfaces/simpleButton'
import styles from './desktop-button.module.css'



export default function DesktopButton(props: simpleButton) {
    const {text, url} = props;
  return (
    <a className={styles.desktopButton} rel="noopener noreferrer" href={url}>{text}</a>
  )
}
