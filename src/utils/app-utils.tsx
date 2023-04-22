import { useEffect, useState } from 'react';

const isDayTime = () => {
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    return !!(currentHours >= 7 && currentHours < 19)
}

const setBackground = () => {
    if ( isDayTime() ) {
        document.body.style.backgroundColor = "#F1F6F9";
    } else {
        document.body.style.backgroundColor = "#272727";
    }
}

interface CurrentLocation {
    lat: number,
    lng: number
}

const checkFence = (currentLocation: CurrentLocation) => {
    const { lat, lng } = currentLocation;
    const {
        VITE_APP_ALPHA_LOCATION,
        VITE_APP_BETA_LOCATION,
        VITE_APP_CBLLA_2,
        VITE_APP_CBLLA,
        VITE_APP_CBLLO_2,
        VITE_APP_CBLLO,
        VITE_APP_CBRLA_2,
        VITE_APP_CBRLA,
        VITE_APP_CBRLO_2,
        VITE_APP_CBRLO,
        VITE_APP_CTLLA_2,
        VITE_APP_CTLLA,
        VITE_APP_CTLLO_2,
        VITE_APP_CTLLO,
        VITE_APP_CTRLA_2,
        VITE_APP_CTRLA,
        VITE_APP_CTRLO_2,
        VITE_APP_CTRLO,
    } = import.meta.env;
    const validations = [
        { lat: VITE_APP_CTLLA, lng: VITE_APP_CTLLO },
        { lat: VITE_APP_CTRLA, lng: VITE_APP_CTRLO },
        { lat: VITE_APP_CBLLA, lng: VITE_APP_CBLLO },
        { lat: VITE_APP_CBRLA, lng: VITE_APP_CBRLO },
    ];
    const validations2 = [
        { lat: VITE_APP_CTLLA_2, lng: VITE_APP_CTLLO_2 },
        { lat: VITE_APP_CTRLA_2, lng: VITE_APP_CTRLO_2 },
        { lat: VITE_APP_CBLLA_2, lng: VITE_APP_CBLLO_2 },
        { lat: VITE_APP_CBRLA_2, lng: VITE_APP_CBRLO_2 },
    ];
    const [ topLeft, topRight, bottomLeft, bottomRight ] = validations;
    const [ topLeft2, topRight2, bottomLeft2, bottomRight2 ] = validations2;

    let alphaCheck_1 = "";
    let alphaCheck_2 = "";
    let betaCheck_1 = "";
    let betaCheck_2 = "";
    let result = "";
    
    if ( lat <= topLeft.lat && lat >= bottomLeft.lat && lat <= topRight.lat && lat >= bottomRight.lat) {
        alphaCheck_1 = "alpha";        
    }
    
    if ( lng >= topLeft.lng && lng >= bottomLeft.lng && lng <= topRight.lng && lng <= bottomRight.lng) {
        alphaCheck_2 = "alpha";        
    }

    if ( lat <= topLeft2.lat && lat >= bottomLeft2.lat && lat <= topRight2.lat && lat >= bottomRight2.lat) {
        betaCheck_1 = "beta";        
    }
    
    if ( lng >= topLeft2.lng && lng >= bottomLeft2.lng && lng <= topRight2.lng && lng <= bottomRight2.lng) {
        betaCheck_2 = "beta";        
    }

    if ( alphaCheck_1 && alphaCheck_2 && alphaCheck_1 === alphaCheck_2 ) {
        result = VITE_APP_ALPHA_LOCATION;
    }

    if ( betaCheck_1 && betaCheck_2 && betaCheck_1 === betaCheck_2 ) {
        result = VITE_APP_BETA_LOCATION;
    }

    return result !== "" ? result : "Invalid location";
}

interface dataTime {
    date_time: string
}

interface timeZoneTest {
    data: dataTime,
    loading: boolean,
    error: string | undefined
  }

const fetchTimezone = (url:string):timeZoneTest => {
    const [data, setData] = useState({date_time: ""});
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false));
    }, [url]);

    return { data, error, loading };
};

const validTime = (date:string) => {
    let isValidTime = false;
    const decodedDate = new Date(date);
    const hour = decodedDate.getHours().toString();
    const minutes = decodedDate.getMinutes();
    const {
        VITE_APP_BETA_EVENING_END_HOUR: eveningEnd,
        VITE_APP_BETA_EVENING_START_HOUR: eveningStart,
        VITE_APP_BETA_MORNING_END_HOUR: morningEnd,
        VITE_APP_BETA_MORNING_START_HOUR: morningStart,
    } = import.meta.env;

    const startHour = () => {

        if ( hour >= morningStart && hour <= morningEnd ) {
            return {
                startTime: morningStart,
                endTime: morningEnd,
                validWindow: true,
            }
        } else if ( hour >= eveningStart && hour <= eveningEnd ) {
            return {
                startTime: eveningStart,
                endTime: eveningEnd,
                validWindow: true,
            }
        } else {
            return {
                startTime: 0,
                endTime: 0,
                validWindow: false,
            }
        }
    }
    
    const { startTime, endTime, validWindow } = startHour();

    if ( validWindow ) {
        if ( hour >= startTime && hour <= endTime ) {
            const minutesLeft = 60 - minutes;
            if ( hour < endTime || hour === endTime && minutesLeft > 15 ) {
                isValidTime = true;
            }
        }
    }
    return isValidTime;
}

interface mapsParams {
    latitude: number,
    longitude: number,
}

const getMapsUrl = (params:mapsParams):string => {
    const { latitude, longitude } = params;
    return `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}&hl=es-419`;
}

export { 
    checkFence,
    fetchTimezone,
    getMapsUrl,
    isDayTime,
    setBackground,
    validTime,
}
