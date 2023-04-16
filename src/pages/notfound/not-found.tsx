import hearMonkey from '../../assets/icons-monkey/hear-monkey.webp';
import seeMonkey from '../../assets/icons-monkey/see-monkey.webp';
import speakMonkey from '../../assets/icons-monkey/speak-monkey.webp';

import styles from './not-found.module.css';
import Banner from '../../components/banner/banner';
import DesktopButton from '../../components/buttons/desktop-buttons/desktop-button';

export default function NotFound() {
    
    const text = [
        'see',
        'hear',
        'speak',  
    ];
    const images = [
        seeMonkey,
        hearMonkey,
        speakMonkey
    ];
    const randomIndex = Math.floor(Math.random() * images.length);

    return (
        <div className="container">
            <img typeof='image/webp' alt='NotFound' src={images[randomIndex]} />
            <Banner>
                <span>There is nothing to <strong>{text[randomIndex]}</strong> here.</span>
                <DesktopButton text="Home" url="/"/>
            </Banner>
        </div>
    )
}
