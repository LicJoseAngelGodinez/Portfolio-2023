import React, { useEffect, useState } from 'react'
import styles from './test.module.css'

export default function Test() {

  const [errorCode, setErrorCode] = useState(0);
  const [errorMessage, setErrorMessage] = useState("Waiting for your permission...");
  const [urlMaps, setUrlMaps] = useState("");

  const {
    card,
    text
  } = styles;
  
  const success = (position:any) => {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    setUrlMaps(`https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}&hl=es-419`)
    setErrorMessage("Click the link to check your location!")
  }

  const errorFn = ({code, message}:any) => {
    setErrorMessage(message)
    setErrorCode(code);
  };
  
  const currentPosition = navigator.geolocation.getCurrentPosition(success, errorFn);

  useEffect(() => {
    console.log({errorCode, errorMessage});
  });


  return (
    <div className={card}>
      <span className={text}>{errorMessage}</span>
      {urlMaps && <a href={urlMaps} rel="noopener noreferrer" target="_blank">click me</a>}
    </div>
  )
}
