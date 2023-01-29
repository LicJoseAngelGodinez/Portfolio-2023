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

export { 
    isDayTime,
    setBackground
}
