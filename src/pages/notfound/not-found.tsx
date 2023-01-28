import hearMonkey from '../../assets/icons-monkey/hear-monkey.webp';
import seeMonkey from '../../assets/icons-monkey/see-monkey.webp';
import speakMonkey from '../../assets/icons-monkey/speak-monkey.webp';

import styles from './not-found.module.css'
import { isDayTime } from '../../utils/app-utils';

export default function NotFound() {

    const { errorPage, errorText, light, lightText, dark, darkText } = styles;
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

    const errorTextClass = `${errorText} ${isDayTime() ? lightText : darkText}`;
    const errorLinkClass = `${isDayTime() ? `${lightText} ${light}` : `${darkText} ${dark}`}`;

    return (
        <div className={errorPage}>
            <img typeof='image/webp' alt='NotFound' src={images[randomIndex]} />
            <p className={errorTextClass}>There is nothing to <strong>{text[randomIndex]}</strong> here.</p>
            <a className={errorLinkClass} href="/"><span>Home</span></a>
        </div>
    )
}
