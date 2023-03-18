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
    let alphaCheck_1 = "";
    let alphaCheck_2 = "";
    let betaCheck_1 = "";
    let betaCheck_2 = "";
    let result = "";
    const validations2 = [
        { lat: import.meta.env.VITE_APP_CTLLA_2, lng: import.meta.env.VITE_APP_CTLLO_2 },
        { lat: import.meta.env.VITE_APP_CTRLA_2, lng: import.meta.env.VITE_APP_CTRLO_2 },
        { lat: import.meta.env.VITE_APP_CBLLA_2, lng: import.meta.env.VITE_APP_CBLLO_2 },
        { lat: import.meta.env.VITE_APP_CBRLA_2, lng: import.meta.env.VITE_APP_CBRLO_2 },
    ];
    const validations = [
        { lat: import.meta.env.VITE_APP_CTLLA, lng: import.meta.env.VITE_APP_CTLLO },
        { lat: import.meta.env.VITE_APP_CTRLA, lng: import.meta.env.VITE_APP_CTRLO },
        { lat: import.meta.env.VITE_APP_CBLLA, lng: import.meta.env.VITE_APP_CBLLO },
        { lat: import.meta.env.VITE_APP_CBRLA, lng: import.meta.env.VITE_APP_CBRLO },
    ];
    const [ topLeft, topRight, bottomLeft, bottomRight ] = validations;
    const [ topLeft2, topRight2, bottomLeft2, bottomRight2 ] = validations2;    
    
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
        result = import.meta.env.VITE_APP_ALPHA_LOCATION;
    }

    if ( betaCheck_1 && betaCheck_2 && betaCheck_1 === betaCheck_2 ) {
        result = import.meta.env.VITE_APP_BETA_LOCATION;
    }

    return result !== "" ? result : "Invalid location";
}

export { 
    isDayTime,
    setBackground,
    checkFence,
}
