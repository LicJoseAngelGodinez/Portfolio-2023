import { useEffect, useState } from 'react'
import Banner from '../../components/banner/banner';
import Loader from '../../components/loader/loader';
import DesktopButton from '../../components/buttons/desktop-buttons/desktop-button';
import {
  checkFence,
  getMapsUrl,
  validTime,
} from '../../utils/app-utils';

interface dataTime {
  date_time: string
}

interface timeZone {
  data: dataTime,
  loading: boolean,
  error: string | undefined
}

export default function Test() {
  const { VITE_APP_FIRST_FETCH_API_URL } = import.meta.env;
  const [errorMessage, setErrorMessage] = useState<string>("Wait please...");
  const [urlMaps, setUrlMaps] = useState<string>('');
  const [apiUrl, setApiUrl] = useState<string>('');
  const [validLocation, setValidLocation] = useState<string>('');
  const [validSchedule, setValidSchedule] = useState<boolean>(false);
  const [validScheduleMessage, setValidScheduleMessage] = useState<string>('Out of schedule');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<object>();
  const [data, setData] = useState<dataTime>({ date_time: ''});

  useEffect(() => {
    const success = (position:GeolocationPosition) => {
      const { coords: { latitude, longitude } } = position;

      setValidLocation(checkFence({lat: latitude, lng: longitude}));
      setUrlMaps(getMapsUrl({latitude, longitude}));      
    }

    const errorFn = ({code, message}:any) => {
      setLoading(false);
      setErrorMessage(message);      
    };
    
    navigator.geolocation.getCurrentPosition(success, errorFn);
  }, []);

  useEffect(() => {
    if(validLocation) {
      setErrorMessage("Click the link to check your location!");
      setApiUrl(VITE_APP_FIRST_FETCH_API_URL);
    } else {
      setErrorMessage('Invalid location');
    }
  },[validLocation]);

  useEffect(() => {
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setData(data);        
        setValidSchedule(validTime(data.date_time))
      })
      .catch(error => {        
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [apiUrl]);

  useEffect(() => {
    if(validSchedule) {
      setValidScheduleMessage('We are ready!');
    }
  }, [validSchedule]);

  return (
    <div className="container">
      {loading && (<Loader />)}
      {!loading && (
        <Banner>
          <span>{errorMessage}</span>
          <span>{validScheduleMessage}</span>
          {validLocation && (<span>{validLocation}</span>)}
          {urlMaps && (
            <div className='rowContainer'>
              <DesktopButton text="Click me" url={urlMaps}/>
              <DesktopButton text="Home" url="/#/"/>
            </div>
          )}
        </Banner>
      )}
    </div>
  )
}
