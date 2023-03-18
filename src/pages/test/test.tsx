import { useEffect, useState } from 'react'
import Banner from '../../components/banner/banner';
import DesktopButton from '../../components/buttons/desktop-buttons/desktop-button';
import { checkFence } from '../../utils/app-utils';
import styles from './test.module.css'

export default function Test() {
  const [errorMessage, setErrorMessage] = useState<string>("Wait please...");
  const [urlMaps, setUrlMaps] = useState<string>("");
  const [validLocation, setValidLocation] = useState("");

  const {
    container
  } = styles;

  useEffect(() => {
    const success = (position:GeolocationPosition) => {
      const { coords: { latitude, longitude } } = position;    
      setValidLocation(checkFence({lat: latitude, lng: longitude}));
      setUrlMaps(`https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}&hl=es-419`);
      setErrorMessage("Click the link to check your location!");
    }

    const errorFn = ({code, message}:any) => {
      setErrorMessage(message)
    };
    
    navigator.geolocation.getCurrentPosition(success, errorFn);
  }, []);

  return (
    <div className={container}>
      <Banner>
        <span>{errorMessage}</span>
        {validLocation && (<span>{validLocation}</span>)}
        {urlMaps && (
          <>
            <DesktopButton text="Click me" url={urlMaps}/>
            <DesktopButton text="Home" url="/#/"/>
          </>
        )}
      </Banner>
    </div>
  )
}
