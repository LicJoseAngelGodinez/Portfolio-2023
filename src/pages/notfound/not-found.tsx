import React from 'react'
import DesktopButton from '../../components/buttons/desktop-buttons/desktop-button'
import MobileButton from '../../components/buttons/mobile-buttons/mobile-button'
import Card from '../../components/card/card'
import { useCheckMobileScreen } from '../../utils/app-utils'
import styles from './not-found.module.css'

export default function NotFound() {

    const props = {
        text: 'Volver a inicio',
        url: '/',
    }
    const renderButton = () => useCheckMobileScreen() ? (<MobileButton text={props.text} url={props.url}/>) : (<DesktopButton text={props.text} url={props.url}/>);

    return (
        <div className={styles.errorPage}>
            <Card>
                <>
                    <h1>Oh cielos!</h1>
                    <p>No hemos encontrado nada en esta ruta</p>
                    {renderButton()}
                </>
            </Card>
        </div>
    )
}
