import { useEffect, useState } from 'react'
import Banner from '../../components/banner/banner';
import Loader from '../../components/loader/loader';
import DesktopButton from '../../components/buttons/desktop-buttons/desktop-button';
import {
  checkFence,
  fetchTimezone,
  getMapsUrl,
  validTime,
} from '../../utils/app-utils';

export default function Test() {
  const { VITE_APP_FIRST_FETCH_API_URL: apiUrl } = import.meta.env;
  const [errorMessage, setErrorMessage] = useState<string>("Wait please...");
  const [urlMaps, setUrlMaps] = useState<string>("");
  const [validLocation, setValidLocation] = useState<string>("");
  const [validSchedule, setValidSchedule] = useState<boolean>(false);
  const {data,loading,error} = fetchTimezone(apiUrl);

  useEffect(() => {
    const success = (position:GeolocationPosition) => {
      const { coords: { latitude, longitude } } = position;    
      setValidLocation(checkFence({lat: latitude, lng: longitude}));
      setUrlMaps(getMapsUrl({latitude, longitude}));
      console.log({url: getMapsUrl({latitude, longitude})});
      
      setErrorMessage("Click the link to check your location!");      
    }

    const errorFn = ({code, message}:any) => {
      setErrorMessage(message)
    };
    
    navigator.geolocation.getCurrentPosition(success, errorFn);
  }, []);

  useEffect(() => {
    if(!loading){
      setValidSchedule(validTime(data.date_time));      
    }
  },[loading]);

  return (
    <div className="container">
      {loading && (<Loader />)}
      {!loading && !validSchedule && (
        <Banner>
          <span>Not available</span>
          <span>Out of schedule</span>
        </Banner>
      )}
      {!loading && validSchedule && (
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
      )}
    </div>
  )
}
